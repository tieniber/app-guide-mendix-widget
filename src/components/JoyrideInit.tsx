import { createElement, useState, ReactElement } from "react";
import Joyride, { ACTIONS, EVENTS, LIFECYCLE, STATUS } from "react-joyride";
import { ReactAppGuideContainerProps } from "../../typings/ReactAppGuideProps";
import { reFormattedList } from "../utils";

type ExcludedReactAppGuideContainerProps = Omit<ReactAppGuideContainerProps, "class" | "name">;
const JoyrideInit = ({
    listOfSteps,
    showSkipButton,
    showProgress,
    onComplete,
    isPageCall,
    arrowColor,
    overlayColor,
    textColor,
    primaryColor,
    backgroundColor
}: ExcludedReactAppGuideContainerProps): ReactElement => {
    const formattedList = reFormattedList(listOfSteps);
    const [stepCounter, setStepCounter] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    const _allDone = (): void => {
        if (onComplete && onComplete.canExecute) {
            onComplete.execute();
        }
        setIsRunning(false);
        setStepCounter(0);
    };

    const _goToStep = (newIndex: number, type: string): void => {
        // const updateIndex = index + 1;
        const newStep = listOfSteps[newIndex];

        if (newStep) {
            if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
                // run the before step action of the new step here
                if (newStep.beforeStepAction && newStep.beforeStepAction.canExecute) {
                    newStep.beforeStepAction.execute();
                }
            }
            if (newStep.delayBeforeStep === 0) {
                setStepCounter(newIndex);
            } else {
                setTimeout(() => setStepCounter(newIndex), newStep.delayBeforeStep);
            }
        } else {
            _allDone();
        }
    };

    const _callbackHandler = (data: any): void => {
        const { status, action, index, lifecycle, type } = data;

        if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
            _allDone();
        }

        if (type === EVENTS.STEP_AFTER) {
            const currentStep = listOfSteps[index];
            if (currentStep && currentStep.afterStepAction && currentStep.afterStepAction.canExecute) {
                currentStep.afterStepAction.execute();
            }
        }

        if (action === ACTIONS.NEXT && index === stepCounter && lifecycle === LIFECYCLE.COMPLETE) {
            _goToStep(index + 1, type);
        }

        if (action === ACTIONS.PREV && index === stepCounter && lifecycle === LIFECYCLE.COMPLETE) {
            _goToStep(index - 1, type);
        }

        if (type === EVENTS.TARGET_NOT_FOUND) {
            if (action === ACTIONS.NEXT) {
                // not found, skip ahead to the next one
                _goToStep(index + 1, type);
            }
            if (action === ACTIONS.PREV) {
                // not found, skip back to the previous one
                _goToStep(index - 1, type);
            }
        }
    };

    return (
        <div>
            <Joyride
                stepIndex={stepCounter}
                callback={_callbackHandler}
                steps={formattedList}
                // eslint-disable-next-line react/jsx-boolean-value
                run={isRunning}
                continuous
                disableScrollParentFix
                disableScrolling={false}
                scrollToFirstStep // Decided Not To make User Changeable
                scrollOffset={100}
                disableOverlayClose // Decided Not To make User Changeable
                showProgress={showProgress}
                showSkipButton={showSkipButton}
                locale={{ last: isPageCall ? "Next" : "End Tour" }}
                spotlightPadding={0}
                styles={{
                    buttonClose: {
                        display: "none"
                    },
                    options: {
                        arrowColor: arrowColor ? arrowColor : "#fff",
                        overlayColor: overlayColor ? overlayColor : "rgba(0,0,0,0.5)",
                        backgroundColor: backgroundColor ? backgroundColor : "#fff",
                        primaryColor: primaryColor ? primaryColor : "#000",
                        textColor,
                        zIndex: 1000
                    }
                }}
            />
        </div>
    );
};

export default JoyrideInit;

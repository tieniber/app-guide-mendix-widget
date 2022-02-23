import { Component, ReactNode, createElement } from "react";

import JoyrideInit from "./components/JoyrideInit";

import { ReactAppGuideContainerProps } from "../typings/ReactAppGuideProps";

// import "./ui/ReactAppGuide.css";

export default class ReactAppGuide extends Component<ReactAppGuideContainerProps> {
    render(): ReactNode {
        const {
            textColor,
            listOfSteps,
            tabIndex,
            arrowColor,
            overlayColor,
            backgroundColor,
            onComplete,
            primaryColor,
            showSkipButton,
            showProgress,
            isPageCall
        } = this.props;

        return (
            <JoyrideInit
                showSkipButton={showSkipButton}
                listOfSteps={listOfSteps}
                tabIndex={tabIndex}
                arrowColor={arrowColor}
                backgroundColor={backgroundColor}
                primaryColor={primaryColor}
                overlayColor={overlayColor}
                textColor={textColor}
                showProgress={showProgress}
                onComplete={onComplete}
                isPageCall={isPageCall}
            />
        );
    }
}

import { ListOfStepsType } from "../../typings/ReactAppGuideProps";
const _formatTarget = (target: string): string => {
    if (target.indexOf(".")) {
        // Add a Dot To the Start
        const newTarget = `.${target}`;
        return newTarget;
    } else {
        return `${target}`;
    }
};

export const reFormattedList = (listOfSteps: ListOfStepsType[]): [] => {
    const _reFormattedList = listOfSteps.reduce((a: any, c: any) => {
        if (a.length === 0) {
            return [
                ...a,
                {
                    ...c,
                    disableBeacon: true,
                    target: _formatTarget(c.target)
                }
            ];
        } else {
            return [
                ...a,
                {
                    ...c,
                    disableBeacon: false,
                    target: _formatTarget(c.target)
                }
            ];
        }
    }, []);
    return _reFormattedList;
};

export const findAndTriggerScroll = (target: string): any => {
    console.log("target", target);
    const sanitizedTarget = target.replace(/\./g, "");
    const elements = document.getElementsByClassName(sanitizedTarget);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        if (element.offsetWidth > 0 && element.offsetHeight > 0) {
            return element && element.scrollIntoView({ block: "center" });
        }
    }
    return null;
};

// console.log("listOfSteps", listOfSteps);
// var stringToHTML = function(str: string) {
//     var dom = document.createElement("div");
//     dom.innerHTML = str;
//     console.log("dom", dom);
//     return dom;
// };

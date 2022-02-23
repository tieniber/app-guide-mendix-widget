/**
 * This file was generated from ReactAppGuide.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type PlacementEnum = "auto" | "top" | "bottom" | "left" | "right" | "center";

export interface ListOfStepsType {
    afterStepAction: ActionValue;
    beforeStepAction: ActionValue;
    delayBeforeStep: integer;
    target: string;
    title: string;
    content: string;
    placement: PlacementEnum;
}

export interface ListOfStepsPreviewType {
    target: string;
    title: string;
    content: string;
    placement: PlacementEnum;
}

export interface ReactAppGuideContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    onComplete?: ActionValue;
    isPageCall: boolean;
    showSkipButton: boolean;
    showProgress: boolean;
    listOfSteps: ListOfStepsType[];
    arrowColor: string;
    textColor: string;
    primaryColor: string;
    backgroundColor: string;
    overlayColor: string;
}

export interface ReactAppGuidePreviewProps {
    class: string;
    style: string;
    userWelcome: string;
    onUserWelcomeChange: {} | null;
    isPageCall: boolean;
    showSkipButton: boolean;
    showProgress: boolean;
    listOfSteps: ListOfStepsPreviewType[];
    arrowColor: string;
    textColor: string;
    primaryColor: string;
    backgroundColor: string;
    overlayColor: string;
}

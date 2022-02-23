/**
 * This file was generated from AppGuide.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export type PlacementEnum = "auto" | "top" | "bottom" | "left" | "right" | "center";

export interface ListOfStepsType {
    target: string;
    title: string;
    content: string;
    placement: PlacementEnum;
    beforeStepAction?: ActionValue;
    delayBeforeStep: number;
    afterStepAction?: ActionValue;
}

export interface ListOfStepsPreviewType {
    target: string;
    title: string;
    content: string;
    placement: PlacementEnum;
    beforeStepAction: {} | null;
    delayBeforeStep: number | null;
    afterStepAction: {} | null;
}

export interface AppGuideContainerProps {
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

export interface AppGuidePreviewProps {
    class: string;
    style: string;
    onComplete: {} | null;
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

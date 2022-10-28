import React from "react";
import { Canvas, IIIFExternalWebResource } from "@iiif/presentation-3";
import { LabeledResource } from "@/hooks/use-iiif/getSupplementingResources";
interface Props {
    activeCanvas: string;
    painting: IIIFExternalWebResource;
    resources: LabeledResource[];
    items: Canvas[];
    isAbout: boolean;
    isInformation: boolean;
    isMedia: boolean;
    isNavigator: boolean;
    isNavigatorOpen: boolean;
}
declare const ViewerContent: React.FC<Props>;
export default ViewerContent;

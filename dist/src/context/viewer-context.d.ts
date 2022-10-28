import { Options } from "openseadragon";
import React from "react";
import { Vault } from "@iiif/vault";
import { CollectionNormalized } from "@iiif/presentation-3";
export declare type ConfigOptions = {
    canvasBackgroundColor?: string;
    canvasHeight?: string;
    ignoreCaptionLabels?: string[];
    openSeadragon?: Options;
    renderAbout?: boolean;
    showIIIFBadge?: boolean;
    showInformationToggle?: boolean;
    showTitle?: boolean;
};
interface ViewerContextStore {
    activeCanvas: string;
    activeManifest: string;
    collection?: CollectionNormalized | {};
    configOptions: ConfigOptions;
    informationExpanded: boolean;
    isLoaded: boolean;
    vault: Vault;
}
interface ViewerProviderProps {
    initialState?: ViewerContextStore;
    children: React.ReactNode;
}
declare const ViewerProvider: React.FC<ViewerProviderProps>;
declare function useViewerState(): ViewerContextStore;
declare function useViewerDispatch(): ViewerContextStore;
export { ViewerProvider, useViewerState, useViewerDispatch };

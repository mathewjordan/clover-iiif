import React from "react";
import { IIIFExternalWebResource } from "@iiif/presentation-3";
interface ImageViewerProps {
    body: IIIFExternalWebResource;
}
declare const ImageViewer: React.FC<ImageViewerProps>;
export default ImageViewer;

import React from "react";
export declare type osdImageTypes = "tiledImage" | "simpleImage" | undefined;
interface OSDProps {
    uri: string | undefined;
    imageType: osdImageTypes;
}
declare const OSD: React.FC<OSDProps>;
export default OSD;

import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import {
  Navigator,
  Viewport,
  Wrapper,
} from "@/components/ImageViewer/ImageViewer.styled";
import Controls from "@/components/ImageViewer/Controls";
import { getInfoResponse } from "@/services/iiif";
import { v4 as uuidv4 } from "uuid";
import { useViewerState } from "@/context/viewer-context";

export type osdImageTypes = "tiledImage" | "simpleImage" | undefined;

interface OSDProps {
  uri: string | undefined;
  imageType: osdImageTypes;
}

const OSD: React.FC<OSDProps> = ({ uri, imageType }) => {
  const [osdUri, setOsdUri] = useState<string>();
  const viewerState: any = useViewerState();
  const { configOptions } = viewerState;

  const instance = uuidv4();

  const config = {
    id: `openseadragon-viewport-${instance}`,
    loadTilesWithAjax: true,
    homeButton: "zoomReset",
    showFullPageControl: false,
    zoomInButton: "zoomIn",
    zoomOutButton: "zoomOut",
    showNavigator: true,
    navigatorBorderColor: "transparent",
    navigatorId: `openseadragon-navigator-${instance}`,
    gestureSettingsMouse: {
      clickToZoom: true,
      dblClickToZoom: true,
      pinchToZoom: true,
      scrollToZoom: false,
    },
  };

  useEffect(() => {
    if (uri !== osdUri) setOsdUri(uri);
  }, []);

  useEffect(() => {
    if (osdUri) {
      switch (imageType) {
        case "simpleImage":
          OpenSeadragon(config).addSimpleImage({
            url: osdUri,
          });
          break;
        case "tiledImage":
          getInfoResponse(osdUri).then((tileSource) =>
            OpenSeadragon(config).addTiledImage({
              tileSource: tileSource,
            }),
          );
          break;
        default:
          console.warn(
            `Unable to render ${osdUri} in OpenSeadragon as type: "${imageType}"`,
          );
          break;
      }
    }
  }, [osdUri]);

  return (
    <Wrapper
      css={{
        backgroundColor: configOptions.canvasBackgroundColor,
        height: configOptions.canvasHeight,
      }}
    >
      <Controls />
      <Navigator id={`openseadragon-navigator-${instance}`} />
      <Viewport id={`openseadragon-viewport-${instance}`} />
    </Wrapper>
  );
};

export default OSD;

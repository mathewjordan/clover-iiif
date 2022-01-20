import React from "react";
import Hls from "hls.js";
import { PlayerWrapper } from "./Player.styled";
import {
  IIIFExternalWebResource,
  InternationalString,
} from "@hyperion-framework/types";
import { LabeledResource } from "hooks/use-hyperion-framework/getSupplementingResources";
import { getLabel } from "hooks/use-hyperion-framework";
import AudioVisualizer from "./AudioVisualizer";
import { CurrentTimeContext } from "context/current-time-context";

// Set referrer header as a NU domain: ie. meadow.rdc-staging.library.northwestern.edu

interface PlayerProps {
  painting: IIIFExternalWebResource;
  resources: LabeledResource[];
}

const Player: React.FC<PlayerProps> = ({ painting, resources }) => {
  const playerRef = React.useRef(null);
  const isAudio = painting?.format?.includes("audio/");

  const { startTime, updateCurrentTime } = React.useContext(CurrentTimeContext);

  /**
   * HLS.js binding for .m3u8 files
   * STAGING and PRODUCTION environments only
   */
  React.useEffect(() => {
    /**
     * Check that IIIF content resource ID exists and
     * we have a reffed <video> for attaching HLS
     */
    if (!painting.id || !playerRef.current) return;

    /**
     * Eject HLS attachment if file extension from
     * the IIIF content resource ID is not .m3u8
     */
    if (painting.id.split(".").pop() !== "m3u8") return;

    // Bind hls.js package to our <video /> element and then load the media source
    const hls = new Hls();
    hls.attachMedia(playerRef.current);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(painting.id as string);
    });

    // Handle errors
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.error(
              `fatal ${event} network error encountered, try to recover`,
            );
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.error(
              `fatal ${event} media error encountered, try to recover`,
            );
            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });

    return () => {
      if (hls) {
        hls.detachMedia();
        hls.destroy();
        updateCurrentTime(0);
      }
    };
  }, [painting.id]);

  React.useEffect(() => {
    let video: any = playerRef.current;
    if (video) video.currentTime = startTime;
    video.play();
  }, [startTime]);

  const handlePlay = () => {
    let video: any = playerRef.current;
    if (video) {
      video.ontimeupdate = (event: any) => {
        updateCurrentTime(event.target.currentTime);
      };
    }
  };

  return (
    <PlayerWrapper>
      <video
        id="react-media-player"
        key={painting.id}
        ref={playerRef}
        controls
        height={painting.height}
        width={painting.width}
        onPlay={handlePlay}
      >
        <source src={painting.id} type={painting.format} />
        {resources.length > 0 &&
          resources.map((resource) => {
            return (
              <track
                key={resource.id}
                src={resource.id as string}
                label={
                  getLabel(
                    resource.label as InternationalString,
                    "en",
                  ) as any as string
                }
                srcLang="en"
              ></track>
            );
          })}
        Sorry, your browser doesn't support embedded videos.
      </video>

      {isAudio && <AudioVisualizer ref={playerRef} />}
    </PlayerWrapper>
  );
};

export default Player;

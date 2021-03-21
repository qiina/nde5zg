import React from "react";

const useAudio = (url: string) => {
  // create audio only once
  const [audio] = React.useState(new Audio(url));

  // same as React.Component.forceUpdate
  const [, _forceUpdate] = React.useState(false);
  const forceUpdate = () => _forceUpdate(prevState => !prevState);

  React.useEffect(() => {
    audio.play();
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);
    audio.addEventListener("ended", forceUpdate);
    audio.addEventListener("timeupdate", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
      audio.removeEventListener("ended", forceUpdate);
      audio.addEventListener("timeupdate", forceUpdate);
    };

    /**
     * about useEffect's second argument
     *    give nothing        => same as componentDidUpdate
     *    give an empty array => same as componentWillMount
     */
  }, []);

  const play = () => audio.play();
  const pause = () => audio.pause();

  return [!audio.paused, audio.currentTime, play, pause];
};

export default useAudio;

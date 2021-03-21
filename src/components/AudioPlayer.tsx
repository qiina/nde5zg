import useAudio from './utils/useAudio';

const audioUrl = "./Gymnopedie.mp3";

const AudioPlayer = () => {
  const audio = new Audio(audioUrl);

  const handleClick = () => {
    audio.play();
  }

  return (
    <>

      <span onClick={handleClick}>
        +-+-+
      </span>
    </>
  );
};
export default AudioPlayer;
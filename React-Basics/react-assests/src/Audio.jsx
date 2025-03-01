import React, { useRef } from "react";

const Song = () => {
  const bird1 = useRef(new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"));
  const bird2 = useRef(new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"));

  function toggleAudio(audioRef) {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div>
      <button onClick={() => toggleAudio(bird1)}>Caspian Tern 1</button>
      <button onClick={() => toggleAudio(bird2)}>Caspian Tern 2</button>
    </div>
  );
};

export default Song;

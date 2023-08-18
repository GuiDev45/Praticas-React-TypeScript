import React from "react";
import "../App.css";
import videoSrc from "./video.mp4";

function AppUseRef() {
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return (
    <div>
      <div className="flex">
        {/*Lembrando que play e pause são elementos de vídeo, precisa olhar a documentação para ver os outros elementos*/}
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default AppUseRef;

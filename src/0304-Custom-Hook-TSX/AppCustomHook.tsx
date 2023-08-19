import React from "react";
import "../App.css";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

function AppCustomHook() {
  const [volume, setVolume] = useLocalStorage("volume", "0");
  const video = React.useRef<HTMLVideoElement>(null);

  // Esse é o efeito que modifica o volume do video, essa array vai ser modificada toda vez que o volume mudar.
  React.useEffect(() => {
    if (!video.current) return;
    const n = Number(volume); // como volume é uma string, precisa forçar um number nele
    if (n >= 0 && n <= 1) video.current.volume = n; // para não quebrar a aplicação essa condição é necessária, porque não é possível colocar um volume de 200% que seja, então tem que ter essa condição
  }, [volume]);

  return (
    <div>
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
        <button onClick={() => setVolume("2")}>200 (N)</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default AppCustomHook;

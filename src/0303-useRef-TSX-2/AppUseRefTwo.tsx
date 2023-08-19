import React from "react";
import "../App.css";
import videoSrc from "./video.mp4";

function AppUseRefTwo() {
  const video = React.useRef<HTMLVideoElement>(null);
  // começa false porque o video começa sem tocar
  const [playing, setPlaying] = React.useState(false);

  // Se o video não existir nem passa pelo bloco de código, entra no return e sai (se existir pelo fato que ele começa null), .currentTime recebe o tempo que está + 2seg
  function forward() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  // velocidade do vídeo
  // recebe um parametro porque essa função vai ser aproveitada tanto pra 1x de velocidade quanto pra 2x de velocidade, .playbackRate que é o que controla isso recebe esse parametro
  function changePlaybackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  // Para usar o pictureInPicture é só ver na documentação e usar bastante o auto completar que se torna algo bem simples.
  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  // deixar mudo, .muted propriedade que faz isso, e como é um boolean se for falso não fica mute e se for true fica mute.
  // lembrando que não é deixa o volume em 0, com o mute ele vai pra 0 porém quando tira o mute volta no volume que estava antes do mute.
  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  return (
    <div>
      <div className="flex">
        {/*Se playing for false .pause se playing for true .play*/}
        {playing ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>Play</button>
        )}
        <button onClick={forward}>+ 2s</button>
        <button onClick={() => changePlaybackRate(1)}>1x</button>
        <button onClick={() => changePlaybackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>M</button>
      </div>

      <video
        controls
        ref={video}
        src={videoSrc}
        // onPlay é um evento que mostra se o video está tocando
        onPlay={() => setPlaying(true)}
        // onPause é um evento que mostra se o video está parado
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
}

export default AppUseRefTwo;

import React, { useEffect } from "react";
import cipicipiAudio from "../assets/cipicipi.mp3"; // Adjust the path as necessary

const FinalScreen = ({ imageSrc, finalText }) => {
  useEffect(() => {
    const audio = new Audio(cipicipiAudio);
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }

    return () => {
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            audio.pause();
          })
          .catch((error) => {
            console.error("Error pausing the audio", error);
          });
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img src={"/final.gif"} alt="Final" width={200} />
      <span
        className="font-bold mb-6 text-2xl text-center"
        style={{
          textShadow: "2px 2px white",
          textWrap: "balance",
        }}
      >
        OTO OFICJALNE ZAPROSZENIE NA RANDKE W WALENTYNKI. WIENCEJ SZCZEGULOW -
        WNET
      </span>
    </div>
  );
};

export default FinalScreen;

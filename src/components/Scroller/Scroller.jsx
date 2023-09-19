import Marquee from "react-fast-marquee";
import styled from "./Scroller.module.css";

export const wordsToTrackBase = [
  "#вперед",
  "#воля",
  "#свобода",
  "#перемога",
  "#підтримка",
  "#школа ходи",
];

export const Scroller = () => {
  const wordsToTrack = Array(4).fill(wordsToTrackBase).flat();

  return (
    <Marquee>
      <div className={styled.scroller}>
        <div>
          {wordsToTrack.map((word, idx) => (
            <span className={styled.word} key={`${word}-${idx}`}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </Marquee>
  );
};

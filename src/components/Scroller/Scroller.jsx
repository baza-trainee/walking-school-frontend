import Marquee from "react-fast-marquee";
import styled from "./Scroller.module.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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
    <div className={styled.scroller}>
      <Marquee data-testid="marquee">
        {wordsToTrack.map((word) => (
          <span
            data-testid="word"
            className={styled.word}
            key={uuidv4()}
            data-key={uuidv4()}
          >
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

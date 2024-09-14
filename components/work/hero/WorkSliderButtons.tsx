"use cliet";
import React from "react";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export type WorkSliderProps = {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string;
  activeIndex?: number;
};

const WorkSliderButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} />
      </button>

      <button className={btnStyles}>
        <PiCaretRightBold
          onClick={() => swiper.slideNext()}
          className={iconStyles}
        />
      </button>
    </div>
  );
};

export default WorkSliderButtons;

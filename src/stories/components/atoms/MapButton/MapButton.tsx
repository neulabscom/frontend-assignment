import React, { useState } from "react";

import ButtonDefault from "./../../../assets/icons/buttonDefault.svg";
import ButtonHover from "./../../../assets/icons/buttonHover.svg";

interface MapButtonProps {
  top: string;
  left: string;
  isButtonActive?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MapButton = ({
  top = "0%",
  left = "0%",
  isButtonActive = false,
  ...props
}: MapButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const isActive = isButtonActive;
  return (
    <div
      {...props}
      style={{ position: "absolute", top, left }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {(isHover || isActive) && <img src={ButtonHover} alt="" />}
      {!isHover && !isActive && <img src={ButtonDefault} alt="" />}
    </div>
  );
};

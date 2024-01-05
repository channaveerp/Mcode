import React from "react";

export default function Close({ width = 12, height = 12 }) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-toggle__svg nav-toggle__close"
    >
      <path
        d="M0.757812 11.2428L6.00081 5.99984M11.2438 0.756836L5.99981 5.99984M5.99981 5.99984L0.757812 0.756836M6.00081 5.99984L11.2438 11.2428"
        stroke="#FFFFFF"
        stroke-opacity="0.5"
        stroke-width="1.5px"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      ></path>
    </svg>
  );
}

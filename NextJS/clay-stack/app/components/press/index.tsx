"use client";
import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";
import "./index.scss";

export default function Press() {
  const arr = new Array(6).fill(1);

  return (
    <main className="press-container">
      <div className="press">
        <h2 className="heading02">In the press</h2>

        <div className="img-container">
          {arr.map((item, index) => (
            <Marquee speed={100} key={index}>
              <div className="press-img">
                <img src="img/the-block.png" alt="" />
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </main>
  );
}

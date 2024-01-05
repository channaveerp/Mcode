"use client";
import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

const heading = {
  hidden: { y: -10, color: "#eb01f3" },
  visible: {
    y: 0,
    color: "#ffffff",
    transition: {
      ease: "easeOut",
      duration: 2,
      delay: 0.5,
      type: "tween",
    },
  },
};

const text = {
  hidden: { y: -10 },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 2,
      delay: 0.5,
      type: "tween",
    },
  },
};

export default function Ambassador() {
  return (
    <>
      <main className="ambassador">
        <div className="animation">
          <video
            muted
            autoPlay
            loop
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            src="video/logo.webm"
          ></video>
        </div>
        <div className="details">
          <motion.h1
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="heading01"
          >
            Become a ClayStack Ambassador
          </motion.h1>
          <motion.p
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="paragraph01"
          >
            ClayStack is pioneering the next DeFi revolution by maximising
            capital efficiency. This is your chance of joining the legacy.
          </motion.p>
          <button>Learn More</button>
        </div>
      </main>
      <div className="stats">
        <p className="paragraph01">
          <span className="stats-name">Active Members</span>
          <span>50000+</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Contries</span>
          <span>30+</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Priority</span>
          <span>Access</span>
        </p>
      </div>
    </>
  );
}

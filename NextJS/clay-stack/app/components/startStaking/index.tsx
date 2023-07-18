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
  hidden: { y: -10, scale: 0 },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      type: "tween",
    },
  },
};

export default function StartStaking() {
  return (
    <motion.div className="start-staking">
      <motion.h1
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading01"
      >
        Start Staking
      </motion.h1>

      <div className="content">
        <video
          muted
          autoPlay
          loop
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          src="video/logo.webm"
        ></video>
        <div className="details">
          <motion.p
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="paragraph01"
          >
            Stake your assets and use the issued staking derivatives across the
            DeFi ecosystem.
          </motion.p>
          <button>Get Started</button>
        </div>
      </div>
    </motion.div>
  );
}

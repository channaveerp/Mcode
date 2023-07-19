"use client";
import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const heading = {
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

export default function SupportedTokens() {
  return (
    <main className="supported-tokens">
      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading02"
      >
        Supported Tokens
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="tokens"
      >
        <motion.div variants={item} className="token-card">
          {/* <div>
            <img width="16px" height="16px" src="img/polygon.svg" alt="" />
            <p className="paragraph02">Polygon</p>
          </div> */}
        </motion.div>
        <motion.div variants={item} className="token-card"></motion.div>
        <motion.div variants={item} className="token-card"></motion.div>
        <motion.div variants={item} className="token-card"></motion.div>
      </motion.div>
    </main>
  );
}

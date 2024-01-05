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

export default function BecomeValidator() {
  return (
    <main className="validator-container">
      <div className="details">
        <motion.h1
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="heading01"
        >
          Become a Validator
        </motion.h1>
        <motion.div
          variants={text}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="note paragraph02"
        >
          Start validating on the Ethereum network for the lowest bond in the
          industry.
        </motion.div>
        <button>Learn More</button>
      </div>
      <div className="val-img">
        <img src="img/validator3d.svg" alt="" />
      </div>
    </main>
  );
}

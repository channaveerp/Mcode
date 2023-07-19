"use client";
import React from "react";
import "./index.scss";
import { delay, motion } from "framer-motion";
import Revolution from "@/icons/revolution";

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

export default function StakeRevolution() {
  return (
    <main className="stake-revolution">
      <div className="stake-content">
        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="heading02"
        >
          Pioneering the Ethereum Liquid Staking Revolution
        </motion.h2>
        <motion.p
          variants={text}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="paragraph01"
        >
          ClayStack offers an inclusive, secure, scalable, highly decentralized,
          and a censorship-resistant liquid staking architecture. Join us as we
          revolutionize liquid staking.
        </motion.p>
      </div>
      <div className="stake-img">
        <Revolution />
        <motion.span
        // whileInView={{
        //   width: 275,
        //   height: 275,
        //   background:
        //     "radial-gradient( circle, rgba(74, 245, 234, 0.6) 0, rgba(74, 245, 234, 0) 70%)",
        // }}
        // viewport={{ once: true }}
        // transition={{ delay: 1, duration: 2 }}
        ></motion.span>
      </div>
    </main>
  );
}

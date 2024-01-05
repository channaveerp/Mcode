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
      duration: 0.2,
    },
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

export default function Features() {
  return (
    <main className="feature-container">
      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading03"
      >
        Why ClayStack?
      </motion.h2>
      <div className="fe-items">
        <div className="fe-item">
          <video
            width="600px"
            height="600px"
            muted
            autoPlay
            src="video/inclusivity.webm"
          ></video>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="fe-item-content"
          >
            <h2 className="heading03">Inclusive</h2>
            <p className="paragraph02">
              With ClayStack, node operators can spawn new validators for the
              lowest bond and earn rewards. This happens without compromising on
              the security and decentralization of Ethereum.
            </p>
          </motion.div>
        </div>

        {/*  */}
        <div className="fe-item">
          <video
            width="600px"
            height="600px"
            muted
            autoPlay
            src="video/decentralised.webm"
          ></video>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="fe-item-content"
          >
            <h2 className="heading03">Decentralized</h2>
            <p className="paragraph02">
              The ClayStack Ethereum protocol sets precedence for
              decentralization at the protocol level by incorporating DVT and a
              novel Algorithmic Node Balancing system.
            </p>
          </motion.div>
        </div>

        {/*  */}

        <div className="fe-item">
          <video
            width="600px"
            height="600px"
            muted
            autoPlay
            src="video/efficiency.webm"
          ></video>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="fe-item-content"
          >
            <h2 className="heading03">Efficient</h2>
            <p className="paragraph02">
              The ClayStack Protocol integrates with Sonic and offers users the
              ability to flash exit and process efficient redemptions of their
              liquid-staked assets. This cuts down the unbonding periods and
              enhances efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

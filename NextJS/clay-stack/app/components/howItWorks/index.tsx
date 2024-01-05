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

export default function HowItWorks() {
  return (
    <motion.main className="how-it-works">
      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading02"
      >
        How ClayStack works
      </motion.h2>
      <motion.p
        variants={text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="paragraph01"
      >
        Stake your tokens and participate in DeFi at the same time.
      </motion.p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="work-steps"
      >
        <motion.div variants={item} className="card">
          <motion.p
            initial={{ backgroundColor: "#eb01f3", padding: "2px" }}
            whileInView={{ backgroundColor: "transparent", padding: "10px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="circle one "
          >
            1
          </motion.p>
          <h1 className="heading01 one">Stake</h1>
          <p className="paragraph02">
            Deposit your native tokens (e.g.: ETH) on ClayStack smart contracts.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="card">
          <motion.p
            initial={{ backgroundColor: "#6801f3", padding: "2px" }}
            whileInView={{ backgroundColor: "transparent", padding: "10px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="circle two "
          >
            2
          </motion.p>
          <h1 className="heading01 two">Receive</h1>
          <p className="paragraph02">
            Liquid-staked derivative tokens (csETH) in your wallet that increase
            in value with daily staking rewards.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="card">
          <motion.p
            initial={{ backgroundColor: "#233cf9", padding: "2px" }}
            whileInView={{ backgroundColor: "transparent", padding: "10px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="circle three "
          >
            3
          </motion.p>
          <h1 className="heading01 three">Defi</h1>
          <p className="paragraph02">
            Farm, lend or borrow against your derivative tokens and multiply
            your yield.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="card">
          <motion.p
            initial={{ backgroundColor: "#48e6dc", padding: "2px" }}
            whileInView={{ backgroundColor: "transparent", padding: "10px" }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="circle four "
          >
            4
          </motion.p>
          <h1 className="heading01 four">Redeem</h1>
          <p className="paragraph02">
            Burn the derivative tokens (e.g., csETH) and get native tokens in
            your wallet (e.g., ETH).
          </p>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

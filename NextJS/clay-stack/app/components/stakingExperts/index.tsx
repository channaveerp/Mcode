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

export default function StakingExperts() {
  return (
    <main className="staking-expert">
      <motion.h1
        variants={text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading02"
      >
        Built by Staking Experts
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="stake-items"
      >
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">FLASH EXIT</h4>
            <img src="img/svgexport-16.svg" alt="" />
          </div>
          <p className="paragraph02">
            Withdraw your assets whenever you want. No more waiting for
            unbonding periods.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">FULLY BACKED</h4>
            <img src="img/svgexport-17.svg" alt="" />
          </div>
          <p className="paragraph02">
            ClayStacks staking derivatives are backed by staked assets. No
            fractional reserves. No nonsense.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">CROSS CHAIN</h4>
            <img src="img/svgexport-18.svg" alt="" />
          </div>
          <p className="paragraph02">
            Use staking derivatives across multiple chains. Fluid composability
            soon!
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">NO MINIMUMS</h4>
            <img src="img/svgexport-19.svg" alt="" />
          </div>
          <p className="paragraph02">
            Built for everyone. No minimum or maximum limits on your staked
            assets.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">YIELD STACKING</h4>
            <img src="img/svgexport-20.svg" alt="" />
          </div>
          <p className="paragraph02">
            Build DeFi money legos using staking derivatives and earn rewards
            from multiple streams.
          </p>
        </motion.div>
        {/*  */}
        <motion.div variants={item} className="stake-card">
          <div>
            <h4 className="heading04">TRANSPERANT</h4>
            <img src="img/svgexport-21.svg" alt="" />
          </div>
          <p className="paragraph02">
            All transactions, reserves and vaults are trackable on-chain.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}

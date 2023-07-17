"use client";
import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

export default function Heroview() {
  return (
    <motion.main
      className="hero-container"
      transition={{ type: "tween" }}
      //   animate={{ y: -10 }}
      //   transition={{ ease: "easeOut", duration: 2 }}
      //   initial={false}
    >
      {/* <div className='animation-bg'></div> */}
      <div className="animation-container">
        <motion.h1
          animate={{ y: 5, color: "#ffffff" }}
          initial={{}}
          transition={{
            ease: "easeOut",
            duration: 2,
            delay: 0.5,
            type: "tween",
          }}
          className="heading01"
        >
          Staking Redefined
        </motion.h1>
        <div className="animation-cube"></div>
      </div>
      <div className="frame-note">
        <div className="note paragraph01">
          Unlock the true power of liquid staking and Defi.
        </div>
        <div className="eth-frame">
          <div>
            <h4 className="heading04">
              Introducing Liquid Staking for Ethereum
            </h4>
            <button>Learn More</button>
          </div>
          {/* <div></div> */}
          <div>X</div>
        </div>
      </div>
      <div className="stats">
        <p className="paragraph01">
          <span className="stats-name">TVL</span>
          <span>3,428,795 MATIC</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Mothly Active Users</span>
          <span>4,176</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Mainnet Stakers</span>
          <span>11,449</span>
        </p>
      </div>
    </motion.main>
  );
}

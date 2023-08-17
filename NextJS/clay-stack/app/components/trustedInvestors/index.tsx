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
      delayChildren: 0.05,
      staggerChildren: 0.05,
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

export default function TrustedInvestors() {
  const brandsArr = new Array(16).fill(1);
  const investorsArr = new Array(20).fill(1);
  return (
    <motion.main className="trusted-investors">
      <motion.h2
        variants={text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading02"
      >
        Trusted by the worlds best Investors
      </motion.h2>

      {/* Brands */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="brands"
      >
        {brandsArr.map((el: any, index: number) => (
          <motion.img
            whileHover={{
              boxShadow: " 0 0 2rem rgba(235,1,243,.5)",
              cursor: "pointer",
            }}
            variants={item}
            className="brand-img"
            key={index}
            src="img/coinfund.png"
            alt=""
          />
        ))}
      </motion.div>

      {/* Investors */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="investors"
      >
        {investorsArr.map((el: any, index: number) => (
          <motion.div
            whileHover={{
              boxShadow: " 0 0 2rem rgba(235,1,243,.5)",
              cursor: "pointer",
            }}
            variants={item}
            className="investor-item"
            key={index}
          >
            <img src="img/larry-cermak.png" alt="" />
            <p className="paragraph02">Larry Cermak</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}

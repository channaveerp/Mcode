import React from "react";
import "./index.scss";
import Revolution from "@/icons/revolution";

export default function StakeRevolution() {
  return (
    <main className="stake-revolution">
      <div className="stake-content">
        <h2 className="heading02">
          Pioneering the Ethereum Liquid Staking Revolution
        </h2>
        <p className="paragraph01">
          ClayStack offers an inclusive, secure, scalable, highly decentralized,
          and a censorship-resistant liquid staking architecture. Join us as we
          revolutionize liquid staking.
        </p>
      </div>
      <div className="stake-img">
        <Revolution />
        <span></span>
      </div>
    </main>
  );
}

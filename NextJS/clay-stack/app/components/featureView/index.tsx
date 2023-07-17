import React from "react";
import "./index.scss";

export default function Features() {
  return (
    <main className="feature-container">
      <h2 className="heading03">Why ClayStack?</h2>
      <div className="fe-items">
        <div className="fe-item">
          <video
            width="600px"
            height="600px"
            muted
            autoPlay
            src="video/inclusivity.webm"
          ></video>
          <div className="fe-item-content">
            <h2 className="heading03">Inclusive</h2>
            <p className="paragraph02">
              With ClayStack, node operators can spawn new validators for the
              lowest bond and earn rewards. This happens without compromising on
              the security and decentralization of Ethereum.
            </p>
          </div>
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
          <div className="fe-item-content">
            <h2 className="heading03">Decentralized</h2>
            <p className="paragraph02">
              The ClayStack Ethereum protocol sets precedence for
              decentralization at the protocol level by incorporating DVT and a
              novel Algorithmic Node Balancing system.
            </p>
          </div>
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
          <div className="fe-item-content">
            <h2 className="heading03">Efficient</h2>
            <p className="paragraph02">
              The ClayStack Protocol integrates with Sonic and offers users the
              ability to flash exit and process efficient redemptions of their
              liquid-staked assets. This cuts down the unbonding periods and
              enhances efficiency.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

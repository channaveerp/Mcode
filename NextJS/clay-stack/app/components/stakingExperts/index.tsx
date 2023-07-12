import React from 'react'
import './index.scss'
export default function StakingExperts() {
  return (
    <main className='staking-expert'>
        <h1 className='heading02'>Built by Staking Experts</h1>
        <div className='stake-items'>
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>FLASH EXIT</h4>
                    <img src="img/svgexport-16.svg" alt="" />
                </div>
                <p className='paragraph02'>Withdraw your assets whenever you want. No more waiting for unbonding periods.</p>
            </div>
            {/*  */}
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>FULLY BACKED</h4>
                    <img src="img/svgexport-17.svg" alt="" />
                </div>
                <p className='paragraph02'>ClayStacks staking derivatives are backed by staked assets. No fractional reserves. No nonsense.</p>
            </div>
            {/*  */}
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>CROSS CHAIN</h4>
                    <img src="img/svgexport-18.svg" alt="" />
                </div>
                <p className='paragraph02'>Use staking derivatives across multiple chains. Fluid composability soon!</p>
            </div>
            {/*  */}
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>NO MINIMUMS</h4>
                    <img src="img/svgexport-19.svg" alt="" />
                </div>
                <p className='paragraph02'>Built for everyone. No minimum or maximum limits on your staked assets.</p>
            </div>
            {/*  */}
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>YIELD STACKING</h4>
                    <img src="img/svgexport-20.svg" alt="" />
                </div>
                <p className='paragraph02'>Build DeFi money legos using staking derivatives and earn rewards from multiple streams.</p>
            </div>
            {/*  */}
            <div className='stake-card'>
                <div >
                    <h4 className='heading04'>TRANSPERANT</h4>
                    <img src="img/svgexport-21.svg" alt="" />
                </div>
                <p className='paragraph02'>All transactions, reserves and vaults are trackable on-chain.</p>
            </div>
        </div>
    </main>
  )
}

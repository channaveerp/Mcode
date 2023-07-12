import React from 'react'
import './index.scss'
export default function HowItWorks() {
  return (
    <main className='how-it-works'>
        <h2 className='heading02'>How ClayStack works</h2>
        <p className='paragraph01'>Stake your tokens and participate in DeFi at the same time.</p>
        <div className='work-steps'>
            <div className='card'>
                <p className='circle one '>1</p>
                <h1 className='heading01 one'>Stake</h1>
                <p className='paragraph02'>Deposit your native tokens (e.g.: ETH) on ClayStack smart contracts.</p>
            </div>
            {/*  */}
            <div className='card'>
                <p className='circle two '>2</p>
                <h1 className='heading01 two'>Receive</h1>
                <p className='paragraph02'>Liquid-staked derivative tokens (csETH) in your wallet that increase in value with daily staking rewards.</p>
            </div>
            {/*  */}
            <div className='card'>
                <p className='circle three '>3</p>
                <h1 className='heading01 three'>Defi</h1>
                <p className='paragraph02'>Farm, lend or borrow against your derivative tokens and multiply your yield.</p>
            </div>
            {/*  */}
            <div className='card'>
                <p className='circle four '>4</p>
                <h1 className='heading01 four'>Redeem</h1>
                <p className='paragraph02'>Burn the derivative tokens (e.g., csETH) and get native tokens in your wallet (e.g., ETH).</p>
            </div>
        </div>
    </main>
  )
}

import React from 'react';
import './index.scss'

export default function Heroview() {
  return (
    <main className='hero-container'>
        {/* <div className='animation-bg'></div> */}
        <div className='animation-container'>
            <h1 className='heading01'>Staking Redefined</h1>
            <div className='animation-cube'></div>
        </div>
        <div className='frame-note'>
            <div className='note paragraph01'>Unlock the true power of liquid staking and Defi.</div>
            <div className='note paragraph01'>Unlock the true power of liquid staking and Defi.</div>
        </div>
        <div className='stats'>
            <p className='paragraph01'><span className='stats-name'>TVL</span><span>3,428,795 MATIC</span></p>
            <p className='paragraph01'><span className='stats-name'>Mothly Active Users</span><span>4,176</span></p>
            <p className='paragraph01'><span className='stats-name'>Mainnet Stakers</span><span>11,449</span></p>
        </div>
    </main>
  )
}

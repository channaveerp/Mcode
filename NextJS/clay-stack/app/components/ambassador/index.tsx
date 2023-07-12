import React from 'react';
import './index.scss'

export default function Ambassador() {
  return (
    <>
    <main className='ambassador'>
        <div className='animation'></div>
        <div className='details'>
            <h1 className='heading01'>Become a ClayStack Ambassador</h1>
            <p className='paragraph01'>ClayStack is pioneering the next DeFi revolution by maximising capital efficiency. This is your chance of joining the legacy.</p>
            <button>Learn More</button>
        </div>
    </main>
    <div className='stats'>
        <p className='paragraph01'><span className='stats-name'>Active Members</span><span>50000+</span></p>
        <p className='paragraph01'><span className='stats-name'>Contries</span><span>30+</span></p>
        <p className='paragraph01'><span className='stats-name'>Priority</span><span>Access</span></p>
    </div>
    </>
  )
}

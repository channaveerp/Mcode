import React from 'react'
import './index.scss'
export default function BecomeValidator() {
  return (
    <main className='validator-container'>
        <div className='details'>
            <h1 className='heading01'>Become a Validator</h1>
            <div className='note paragraph02'>
                Start validating on the Ethereum network for the lowest bond in the industry.
            </div>
            <button >Learn More</button>
        </div>
        <div className='val-img'>
            <img src="img/validator3d.svg" alt="" />
        </div>
    </main>
  )
}

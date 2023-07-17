import React from 'react'
import './index.scss'

export default function TrustedInvestors() {

    const brandsArr  = new Array(16).fill(1)
    const investorsArr  = new Array(20).fill(1)
  return (
    <main className='trusted-investors'>
        <h2 className='heading02'>Trusted by the worlds best Investors</h2>

        {/* Brands */}
        <div className='brands'>
            {brandsArr.map((item : any, index : number)=> 
                // <div key={index}>
                    <img className='brand-img' key={index}  src="img/coinfund.png" alt="" />
                // </div>
            )}
        </div>

        {/* Investors */}
        <div className='investors'>
            {investorsArr.map((item : any, index : number)=> 
                // <img key={index} src="img/coinfund.png" alt="" />
                <div className='investor-item' key={index}>
                    <img src="img/larry-cermak.png" alt="" />
                    <p className='paragraph02'>Larry Cermak</p>
                </div>
            )}
        </div>
    </main>
  )
}

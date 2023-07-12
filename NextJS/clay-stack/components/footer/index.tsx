import React from 'react'
import './index.scss'

export default function Footer() {
  return (
    <div className='footer-container'>
        {/* row-1 */}
        <div className='ft-row-1'>
            <div className='ft-detail'>
                <h3 className='heading03'>ClayStack</h3>
                <h3 className='heading03 details'>Unlock the true power of liquid staking and Defi</h3>
            </div>
            <div className='ft-nav'>
                <h4 className='heading04'>ClayStack</h4>
                <p className='paragraph01'>About</p>
                <p className='paragraph01'>Blog</p>
                <p className='paragraph01'>Node Operators</p>
                <p className='paragraph01'>Ambassadors</p>
                <p className='paragraph01'>Careers</p>
            </div>
            <div className='ft-form'>
                <h4 className='heading04'>Stay Updated</h4>
                <div className='form-container'>
                    <input placeholder='Enter Email' type="text" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        {/* row-2 */}
        <div className='ft-row-2'>
            <div>Twitter</div>
            <div className='border'>Discord</div>
            <div>Telegram</div>
        </div>
        {/* row-3 */}
        <div className='ft-row-3'>
            <div>
                <p>Terms and Conditions</p>
                <p>Risk Disclosure</p>
                <p>Sitemap</p>
            </div>
            <p>Copyright © 2023 Claystack</p>
        </div>
    </div>
  )
}

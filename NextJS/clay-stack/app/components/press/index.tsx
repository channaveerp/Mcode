import React from 'react'
import './index.scss';

export default function Press() {
    const arr = new Array(4).fill(1);

  return (
    <main className='press-container'>
        <div className='press'>
            
            <h2 className='heading02'>In the press</h2>
            <div className='img-container'>
                {arr.map((item, index)=> 
                    <div className='press-img' key={index}>
                        <img  src="img/the-block.png" alt="" />
                    </div> 
                )}
            </div>
        </div>
    </main>
  )
}

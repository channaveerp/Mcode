'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Searchbar() {
  const router = useRouter();

  const [location, setLocation] = useState('');

  const handleSearch = ()=>{
    if(location === 'banana') return;
    router.push('/search');
  }
  return (
    <div
    className="overflow-hidden rounded text-left py-3 m-auto flex justify-center"
  >
    <input className="rounded text-lg mr-3 w-[450px] p-2" type="text" value={location} onChange={(e)=> setLocation(e.target.value)} />
    <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={handleSearch}>
      Let&apos;s go
    </button>
  </div>
  )
}

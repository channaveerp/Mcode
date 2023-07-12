import Link from 'next/link';
import './index.scss';
import Image from 'next/image';
export default function Navbar() {
  return (
    <main className='navbar'>
      <Link href='' className='main-logo'>
        <div
          style={{
            aspectRatio: '16/36',
            width: '16px',
            position: 'relative',
            objectFit: 'fill',
          }}
        >
          <Image className='logo' src='/img/logo.svg' alt='logo' fill />
        </div>
        <h1 className='heading03'>ClayStack</h1>
      </Link>
      <ul className='nav-item-container'>
        <li>
          <Link href='' className='nav-item'>ABOUT US</Link>
        </li>
        <li>
          <Link href='' className='nav-item'>BLOG</Link>
        </li>
        <li>
          <Link href='' className='nav-item'>NODE OPERATORS</Link>
        </li>
        <li>
          <Link href='' className='nav-item'>CAREERS</Link>
        </li>
        <li>
          <Link href='' className='nav-item'>MORE</Link>
        </li>
        <li>
          <button className='get-started-btn'>Get Started</button>
        </li>
      </ul>
    </main>
  );
}

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
        <h1 className='heading-03'>ClayStack</h1>
      </Link>
    </main>
  );
}

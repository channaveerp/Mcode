import { useEffect, useState } from 'react';

export default function useIsMobile(size = 768) {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= size);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return isMobile;
}

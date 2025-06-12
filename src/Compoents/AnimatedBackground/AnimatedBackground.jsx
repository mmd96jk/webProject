import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = window.VANTA.WAVES({
      el: vantaRef.current,
      color: 0xffffff,
      shininess: 40,
      waveSpeed: 0.8,
      zoom: 1,
      backgroundColor: 0x111111,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />
  );
}
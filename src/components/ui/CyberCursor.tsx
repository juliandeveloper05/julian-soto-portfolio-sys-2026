import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// Selectors that trigger the "hover" state on the outer ring
const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"], [tabindex]';

export default function CyberCursor() {
  const [mounted, setMounted]   = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Raw position — inner dot follows instantly
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Spring position — outer ring follows with a short lag
  const springX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Desktop only: pointer:fine means a real mouse is present
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setHovering(!!(e.target as Element).closest(INTERACTIVE));
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  const ringColor = hovering ? '#e668ff' : '#00e3fd';
  const ringGlow  = hovering
    ? '0 0 14px #e668ff, 0 0 28px rgba(230,104,255,0.3)'
    : '0 0 10px #00e3fd, 0 0 20px rgba(0,227,253,0.25)';
  const ringSize  = hovering ? 44 : 32;

  return (
    <>
      {/* ── Outer ring (reticle / scope) ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width:  ringSize,
          height: ringSize,
        }}
        animate={{ width: ringSize, height: ringSize, opacity: clicking ? 0.35 : 1 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {/* Circular ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1.5px solid ${ringColor}`,
            boxShadow: ringGlow,
            transition: 'border-color 0.18s, box-shadow 0.18s',
          }}
        />
        {/* Tick — top */}
        <span
          style={{
            position: 'absolute', display: 'block',
            left: '50%', top: 0,
            transform: 'translateX(-50%) translateY(-3px)',
            width: 1.5, height: 6,
            background: ringColor,
            transition: 'background 0.18s',
          }}
        />
        {/* Tick — bottom */}
        <span
          style={{
            position: 'absolute', display: 'block',
            left: '50%', bottom: 0,
            transform: 'translateX(-50%) translateY(3px)',
            width: 1.5, height: 6,
            background: ringColor,
            transition: 'background 0.18s',
          }}
        />
        {/* Tick — left */}
        <span
          style={{
            position: 'absolute', display: 'block',
            top: '50%', left: 0,
            transform: 'translateY(-50%) translateX(-3px)',
            height: 1.5, width: 6,
            background: ringColor,
            transition: 'background 0.18s',
          }}
        />
        {/* Tick — right */}
        <span
          style={{
            position: 'absolute', display: 'block',
            top: '50%', right: 0,
            transform: 'translateY(-50%) translateX(3px)',
            height: 1.5, width: 6,
            background: ringColor,
            transition: 'background 0.18s',
          }}
        />
      </motion.div>

      {/* ── Inner dot ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: rawX,
          y: rawY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          background: '#9cff93',
          boxShadow: '0 0 6px #9cff93, 0 0 12px rgba(156,255,147,0.5)',
        }}
        animate={{
          scale:   clicking ? 2.2 : hovering ? 0 : 1,
          opacity: clicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}

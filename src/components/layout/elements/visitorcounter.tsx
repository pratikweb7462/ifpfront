'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const digitImages: Record<string, any> = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
};

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const digitRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem('visitor-count') || '0', 10);
    const newCount = stored + 1;
    localStorage.setItem('visitor-count', newCount.toString());
    setCount(newCount);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    triggerRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        digitRefs.current.forEach((el, index) => {
          if (el) {
            gsap.fromTo(
              el,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.3,
                delay: index * 0.05,
                ease: 'power2.out',
              }
            );
          }
        });
      },
    });

    return () => {
      triggerRef.current?.kill(); // ✅ Only kill this specific trigger
    };
  }, [count]);

  const padded = count.toString().padStart(6, '0');

  return (
    <div
      ref={containerRef}
      className="count"
      style={{ display: 'flex', gap: '0px' }}
    >
      {padded.split('').map((digit, i) => (
        <span
          key={i}
          className="digit-wrapper"
          style={{
            width: '33px',
            height: '33px',
            overflow: 'hidden',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            background: '#ADB4C0',
            borderRadius: '5px',
            margin: '0 2px',
          }}
        >
          <span
            ref={(el) => (digitRefs.current[i] = el)}
            style={{
              display: 'inline-block',
              color: '#323232',
              fontSize: '18px',
            }}
          >
            {digitImages[digit]}
          </span>
        </span>
      ))}
    </div>
  );
};

export default VisitorCounter;

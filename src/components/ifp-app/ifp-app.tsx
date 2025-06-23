"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
gsap.registerPlugin(ScrollTrigger);
export default function IFPApp({ icon, title, text }) {
  


const boxRef = useRef(null);
useGsapAnimation(boxRef, (el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 0,
      x: 100,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <div ref={boxRef} className="d-flex flex-wrap w-100 IFPAppBox">
      <div className="d-flex flex-wrap align-items-center justify-content-center position-relative Thumb">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <div className="ThumbContent">
        <h3 className="letterspacing-2 font18 font600 Heading">{title}</h3>
        <div className="SubText">{text}</div>
      </div>
    </div>
  );
}

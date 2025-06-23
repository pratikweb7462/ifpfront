"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import Buttons from "../core/buttons/buttons";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
gsap.registerPlugin(ScrollTrigger);

export default function MOUHome({ image, title, link, linktext }) {

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
      y: 50,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <div ref={boxRef} className="MOUBox">
      <div className="position-relative Thumb">
        <Image src={image} alt={title} />
        <div className="position-absolute d-flex justify-content-between align-items-center AbsoluteBlock">
          <h3 className="font24 font600 mb-0 Heading">{title}</h3>
          <Buttons href={link} label={linktext} className="CtaLink" />
        </div>
      </div>
    </div>
  );
}

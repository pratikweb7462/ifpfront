"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import Link from "next/link";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
gsap.registerPlugin(ScrollTrigger);

export default function Logos({ logo, link, title }) {
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
    <div
      ref={boxRef}
      className=" w-100 h-100 LogoBox"
    >
      <Link href={link} title={title} className="d-flex flex-wrap justify-content-center align-items-center h-100 w-100 Thumb">
        <Image
          className="object-fit-contain"
          width={300}
          height={300}
          src={logo}
          alt={title}
        />
      </Link>
    </div>
  );
}

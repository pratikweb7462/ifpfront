"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
import Buttons from "../core/buttons/buttons";
gsap.registerPlugin(ScrollTrigger);

export default function SectorsHome({
  icon,
  title,
  text,
  linktext,
  link,
  onHover,
  onLeave,
}) {


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
      className="h-100 SectorBox"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="Thumb">
        <Image
          className="object-fit-contain"
          width={500}
          height={500}
          src={icon}
          alt={title}
        />
      </div>
      <div className="SectorContent">
        <h3 className="font20 font600 mb-0 Heading">{title}</h3>
        <div className="SubText">
          <p>{text}</p>
        </div>
        <Buttons href={link} label={linktext} className="CtaLink" />
      </div>
    </div>
  );
}

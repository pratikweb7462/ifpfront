"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
import Buttons from "../core/buttons/buttons";

gsap.registerPlugin(ScrollTrigger);

export default function ApprovalsKeyHome({ image, title, department, linktext, link, approvals }) {


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
      className="d-flex flex-wrap align-items-center h-100 ApprovalsKeyBox"
    >
      <div className="d-flex flex-wrap align-items-center justify-content-center Thumb">
        <Image
          layout="intrinsic"
          width={100}
          height={100}
          src={image}
          alt={title}
        />
      </div>
      <div className="ThumbContent">
        <div className="TitleText">
          <h3 className="letterspacing-2 font20 font600 Heading mb-0">
            {title}
          </h3>
          <div className="letterspacing-2 font500 Department">
            <p>{department}</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between TextWithBtn">
          <span className="letterspacing-2 Approvals">
            {approvals} Approvals
          </span>
          <Buttons href={link} label={linktext} className="CtaLink" />
        </div>
      </div>
    </div>
  );
}

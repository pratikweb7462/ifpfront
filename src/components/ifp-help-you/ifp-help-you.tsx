"use client";

import { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
import "@/components/User-guide/User-guide.scss";


gsap.registerPlugin(ScrollTrigger);

export default function IFPHelpYou({ icon, title, text }) {
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
    <Col sm={6} lg={4} className="position-relative IFPHelpGrid">
      <div className="IFPHelpBox">
        <div className="d-flex justify-content-center align-items-center Thumb">
          <Image src={icon} width={50} height={50} alt={title} />
        </div>
        <div className="ThumbContent">
          <h3 className="font20 font600 Heading">{title}</h3>
          <div className="SubText">{text}</div>
        </div>
      </div>
    </Col>
  );
}

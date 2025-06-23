"use client";

import { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import Buttons from "../core/buttons/buttons";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PDFIcon from "../../../public/images/pdf.svg";
import { useGsapAnimation } from '@/components/core/useGsapAnimation/useGsapAnimation'
import "@/components/User-guide/User-guide.scss";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function UserGuide({ title, buttontext, link }) {
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
    <Col lg={12} className="UserGuideGrid">
      <div className="UserGuideBox" ref={boxRef}>
        <Row>
          <Col sm={7} md={9} className="d-flex justify-content-start align-items-center">
            <h3 className="mb-0 font16 font500 Heading">{title}</h3>
          </Col>
          <Col sm={5} md={3} className="d-flex justify-content-end align-items-center ">
            <div className="d-flex align-items-center DownloadGroup">
              <Link className="d-flex align-items-center font14 font500 PDFLink" href={link} title={buttontext}>
                {buttontext}
                <Image src={PDFIcon} alt={buttontext} />
              </Link>

              <Link href={link} className="IconButton GoArrow">
                <span className="bi bi-arrow-right-circle"></span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

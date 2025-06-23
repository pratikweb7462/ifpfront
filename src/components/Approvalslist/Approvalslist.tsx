"use client";

import { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import Buttons from "../core/buttons/buttons";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimation } from "@/components/core/useGsapAnimation/useGsapAnimation";

import "@/components/Approvalslist/approvalslist.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Approvalslist({
  image,
  title,
  subtext,
  update,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
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
    <Col lg={12} className="ApprovalslistGrid">
      <div className="ApprovalslistBox" ref={boxRef}>
        <Row className="align-items-center">
          <Col sm={12} md={4} lg={3} className="ThumbGrid">
            <div className="d-flex justify-content-center align-items-center w-100 h-100 Thumb">
              <Image src={image} alt="Emblem Logo" />
            </div>
          </Col>
          <Col sm={12} md={8} lg={9} className="ThumbContentGrid">
            <Row>
              <Col lg={10} className="">
                <div className="Content">
                  <h3 className="font22 font500 Heading">{title}</h3>
                  <div className="font18 SubText">
                    <p>{subtext}</p>
                  </div>
                  <Col lg={12}>
                    <div className="BtnGrp">
                      <Buttons
                        href={link1}
                        label={text1}
                        className="btn-outline orange"
                      />
                      <Buttons
                        href={link2}
                        label={text2}
                        className="btn-outline gray"
                      />
                      <Buttons
                        href={link3}
                        label={text3}
                        className="btn-outline gray"
                      />
                      <Buttons
                        href={link4}
                        label={text4}
                        className="btn-outline orange"
                      />
                      <Buttons
                        href={link5}
                        label={text5}
                        className="btn-outline gray"
                      />
                      <Buttons
                        href={link6}
                        label={text6}
                        className="btn-outline gray"
                      />
                    </div>
                  </Col>
                </div>
              </Col>
              <Col
                lg={2}
                className="d-flex justify-content-end align-items-start"
              >
                {update && (
                  <p className="pb-0 font14 font400 d-flex align-items-center Update">
                    {update}
                  </p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

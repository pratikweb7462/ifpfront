"use client";

import { useEffect, useRef } from "react";
import Buttons from "../core/buttons/buttons";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col, Container } from "react-bootstrap";
import "@/components/User-guide/User-guide.scss";
import Link from "next/link";
import ApprovalsKeyHome from "@/components/key-approvals/key-approvals";
import ReusableSwiper from "@/components/core/reusable-swiper/reusable-swiper";

gsap.registerPlugin(ScrollTrigger);

export default function KeyApprovalsIfpHome() {

const AnimatedHeading = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!AnimatedHeading.current) return;

  const headingEl = AnimatedHeading.current.querySelector(".AnimatedHeading");
  // Function to wrap each word in a div and then each character in a span
  const splitWordsToSpans = (el: Element | null) => {
    if (!el) return;
    const text = el.textContent || "";
    el.innerHTML = ""; // Clear existing content

    const words = text.split(" ");
    words.forEach((word, wordIndex) => {
      const wordWrapper = document.createElement("div");
      wordWrapper.style.display = "inline-block";
      wordWrapper.style.marginRight = "0.2em"; // spacing between words

      word.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        wordWrapper.appendChild(span);
      });

      el.appendChild(wordWrapper);
    });
  };

  splitWordsToSpans(headingEl);

  const headingSpans = headingEl?.querySelectorAll("span");

  if (headingSpans) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingEl,
        start: "top 80%",
      },
    });

    // Animate each character
    tl.from(headingSpans, {
      y: 20,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.out",
      duration: 1,
    });
  }
}, []);


  

  const approvalsData = [
    {
      image: "/images/key-ifb-icon-1.png",
      title: "Gujarat Pollution Control Board",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-2.png",
      title: "Industries Commissionerate",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-2.png",
      title: "Energy and Petrochemical",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-3.png",
      title: "Food and Drug Control Administration Hand ",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-1.png",
      title: "Gujarat Pollution Control Board",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-2.png",
      title: "Industries Commissionerate",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-2.png",
      title: "Energy and Petrochemical",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
    {
      image: "/images/key-ifb-icon-3.png",
      title: "Food and Drug Control Administration Hand ",
      department: "Government of Gujarat",
      linktext: "Explore",
      link: "/",
      approvals: "6",
    },
  ];

  // Helper: chunk into groups of 4
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunks = chunkArray(approvalsData, 4);

  const slides = chunks.map((group, index) => ({
    id: index,
    content: (
      <Row className="position-relative ApprovalsKeyRow">
        {group.map((item, i) => (
          <Col md={12} lg={6} className="ApprovalsKeyGrid" key={i}>
            <ApprovalsKeyHome
              image={item.image}
              title={item.title}
              department={item.department}
              linktext={item.linktext}
              link={item.link}
              approvals={item.approvals}
            />
          </Col>
        ))}
      </Row>
    ),
  }));

  const swiperOptions = {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: false,
    // autoplay: {
    //   delay: 25000,
    // },
    pagination: false,
    navigation: {
      nextEl: ".KeyArrowNext",
      prevEl: ".KeyArrowPrev",
    },
  };

  return (
    <section
      ref={AnimatedHeading}
      className="position-relative KeyApprovalsHome"
    >
      <Container>
        <div className="KeyApprovalsHomeBg">
          <Row className="align-items-center">
            <Col xl={4}>
              <div className="KeyApprovalsContent">
                <div className="HeadingBox">
                  <div className="AnimatedHeading font34 font600 Heading">
                    Key Approvals Available on IFP
                  </div>
                  <div className="letterspacing-2 SubText">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown.
                    </p>
                  </div>
                </div>
                <div className="BtnGrp">
                  <p>
                    <Buttons
                      href="/"
                      label="User Guide"
                      className="btn-outline orange"
                    />
                  </p>
                  <p>
                    <Buttons
                      href="/"
                      label="Help & Support"
                      className="btn-outline orange"
                    />
                  </p>
                  <p>
                    <Buttons
                      href="/"
                      label="View All Approvals"
                      className="btn-fill orange"
                    />
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={8}>
              <div className="d-flex justify-content-xl-end CustomArrowRow">
                <button className="CustomArrowPrev KeyArrowPrev">
                  <span className="d-none">Prev</span>
                </button>
                <button className="CustomArrowNext KeyArrowNext">
                  <span className="d-none">Next</span>
                </button>
              </div>
              <ReusableSwiper slides={slides} swiperOptions={swiperOptions} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@/components/innerbanner/innerbanner.scss";
import Image from "next/image";
import Buttons from "../core/buttons/buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function InnerBanner({ image1, image2, title, subtext }) {

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Dynamically set padding-top on banner
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header"); // Or pass ref from parent
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const headingEl = bannerRef.current.querySelector(".Heading");
    const subtextEl = bannerRef.current.querySelector(".SubText");

    // Function to split text into spans and preserve spaces
    const splitTextToSpans = (el: Element | null) => {
      if (!el) return;
      const text = el.textContent || "";
      el.innerHTML = ""; // Clear existing content
      const chars = text.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        if (char === " ") {
          span.style.width = "0.2em"; // preserve spacing for space
        }
        el.appendChild(span);
      });
    };

    splitTextToSpans(headingEl);
    splitTextToSpans(subtextEl);

    const headingSpans = headingEl?.querySelectorAll("span");
    const subtextSpans = subtextEl?.querySelectorAll("span");

    if (headingSpans && subtextSpans) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingEl,
          start: "top 80%",
        },
      });

      // Animate heading
      tl.from(headingSpans, {
        y: 20,
        opacity: 0,
        stagger: 0.04,
        ease: "power3.out",
        duration: 1,
      });

      // Animate subtext after heading
      tl.from(
        subtextSpans,
        {
          y: 20,
          opacity: 0,
          stagger: 0.01,
          ease: "power3.out",
          duration: 1,
        },
        "+=0.1"
      ); // slight delay between heading and subtext
    }
  }, []);

  return (

    <div style={{ paddingTop: `${headerHeight}px` }}
      className="overflow-hidden position-relative InnerBanner"
      ref={bannerRef}
    >
      <Container>
        <Row>
          <Col
            lg={8} xl={8}
            className="d-flex align-items-end position-relative ContentPartGrid"
          >
            <div className="w-100 ContentPart">
              <h3 className="m-0 p-0 color font46 font700 Heading">{title}</h3>
              <p className="p-0 font18 font500 SubText">{subtext}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="position-relative d-flex flex-wrap overflow-hidden BannerSearch"
              >
                <select className="form-select">
                  <option value="Department Name">Department Name</option>
                  <option value="Department Name 1">Department Name 1</option>
                  <option value="Department Name 2">Department Name 2</option>
                  <option value="Department Name 3">Department Name 3</option>
                </select>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Approvals"
                />

                <Buttons label=" Explore All" className="btn-fill orange" />
              </form>

              <p className="p-0 font18 font500 Note">
                Don’t know which approvals are required?{" "}
                <Buttons
                  href="/"
                  label="Click Here & Know Your Approval"
                  className=""
                />
              </p>
            </div>
          </Col>
          <Col
            lg={4} xl={4}
            className="d-flex align-items-center justify-content-end ImagePartGrid"
          >
            <div className="position-relative d-none d-lg-flex">
              <Image src={image2} alt="Banner" className="BannerMap" />
              <Image src={image1} alt="Banner" className="BannerShape" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

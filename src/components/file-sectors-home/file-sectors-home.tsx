"use client";

import { useRef } from "react";
import Buttons from "../core/buttons/buttons";
import { Row, Col, Container } from "react-bootstrap";
import "@/components/User-guide/User-guide.scss";
import ReusableSwiper from "@/components/core/reusable-swiper/reusable-swiper";
import SectorsHome from "../sectors-home/sectors-home";
import SectorsBG1 from "../../../public/images/sector-bg.jpg";
import SectorsBG2 from "../../../public/images/videothumb1.jpg";
import SectorsBG3 from "../../../public/images/sector-bg.jpg";
import SectorsBG4 from "../../../public/images/sector-bg.jpg";
import SectorsBG5 from "../../../public/images/sector-bg.jpg";
import SectorsBG6 from "../../../public/images/sector-bg.jpg";
import SectorsBG7 from "../../../public/images/sector-bg.jpg";
import SectorsBG8 from "../../../public/images/sector-bg.jpg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Add this


export default function SectorsHomeFile() {
  const pathname = usePathname(); // ✅ Track current route
  const AnimatedHeading = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!AnimatedHeading.current) return;

    const el = AnimatedHeading.current;
    const headingEl = el.querySelector(".AnimatedHeading");
    if (!headingEl) return;

    const gsap = require("gsap").gsap;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const originalText =
      "Which Approval are Required to Start my Business in Selected Sectors";
    headingEl.innerHTML = "";

    const words = originalText.split(" ");
    words.forEach((word) => {
      if (word === "Sectors") {
        const dropdownWrapper = document.createElement("div");
        dropdownWrapper.className = "CustomDropdownWrapper";
        dropdownWrapper.style.display = "inline-block";
        dropdownWrapper.style.marginRight = "0.2em";
        dropdownWrapper.innerHTML = `
          <div class="CustomDropdown">
            <button class="DropdownTrigger">Sector</button>
            <ul class="DropdownList">
              <li data-value="Technology">Technology</li>
              <li data-value="Manufacturing">Manufacturing</li>
              <li data-value="Healthcare">Healthcare</li>
            </ul>
          </div>`;
        headingEl.appendChild(dropdownWrapper);
      } else {
        const wordWrapper = document.createElement("div");
        wordWrapper.style.display = "inline-block";
        wordWrapper.style.marginRight = "0.2em";

        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          wordWrapper.appendChild(span);
        });

        headingEl.appendChild(wordWrapper);
      }
    });

    // Interactivity
    const dropdown = headingEl.querySelector(".CustomDropdown") as HTMLElement;
    const trigger = dropdown?.querySelector(".DropdownTrigger") as HTMLElement;
    const list = dropdown?.querySelector(".DropdownList") as HTMLElement;

    const handleClick = () => list?.classList.toggle("active");
    const handleOption = (e: Event) => {
      const value = (e.target as HTMLElement).dataset.value;
      if (value) trigger.textContent = value;
      list?.classList.remove("active");
    };

    trigger?.addEventListener("click", handleClick);
    list
      ?.querySelectorAll("li")
      .forEach((li) => li.addEventListener("click", handleOption));

    const spans = headingEl.querySelectorAll("span");
    gsap.from(spans, {
      y: 20,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: headingEl,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Cleanup on unmount or route change
    return () => {
      trigger?.removeEventListener("click", handleClick);
      list
        ?.querySelectorAll("li")
        .forEach((li) => li.removeEventListener("click", handleOption));
    };
  }, [pathname]);

  const [bgImage, setBgImage] = useState(SectorsBG1);
  const [animateClass, setAnimateClass] = useState("");

  const handleMouseEnter = (img) => {
    setBgImage(img);
    setAnimateClass("animate-scale");
    setTimeout(() => setAnimateClass(""), 300);
  };

  const handleMouseLeave = () => {
    setBgImage(SectorsBG1);
    setAnimateClass("animate-scale");
    setTimeout(() => setAnimateClass(""), 300);
  };

  const approvalsData = [
    {
      icon: "images/sector-icon-1.svg",
      title: "Auto & Auto Components",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG1,
    },
    {
      icon: "images/sector-icon-2.svg",
      title: "Pharmaceuticals",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG2,
    },
    {
      icon: "images/sector-icon-3.svg",
      title: "Textiles & Apparels",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG3,
    },
    {
      icon: "images/sector-icon-4.svg",
      title: "Ports & Logistics",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG4,
    },
    {
      icon: "images/sector-icon-1.svg",
      title: "Auto & Auto Components",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG5,
    },
    {
      icon: "images/sector-icon-2.svg",
      title: "Pharmaceuticals",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG6,
    },
    {
      icon: "images/sector-icon-3.svg",
      title: "Textiles & Apparels",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG7,
    },
    {
      icon: "images/sector-icon-4.svg",
      title: "Ports & Logistics",
      text: "It serves as a centralized hub for investors to apply for various approvals, renewals...",
      linktext: "Explore",
      link: "/",
      bgImage: SectorsBG8,
    },
  ];

  const slides = approvalsData.map((item, index) => ({
    id: index,
    content: (
      <SectorsHome
        icon={item.icon}
        title={item.title}
        text={item.text}
        linktext={item.linktext}
        link={item.link}
        bgImage={item.bgImage}
        onHover={() => handleMouseEnter(item.bgImage)}
        onLeave={handleMouseLeave}
      />
    ),
  }));

  const swiperOptions = {
    spaceBetween: 24,
    slidesPerView: 4,
    loop: false,
    pagination: false,
    navigation: {
      nextEl: ".SectorArrowNext",
      prevEl: ".SectorArrowPrev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section
      ref={AnimatedHeading}
      className="overflow-hidden position-relative SectorsHome"
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center z-1 position-relative HeadingBox">
              <Row className="align-items-center">
                <Col md={9}>
                  <div className="font36 font600 mb-0 AnimatedHeading Heading">
                    Which Approval are Required to Start my Business in Selected
                    Sectors
                  </div>
                </Col>
                <Col md={3}>
                  <div className="w-100 d-flex justify-content-md-end CustomArrowRow">
                    <button className="CustomArrowPrev SectorArrowPrev">
                      <span className="d-none">Prev</span>
                    </button>
                    <button className="CustomArrowNext SectorArrowNext">
                      <span className="d-none">Next</span>
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <ReusableSwiper slides={slides} swiperOptions={swiperOptions} />
          </Col>
        </Row>
      </Container>
      <div
        className={`BackgroundImageChange ${animateClass}`}
        style={{
          backgroundImage: `url(${bgImage?.src || bgImage})`,
        }}
      ></div>
    </section>
  );
}

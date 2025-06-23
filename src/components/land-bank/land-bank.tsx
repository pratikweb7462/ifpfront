"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/User-guide/User-guide.scss";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../core/buttons/buttons";
import { useGsapAnimation } from "@/components/core/useGsapAnimation/useGsapAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function LandBankHome({ video, title, text, linktext, link }) {
  const AnimatedHeading = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animate heading letters
  useEffect(() => {
    if (!AnimatedHeading.current) return;

    const headingEl = AnimatedHeading.current.querySelector(".AnimatedHeading");

    const splitWordsToSpans = (el: Element | null) => {
      if (!el) return;
      const text = el.textContent || "";
      el.innerHTML = "";

      const words = text.split(" ");
      words.forEach((word) => {
        const wordWrapper = document.createElement("div");
        wordWrapper.style.display = "inline-block";
        wordWrapper.style.marginRight = "0.2em";

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

      tl.from(headingSpans, {
        y: 20,
        opacity: 0,
        stagger: 0.02,
        ease: "power3.out",
        duration: 1,
      });
    }
  }, []);

  const hidePopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "none",
      });
    }
  };

  const showPopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      hidePopup();
    } else {
      video.pause();
      setIsPlaying(false);
      showPopup();
    }
  };

  // GSAP animation on scroll
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

  // Video ends handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
      showPopup();
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Autoplay/pause video on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const trigger = ScrollTrigger.create({
      trigger: video,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        video.play();
        setIsPlaying(true);
        hidePopup();
      },
      onLeave: () => {
        video.pause();
        setIsPlaying(false);
        showPopup();
      },
      onEnterBack: () => {
        video.play();
        setIsPlaying(true);
        hidePopup();
      },
      onLeaveBack: () => {
        video.pause();
        setIsPlaying(false);
        showPopup();
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="LandBankHome" ref={boxRef}>
      <Container>
        <Row>
          <Col lg={12}>
            <div
              className="position-relative overflow-hidden LandBankBox"
              ref={AnimatedHeading}
            >
              <video
                ref={videoRef}
                src={video}
                width="100%"
                muted
                playsInline
                controls={false}
                className="Video"
                poster="/images/video-poster.jpg"
              />

              <button
                className={`PlayBtnVideo ${isPlaying ? "playing" : "paused"}`}
                onClick={togglePlay}
              >
                <span className="visually-hidden">
                  {isPlaying ? "Pause" : "Play"}
                </span>
              </button>

              <div
                className="w-100 position-absolute overflow-hidden LandBankPopup"
                ref={popupRef}
              >
                <div className="HeadingTextWrap">
                  <div className="font26 font600 AnimatedHeading Heading">
                    {title}
                  </div>
                  <div className="SubText">
                    <p>{text}</p>
                  </div>
                </div>
                <div className="d-flex LinkBox">
                  <Buttons href={link} label={linktext} className="CtaLink" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

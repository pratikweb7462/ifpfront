"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/important-links/important-links.scss";
import Buttons from "../core/buttons/buttons";

gsap.registerPlugin(ScrollTrigger);

interface ImportantLinkItemsProps {
  icon: string;
  title: string;
  link: string;
}

export default function ImportantLinkItems({ icon, title, link }: ImportantLinkItemsProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={itemRef}
      className="overflow-hidden d-flex flex-wrap align-items-center position-relative ImportantLinkBox"
    >
      <div className="position-relative Thumb">
        <Image src={icon} alt={title} />
      </div>
      <div className="ImportantLinkBoxContent">
        <p className="font22 font600 pb-0 Heading">{title}</p>
      </div>
      <Buttons href={link} label={title} className="fulllink" />
    </div>
  );
}

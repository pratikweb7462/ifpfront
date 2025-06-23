"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../core/buttons/buttons";
import '@/components/pdf-box/pdf-box.scss'

gsap.registerPlugin(ScrollTrigger);

interface PdfBoxItemsProps {
  icon: string;
  title: string;
  Validated: string;
  link: string;
}

export default function PdfBoxItems({ icon, title, Validated, link }: PdfBoxItemsProps) {
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
    <div ref={itemRef} className="overflow-hidden d-flex flex-wrap PDFBox">
      <div className="position-relative Thumb">
        <Image src={icon} alt={title} />
      </div>
      <div className="PDFBoxContent">
        <p className="font14 font400 Validated">{Validated}</p>
        <p className="font18 font500 pb-0 Heading">{title}</p>
      </div>
       <Buttons href={link} label={title} className="fulllink" />
    </div>
  );
}

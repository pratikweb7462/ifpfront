"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "@/components/core/buttons/buttons";
import "@/assets/styles/photo-video.scss";

gsap.registerPlugin(ScrollTrigger);

interface VideoGalleryItemProps {
  thumbnail: string;
  title: string;
  location: string;
  date: string;
  videoUrl: string;
  photocount: string;
}

export default function VideoGalleryItem({
  thumbnail,
  title,
  location,
  date,
  videoUrl,
  photocount,
}: VideoGalleryItemProps) {

  const itemRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!itemRef.current || !countRef.current) return;

    const count = { val: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      itemRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    tl.to(count, {
      val: parseInt(photocount),
      duration: 1,
      ease: "power1.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(count.val).toString();
        }
      },
    });
  }, [photocount]);

  return (
    <div ref={itemRef} className="position-relative overflow-hidden VideoBox">
      <div className="position-relative w-100 Thumb">
        <p className="Count">
          <span className="bi bi-image"></span> <small ref={countRef}>0</small>{" "}
          Videos
        </p>
        <Image src={thumbnail} alt={title} />
      </div>
      <div className="w-100 VideoBoxContent">
        <p className="font16 font400 Heading">{title}</p>
        <p className="font14 font400 Location">
          <span className="bi bi-geo-alt-fill"></span>
          {location}
        </p>
        <p className="font14 font400 Date">
          <span className="bi bi-calendar-fill"></span>
          {date}
        </p>
      </div>
      <Buttons href={videoUrl} label="View More" className="fulllink" />
    </div>
  );
}

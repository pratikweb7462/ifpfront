"use client";
import { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { Button } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import '@/assets/styles/photo-video.scss'
gsap.registerPlugin(ScrollTrigger);

interface VideoDetailItemProps {
  thumbnail: string;
  title: string;
  location: string;
  date: string;
  videoUrl: string;
}

export default function VideoDetailItem({
  thumbnail,
  title,
  location,
  date,
  videoUrl,
}: VideoDetailItemProps) {
  const [show, setShow] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (videoUrl) {
      setShow(true);
    }
  };
  const handleClose = () => setShow(false);

  // GSAP fade-in on scroll
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

  const hasVideo = !!videoUrl;

  return (
    <>
      <div
        ref={itemRef}
        className={`overflow-hidden VideoBox ${
          hasVideo ? "cursor-pointer" : "opacity-50"
        }`}
        onClick={hasVideo ? handleOpen : undefined}
        style={{ cursor: hasVideo ? "pointer" : "not-allowed" }}
      >
        <div className="position-relative w-100 Thumb">
          <Button
            type="button"
            variant=""
            className="d-flex justify-content-center align-items-center PlayBtn"
            disabled={!hasVideo}
          >
            <span className="bi bi-play-fill"></span>
          </Button>
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
      </div>

      {hasVideo && (
        <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <div className="video-wrapper">
              <ReactPlayer
                url={videoUrl}
                playing
                controls
                width="100%"
                height="100%"
              />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

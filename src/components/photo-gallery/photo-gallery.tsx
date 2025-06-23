"use client";
import { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/styles/photo-video.scss";

gsap.registerPlugin(ScrollTrigger);

interface PhotoGalleryItemProps {
  thumbnail: string;
  title: string;
  location: string;
  date: string;
  photos: string[];
  photocount: string;
}

export default function PhotoGalleryItem({
  thumbnail,
  title,
  location,
  date,
  photos,
  photocount,
}: PhotoGalleryItemProps) {
  const [show, setShow] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

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

  // Auto-scroll thumbs when main slide is outside current view
  useEffect(() => {
    if (!mainSwiper || !thumbsSwiper) return;

    const updateThumbsPosition = () => {
      const currentIndex = mainSwiper.realIndex;
      const thumbsPerView = thumbsSwiper.params.slidesPerView || 5;
      const thumbsStartIndex = thumbsSwiper.activeIndex;

      if (
        currentIndex > thumbsStartIndex + thumbsPerView - 1 ||
        currentIndex < thumbsStartIndex
      ) {
        thumbsSwiper.slideTo(currentIndex);
      }
    };

    mainSwiper.on("slideChange", updateThumbsPosition);

    return () => {
      if (mainSwiper?.off) {
        mainSwiper.off("slideChange", updateThumbsPosition);
      }
    };
  }, [mainSwiper, thumbsSwiper]);

  const handleOpen = () => {
    if (photos?.length > 0) setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setMainSwiper(null);
    setThumbsSwiper(null);
  };

  return (
    <>
      <div
        ref={itemRef}
        className="overflow-hidden VideoBox"
        onClick={handleOpen}
        style={{
          cursor: photos?.length ? "pointer" : "not-allowed",
          opacity: photos?.length ? 1 : 0.6,
        }}
      >
        <div className="position-relative w-100 Thumb">
          <p className="Count">
            <span className="bi bi-image"></span>{" "}
            <small ref={countRef}>0</small> Photos
          </p>
          <Image src={thumbnail} alt={title} width={1000} height={600} />
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

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {photos?.length > 0 && (
            <div className="">
              {/* Main Swiper with thumbs and navigation */}
              <div className="PopupSliderWrap">
                <Swiper
                  className="PopupSlider"
                  onSwiper={setMainSwiper}
                  spaceBetween={10}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  navigation={{
                    prevEl: "#PopupSliderThumbPrev",
                    nextEl: "#PopupSliderThumbNext",
                  }}
                  modules={[FreeMode, Thumbs, Navigation]}
                >
                  {photos.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="PopupThumb">
                        <Image
                          src={img}
                          alt={`${title} - ${index + 1}`}
                          width={1000}
                          height={600}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Thumbs Swiper */}
              <div className="PopupSliderWrapThumb">
                <Swiper
                  className="PopupSliderThumb"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={6}
                  freeMode
                  watchSlidesProgress
                  modules={[FreeMode, Thumbs]}
                  breakpoints={{
                    1400: {
                      slidesPerView: 6,
                    },
                    1200: {
                      slidesPerView: 6,
                    },
                    992: {
                      slidesPerView: 5,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    576: {
                      slidesPerView: 3,
                    },
                    0: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {photos.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="PopupThumbSmall">
                        <Image
                          src={img}
                          alt={`${title} - Thumb ${index + 1}`}
                          width={200}
                          height={120}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button id="PopupSliderThumbPrev" className="PopupSliderArrow">
                  <span className="bi bi-chevron-left"></span>
                </button>
                <button id="PopupSliderThumbNext" className="PopupSliderArrow">
                  <span className="bi bi-chevron-right"></span>
                </button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

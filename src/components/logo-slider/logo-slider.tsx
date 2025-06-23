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
import SectorsHome from "../sectors-home/sectors-home";
import SectorsBG from "../../../public/images/sector-bg.jpg";
import Logos from "../logos/logos";

gsap.registerPlugin(ScrollTrigger);

export default function LogoSlider() {
  const logoData = [
    {
      logo: "/images/logo-1.png",
      link: "/",
      title: "Government of India",
    },
    {
      logo: "/images/logo-2.png",
      link: "/",
      title: "Statue of Unity",
    },
    {
      logo: "/images/logo-3.png",
      link: "/",
      title: "Make In India",
    },
    {
      logo: "/images/logo-4.png",
      link: "/",
      title: "Government of Gujarat",
    },
    {
      logo: "/images/logo-5.png",
      link: "/",
      title: "Vibrant Gujarat",
    },
    {
      logo: "/images/logo-6.png",
      link: "/",
      title: "Industries & Mines Department, Govt. of Gujarat",
    },
    {
      logo: "/images/logo-1.png",
      link: "/",
      title: "Government of India",
    },
  ];

  // Helper: chunk into groups of 4
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunks = chunkArray(logoData, 4);

  const slides = logoData.map((item, index) => ({
    id: index,
    content: (
        <Logos logo={item.logo} title={item.title} link={item.link} />
    ),
  }));

  const swiperOptions = {
    spaceBetween: 15,
    slidesPerView: 6,
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },
    pagination: false,
    breakpoints: {
      1400: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 4,
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
    <section className="position-relative LogoHome">
      <Container>
        <Row>
          <Col lg={12}>
            <ReusableSwiper slides={slides} swiperOptions={swiperOptions} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

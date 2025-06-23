"use client";

import Header from "./elements/header";
import Footer from "./elements/footer";
import { usePathname } from "next/navigation";
import InnerBanner from "../innerbanner/innerbanner";
import BannerShape from "../../../public/images/banner-shape.svg";
import BannerMap from "../../../public/images/banner-img.svg";
import MOUImage1 from "../../../public/images/mou-img-1.jpg";
import MOUImage2 from "../../../public/images/mou-img-2.jpg";
import Buttons from "../core/buttons/buttons";
import { Row, Col, Container } from "react-bootstrap";
import KeyApprovalsIfpHome from "@/components/key-approvals-ifp-home/key-approvals-ifp-home";
import MOUHome from "@/components/mou-home/mou-home";
import SectorsHomeFile from "@/components/file-sectors-home/file-sectors-home";
import LandBankHome from "@/components/land-bank/land-bank";
import IFPApp from "@/components/ifp-app/ifp-app";
// import { Image } from "react-bootstrap";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import IFPHelpYou from "@/components/ifp-help-you/ifp-help-you";
import LogoSlider from "@/components/logo-slider/logo-slider";

gsap.registerPlugin(ScrollTrigger);

export default function Default({ children }: { children: React.ReactNode }) {




  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // detects route change
  const AnimatedHeading1 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!AnimatedHeading1.current) return;

    const headingEl =
      AnimatedHeading1.current.querySelector(".AnimatedHeading1");
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
    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // ✅ Reruns on client-side route change

  const AnimatedHeading2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!AnimatedHeading2.current) return;

    const headingEl =
      AnimatedHeading2.current.querySelector(".AnimatedHeading2");
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
        stagger: 0.03,
        ease: "power3.out",
        duration: 1,
      });
    }
    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // ✅ Reruns on client-side route change

  const AnimatedHeading3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!AnimatedHeading3.current) return;

    const headingEl =
      AnimatedHeading3.current.querySelector(".AnimatedHeading3");
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
        stagger: 0.05,
        ease: "power3.out",
        duration: 1,
      });
    }
    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // ✅ Reruns on client-side route change

  // bannerRef

  const bannerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!bannerRef.current) return;

    const headingEl = bannerRef.current.querySelector(
      ".HomeBanner .ContentBlock .Heading"
    );

    if (!headingEl) return;

    const originalText = headingEl.textContent || "";
    headingEl.textContent = "";

    const chars = originalText.split("");

    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      headingEl.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        delay: index * 0.02,
        duration: 0.01,
        ease: "none",
      });
    });
  }, [pathname]); // 🔁 re-run on route change

  const pathSegments = pathname.split("/").filter(Boolean);
  const currentSlug = pathSegments[pathSegments.length - 1] || "home";

  const pageTitleMap: { [key: string]: string } = {
    approvals: "Approvals",
    "photo-gallery": "Photo Gallery",
    "video-gallery": "Video Gallery",
    "approval-details":
      "GPCB – Application for E-Waste (Management and Handling)",
  };

  const pageTitle =
    pageTitleMap[currentSlug] ||
    decodeURIComponent(currentSlug)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const isHomePage = pathname === "/";

  return (
    <>
      <Header />

      {!isHomePage && (
        <InnerBanner
          title={pageTitle}
          subtext="Issued by the Government of Gujarat"
          image1={BannerShape}
          image2={BannerMap}
        />
      )}
      {isHomePage && (
        <section
          style={{ paddingTop: `${headerHeight}px` }}
          ref={bannerRef}
          className="position-relative z-1 HomeBanner"
        >
          <Container>
            <Row>
              <Col xl={6}>
                <div className="ContentBlock">
                  <div className="mb-0 font24 font400 Approval">
                    Access over{" "}
                    <div className="HighlightText">18+ Departments</div>{" "}
                    Approval
                  </div>
                  <div className="font38 font800 Heading">
                    Explore, Apply and Get all the{" "}
                    <div className="HighlightText">approvals </div>
                    required to start your business in Gujarat (India)
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="position-relative d-flex flex-wrap overflow-hidden BannerSearch"
                  >
                    <select className="form-select">
                      <option value="Department Name">Department Name</option>
                      <option value="Department Name 1">
                        Department Name 1
                      </option>
                      <option value="Department Name 2">
                        Department Name 2
                      </option>
                      <option value="Department Name 3">
                        Department Name 3
                      </option>
                    </select>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Approvals"
                    />

                    <Buttons label=" Explore All" className="btn-fill orange" />
                  </form>

                  <p className="p-0 font500 Note">
                    Don’t know which approvals are required?{" "}
                    <Buttons href="/" label="Click Here & Know Your Approval" />
                  </p>
                </div>
              </Col>
              <Col
                xl={6}
                className="d-none d-md-flex align-items-end justify-content-xl-end"
              >
                <div className="w-100 d-flex align-items-end HonbleBox">
                  <div className="position-relative z-1 PmCm PM">
                    <div className="Thumb">
                      <Image
                        alt=""
                        src="/images/pm.png"
                        width={600}
                        height={600}
                      />
                    </div>
                    <div className="text-center ThumbText">
                      <p className="font20 font700 pb-0 Name">
                        SHRI NARENDRA MODI
                      </p>
                      <p className="font14 font400 pb-0 Designation">
                        HON’BLE PRIME MINISTER OF INDIA
                      </p>
                    </div>
                  </div>
                  <div className="PmCm CM">
                    <div className="Thumb">
                      <Image
                        alt=""
                        src="/images/cm.png"
                        width={600}
                        height={600}
                      />
                    </div>
                    <div className="text-center ThumbText">
                      <p className="font20 font700 pb-0 Name">
                        SHRI BHUPENDRABHAI PATEL
                      </p>
                      <p className="font14 font400 pb-0 Designation">
                        HON&apos;BLE CHIEF MINISTER OF GUJARAT
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <video
            src="/images/home-banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="home-video"
          />
        </section>
      )}

      {isHomePage && (
        <section ref={AnimatedHeading1} className="IFPHelpYou">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center HeadingBox">
                  <div className="font34 font600 AnimatedHeading1 Heading">
                    How does IFP Help you?
                  </div>
                  <div className="SubText">
                    <p>
                      The Investor Facilitation Portal (IFP) is a digital
                      platform for investors to identify and apply for
                      approvals/renewal/incentives to setup a business un the
                      state of Gujarat. The platform is built to serve as Single
                      Window Portal of Gujarat State currently.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <Row className="overflow-hidden IFPHelpRow">
                  <IFPHelpYou
                    icon="/images/help-you-1.svg"
                    title="All Approvals in One Place"
                    text="Access everything you need without visiting individual Ministries, Departments"
                  />
                  <IFPHelpYou
                    icon="/images/help-you-2.svg"
                    title="Secure Document Repository"
                    text="Upload document once and use them in your applications"
                  />
                  <IFPHelpYou
                    icon="/images/help-you-3.svg"
                    title="Fast Query Management"
                    text="Get quick resolution to your queries from our dedicated team"
                  />
                  <IFPHelpYou
                    icon="/images/help-you-4.svg"
                    title="Real-time Status Tracking"
                    text="Get real-time updates on your application status and plan your next steps easily"
                  />
                  <IFPHelpYou
                    icon="/images/help-you-5.svg"
                    title="Easy Renewal"
                    text="Renew your approvals easily through a seamless interfae"
                  />
                  <IFPHelpYou
                    icon="/images/help-you-6.svg"
                    title="Know your Approvals"
                    text="Use the smart questionnaire to quickly find which approvals your business may need"
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      {!isHomePage && <section className="CMS">{children}</section>}

      {isHomePage && <KeyApprovalsIfpHome />}

      {isHomePage && (
        <section ref={AnimatedHeading2} className="MOUHome">
          <Container>
            <Row className="align-items-center">
              <Col xl={4}>
                <div className="HeadingBox">
                  <div className="font34 font600 AnimatedHeading2 Heading">
                    Memorandum of Understanding (MOU)
                  </div>
                  <div className="SubText">
                    <p>
                      The Investor Facilitation Portal (IFP) is a single-window
                      online platform for investors in Gujarat, designed to
                      streamline the process of approvals and incentives for
                      setting up businesses in the state.
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
                      label="Nadal Officer"
                      className="btn-fill orange"
                    />
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="d-flex flex-wrap overflow-hidden MOUBlock">
                  <MOUHome
                    image={MOUImage1}
                    title="Investment Intention"
                    link="/"
                    linktext="Explore"
                  />
                  <MOUHome
                    image={MOUImage2}
                    title="Strategic Investment"
                    link="/"
                    linktext="Explore"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {isHomePage && (
        <LandBankHome
          video="/images/MSME-Act.mp4"
          title="Gujarat Land Bank"
          text="The Investor Facilitation Portal (IFP) is a single-window online platform for investors in Gujarat, designed to streamline the process of approvals and incentives for setting up businesses in the state."
          linktext="Find Land"
          link="/"
        />
      )}
      {isHomePage && <SectorsHomeFile />}
      {isHomePage && (
        <section
          ref={AnimatedHeading3}
          className="position-relative z-1 IFPAppHome"
        >
          <Container ref={containerRef}>
            <Row className="align-items-xl-center">
              <Col lg={4} className="order-2 order-xl-1 ThumbGrid">
                <div className="Thumb">
                  <Image
                    alt=""
                    src="/images/i-phone.png"
                    width={400}
                    height={700}
                  />
                </div>
              </Col>
              <Col lg={2} className="order-1 order-xl-2 HeadingBoxGrid">
                <div className="mb-0 HeadingBox">
                  <div className="font40 font600 mb-0 AnimatedHeading3 Heading">
                    Investor Facilitation Portal App
                  </div>
                  <div className="d-flex align-items-center DownloadBox">
                    <h3 className="mb-0 font24 font500 SubHeading">
                      Available On
                    </h3>
                    <div className="d-flex align-items-center PlayStoreIcon">
                      <Link href="/" title="Android">
                        <span className="bi bi-android2"></span>
                      </Link>
                      <Link href="/" title="Apple">
                        <span className="bi bi-apple"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="order-3 order-xl-3 AppGrid">
                <div className="d-flex flex-wrap">
                  <IFPApp
                    icon="/images/app-icon-1.svg"
                    title="All Policy / Notifications / Reminders / Approvals in one Place"
                    text="Get everything you need in one place without having to go to individual Ministries, Departments."
                  />
                  <IFPApp
                    icon="/images/app-icon-2.svg"
                    title="Fast Query Management"
                    text="Get quick resolution to your queries from our dedicated team."
                  />
                  <IFPApp
                    icon="/images/app-icon-3.svg"
                    title="Real-time Status Tracking"
                    text="Get real-time updates on the status of your applications and plan your next steps with ease"
                  />
                  <IFPApp
                    icon="/images/app-icon-4.svg"
                    title="Know your Approvals"
                    text="Use the intelligent questionnaire to easily find our which approvals your might need for your business"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      {isHomePage && <LogoSlider />}
      <Footer />
    </>
  );
}

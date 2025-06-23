"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../../public/images/logo.svg";
import MinesDepartment from "../../../../public/images/Mines-Department.svg";
import "@/components/layout/elements/header.scss";
import Buttons from "@/components/core/buttons/buttons";
import Form from "react-bootstrap/Form";
import gsap from "gsap";

export default function Header() {
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
  const menuContainerRef = useRef(null);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1199);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll and hover behavior
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const links = navEl.querySelectorAll("li");

    links.forEach((li) => {
      if (li.querySelector("ul")) {
        li.classList.add("parent");
      }

      const handleEnter = () => li.classList.add("active");
      const handleLeave = () => li.classList.remove("active");

      li.addEventListener("mouseenter", handleEnter);
      li.addEventListener("mouseleave", handleLeave);

      return () => {
        li.removeEventListener("mouseenter", handleEnter);
        li.removeEventListener("mouseleave", handleLeave);
      };
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const handleParentTriggerClick = () => {
    const menu = navRef.current;
    if (!menu) return;

    if (!menuOpen) {
      // OPEN animation
      menu.style.display = "block"; // Ensure it's visible before animating
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
      document.body.classList.add("MenuOpen");
    } else {
      // CLOSE animation
      gsap.to(menu, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          menu.style.display = "none";
          document.body.classList.remove("MenuOpen");
        },
      });
    }

    setMenuOpen(!menuOpen);
  };

  // Toggle submenu
  const handleChildTriggerClick = (index) => {
    const submenu = navRef.current?.querySelectorAll(".submenu > ul")[index];

    if (!submenu) return;

    const isActive = activeSubMenuIndex === index;

    if (isActive) {
      gsap.to(submenu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          submenu.style.display = "none";
          setActiveSubMenuIndex(null);
        },
      });
    } else {
      const allSubmenus = navRef.current?.querySelectorAll(".submenu > ul");
      allSubmenus.forEach((el, idx) => {
        if (idx !== index) {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
            onComplete: () => {
              el.style.display = "none";
            },
          });
        }
      });

      submenu.style.display = "block";
      gsap.fromTo(
        submenu,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      setActiveSubMenuIndex(index);
    }
  };

  return (
    <header className="Header">
      <div className="HeaderTop">
        <Container>
          <Row>
            <Col
              lg={6}
              className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center"
            >
              <Link
                href="/"
                title="Government of Gujarat  |  Industries and Mines Department"
              >
                <Image
                  src={MinesDepartment}
                  alt="Government of Gujarat  |  Industries and Mines Department"
                />
              </Link>
            </Col>
            <Col
              lg={6}
              className="d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center"
            >
              <div className="TopMenuLinks">
                <nav>
                  <ul>
                    <li>
                      <Buttons href="/" label="About" />
                    </li>
                    <li>
                      <Buttons href="/" label="FAQs" />
                    </li>
                    <li>
                      <Buttons href="/" label="Guide" />
                    </li>
                    <li>
                      <Buttons href="/" label="Contact" />
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="d-flex align-items-center LanguageWrap">
                <span className="bi bi-globe-central-south-asia-fill"></span>
                <Form.Select className="Languages" aria-label="Languages">
                  <option value="1">ENG</option>
                  <option value="2">GUJ</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="position-relative HeaderBottom">
        <Container>
          <div className="position-relative">
            <Row className="align-items-center">
              <Col xs={5} sm={4} md={3} xl={2}>
                <Link href="/" title="Investor Facilitation Portal">
                  <Image src={logo} alt="Logo" />
                </Link>
              </Col>
              <Col
                xs={7}
                sm={8}
                md={9}
                xl={10}
                className="d-flex flex-wrap justify-content-end align-items-center MenuWithBtn"
              >
                {/* Main Menu */}
                <div
                  className={`MenuLinks ${menuOpen ? "open" : ""}`}
                  ref={navRef}
                  // remove inline style display toggle since GSAP handles it
                >
                  <nav ref={navRef}>
                    <ul>
                      <li>
                        <Link href="/">
                          <span className="bi bi-house-door-fill"></span>
                        </Link>
                      </li>

                      <li className="submenu">
                        <Link href="/">SERVICES</Link>
                        <div
                          className="child-trigger"
                          onClick={() => handleChildTriggerClick(0)}
                        >
                          <span></span>
                        </div>
                        <ul>
                          <li>
                            <Link href="/approvals">Approvals</Link>
                            <ul>
                              <li>
                                <Link href="/">Pre-establishment</Link>
                              </li>
                              <li>
                                <Link href="/">Pre-operational</Link>
                              </li>
                              <li>
                                <Link href="/">Others</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/">Incentives</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="/">DEPARTMENTS</Link>
                      </li>
                      <li>
                        <Link href="/">DASHBOARD</Link>
                      </li>
                      <li>
                        <Link href="/">ACTS & RULES</Link>
                      </li>
                      <li>
                        <Link href="/">NSWS</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <Buttons
                  href="/"
                  label="LOGIN"
                  className="btn-outline orange"
                />
                {isMobile && (
                  <button
                    className={`parent-trigger ${menuOpen ? "open" : ""}`}
                    title="Menu"
                    onClick={handleParentTriggerClick}
                  >
                    <span className="d-none">trigger</span>
                  </button>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </header>
  );
}

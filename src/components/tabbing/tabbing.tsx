"use client";
import { useEffect, useRef, useState } from "react";
import { Row, Col, Tabs } from "react-bootstrap";
import PdfBoxItems from "@/components/pdf-box/pdf-box";
// import styles from './ApprovalTabs.module.scss';
// import "../../components/tabbing/tabbing.scss";
import Image from "next/image";
import "@/components/Approvalslist/approvalslist.scss";
import "@/components/tabbing/tabbing.scss";
import PaginationExample from "../../components/core/pagination/pagination";
import SearchFrom from "../../components/searchbox/searchbox";
import TabbingTable from "../../components/tabbing-table/tabbing-table";
import PDFIcon from "../../../public/images/pdf.svg";
import GPCBLogo from "../../../public/images/GPCB-logo.svg";
import CustomAccordion from "@/components/core/accordion/accordion";
import pdfIcon from "../../../public/images/pdf-icon.svg";
import boatIcon from "../../../public/images/boat-icon.svg";
// import { BsInfoCircle } from 'react-icons/bs';

const TABS = [
  {
    id: "about",
    label: "About this Approval",
    icon: <span className="bi bi-exclamation-circle-fill"></span>,
  },
  {
    id: "documents",
    label: "Document Required",
    icon: <span className="bi bi-file-text-fill"></span>,
  },
  {
    id: "acts",
    label: "Acts, Circulars and Policies",
    icon: <span className="bi bi-calendar-week-fill"></span>,
  },
  {
    id: "guide",
    label: "User Guide",
    icon: <span className="bi bi-clipboard2-check-fill"></span>,
  },
];

const guides = [
  { title: <strong> IFP Boat</strong>, link: "", icon: boatIcon },
  { title: "Applicant /Investor Guide", link: "/", icon: pdfIcon },
  { title: "Track Application Guide", link: "/", icon: pdfIcon },
  { title: "Help & Support", link: "/", icon: pdfIcon },
];

export default function Tabbing() {
  const [activeTab, setActiveTab] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const sectionRefs = useRef({});

  // const scrollTo = (id) => {
  //   const element = sectionRefs.current[id];
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1025);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY + -210;
      for (const tab of TABS) {
        const section = sectionRefs.current[tab.id];
        if (
          section &&
          section.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollTo = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 210;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const renderTabContent = (id) => {
    switch (id) {
      case "about":
        return (
          <>
            <h3>{TABS[0].icon} About this Approval</h3>
            <p>
              This permission is required for industries generating e-waste.
            </p>
            <p>
              Compliance of CPCB guidelines for E-waste recycling under E-waste
              Rules, 2016. Characteristics of air emissions, waste water
              generation and other solid wastes including hazardous waste
              expected to be generated during utilization of hazardous wastes.
            </p>
          </>
        );

      case "documents":
        return (
          <>
            <h3>{TABS[1].icon} Document Required</h3>
            <ol>
              <li>
                Compliance of CPCB guidelines for E-waste recycling under
                E-waste Rules, 2016.
              </li>
              <li>
                Characteristics of air emissions, waste water generation and
                other solid wastes including hazardous waste expected to be
                generated during utilization of hazardous wastes.
              </li>
              <li>Copy of valid CTE/CCA</li>
              <li>
                Details of Environmental Management System with flow diagram.
              </li>
              <li>
                Details of E-waste storage facility and process area facility.
              </li>
              <li>Details of occupational health and safety measures</li>
              <li>
                Equipment layout along with their capacity for the utilization
                of E-wastes.
              </li>
              <li>
                Installed capacity as per registration issued by DIC or any
                other authorized govt. agency. (Provide copy).
              </li>
              <li>Material Balance with and without utilizing E-wastes.</li>
            </ol>
          </>
        );

      case "acts":
        return (
          <>
            <div className="title_wrap mb-0">
              <div className="sectionTitle">
                <h3 className="mb-1">
                  {TABS[2].icon} Acts, Circulars and Policies
                </h3>
                <p className="ps-5">
                  <span></span>Showing result - 1 to 6 of 58 results
                </p>
              </div>
              <SearchFrom />
            </div>

            <div className="PDFBoxRow">
              <Row>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
                <Col lg={4} className="PDFBoxGrid">
                  <PdfBoxItems
                    icon={PDFIcon}
                    title="GPCB - Application for E-waste (Management and Handling)"
                    Validated="Validated on June 1, 2025"
                    link="/fonts/test.pdf"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="d-flex justify-content-center justify-content-md-end PaginationBox">
                    <PaginationExample></PaginationExample>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        );

      case "guide":
        return (
          <>
            <h3>{TABS[3].icon} User Guide</h3>
            <TabbingTable rows={guides}  />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      {!isMobile && (
        <div className="tabMenu">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={activeTab === tab.id ? "active" : ""}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      )}

      {isMobile ? (
        <div className="mobileAccordion">
          {TABS.map((tab) => (
            // <details key={tab.id} className='accordion-item'>
            //   <summary className='accordion-header'>
            //     {tab.icon} {tab.label}
            //   </summary>
            //   <div className='accordion-body'>
            //     {renderTabContent(tab.id)}
            //   </div>
            // </details>
            <div
              className={`accordion-item ${
                openAccordion === tab.id ? "active" : ""
              }`}
              key={tab.id}
            >
              <h2
                className="accordion-header"
                onClick={() => toggleAccordion(tab.id)}
              >
                {tab.icon} {tab.label}
              </h2>
              <div
                className={`accordion-body ${
                  openAccordion === tab.id ? "open" : ""
                }`}
              >
                {openAccordion === tab.id && renderTabContent(tab.id)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {TABS.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              ref={(el) => (sectionRefs.current[tab.id] = el)}
              className="tabbing"
            >
              {renderTabContent(tab.id)}
            </div>
          ))}
        </>
      )}
      {/* <div className="tabMenu">
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => scrollTo(tab.id)} className={activeTab === tab.id ? 'active' : ''}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div ref={el => sectionRefs.current['about'] = el} className="tabbing">
        <h3><span className="bi bi-exclamation-circle-fill"></span> About this Approval</h3>
        <p>This permission is required for industries generating e-waste.</p>
        <p>Compliance of CPCB guidelines for E-waste recycling under E-waste Rules, 2016.
        Characteristics of air emissions, waste water generation and other solid wastes including hazardous waste expected to be generated during utilization of hazardous wastes.</p>
      </div>

      <div ref={el => sectionRefs.current['documents'] = el} className="tabbing">
        <h3><span className="bi bi-file-text-fill"></span> Document Required</h3>
        <ol>
          <li>Compliance of CPCB guidelines for E-waste recycling under E-waste Rules, 2016.</li>
          <li>Characteristics of air emissions, waste water generation and other solid wastes including hazardous waste expected to be generated during utilization of hazardous wastes.</li>
          <li>Copy of valid CTE/CCA</li>
          <li>Details of Environmental Management System with flow diagram.</li>
          <li>Details of E-waste storage facility and process area facility.</li>
          <li>Details of occupational health and safety measures</li>
          <li>Equipment layout along with their capacity for the utilization of E-wastes.</li>
          <li>Installed capacity as per registration issued by DIC or any other authorized govt. agency. (Provide copy).</li>
          <li>Material Balance with and without utilizing E-wastes.</li>
        </ol>
      </div>

      <div ref={el => sectionRefs.current['acts'] = el} className="tabbing">
        <div className='title_wrap mb-0'>
          <div className='sectionTitle'>
            <h3 className='mb-1'><span className="bi bi-calendar-week-fill"></span> Acts, Circulars and Policies</h3>
            <p className='ps-5'><span></span>All applicable rules, regulations, and amendments related to e-waste recycling.</p>
          </div>
          <SearchFrom />
        
        </div>
       
        <div className="PDFBoxRow">
          <Row >
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
            <Col lg={4} className="PDFBoxGrid">
              <PdfBoxItems
                icon={PDFIcon}
                title="GPCB - Application for E-waste (Management and Handling)"
                Validated="Validated on June 1, 2025"
              />
            </Col>
          </Row>
          <Row>
              <Col lg={12}>
                  <div className="d-flex justify-content-center justify-content-md-end PaginationBox">
                  <PaginationExample></PaginationExample>
                  </div>
              </Col>
          </Row>
        </div>
      </div>

      <div ref={el => sectionRefs.current['guide'] = el} className="tabbing">
        <h3><span className="bi bi-clipboard2-check-fill"></span> User Guide</h3>
        <TabbingTable rows={guides}/>        
      </div> */}
    </div>
  );
}

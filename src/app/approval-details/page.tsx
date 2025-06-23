"use client";
import Tabbing from "@/components/tabbing/tabbing";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImportantLinkItems from "@/components/important-links/important-links";
import CustomAccordion from "@/components/core/accordion/accordion";
import PaginationExample from "../../components/core/pagination/pagination";
import VideoGalleryDetail from "@/components/video-detail/video-detail";
import ContactSection from "@/components/contactdetails/contactdetails";
import ApprovalRequired from "@/components/approval_required/approval_required";
// import Buttons from "../../core/buttons/buttons";
import Buttons from "@/components/core/buttons/buttons";
import SearchFrom from "../../components/searchbox/searchbox";
import "../approval-details/approval-details.scss";
import mailIcon from "../../../public/images/mail.svg";
import phoneIcon from "../../../public/images/call.svg";
import GPCB from "../../../public/images/GPCBLogo.svg";
import GPCBLogo from "../../../public/images/GPCB-logo.svg";
import EMblmLogo from "../../../public/images/emblm.svg";

import VideoThumb1 from "../../../public/images/videothumb1.jpg";
import VideoThumb2 from "../../../public/images/videothumb2.jpg";
import VideoThumb3 from "../../../public/images/videothumb3.jpg";
import VideoThumb4 from "../../../public/images/videothumb4.jpg";

export default function ApprovalDetails() {
  return (
    <>
      {/* <Row>
            <Col md={9}>
                <Tabbing />
            </Col>
            <Col md={3}>
                <div className="right-section-approval">
                    <div className="button">
                       
                        <Buttons href="/" label="ADD TO DASHBOARD" className="btn-outline orange" />
                    </div>
                    <div className="application_fee">
                        <span>Application Fee</span>
                        <a href="#" className="">Variable fee</a>
                    </div>
                    <div className="application_fee">
                        <span>Validity</span>
                        <a href="#" className="">Year</a>
                    </div>
                    <div className="application_fee">
                        <span>Can be applied through IFP</span>
                        <a href="#" className="">Year</a>
                    </div>
                </div>
            </Col>
            
        </Row> */}
      <section className="InnerPage">
        <div className="tabbing-section">
          <div className="container">
            <div className="tabbing-wrap position-relative">
              <div className="right-section-approval">
                <div className="button">
                  <Buttons
                    href="/"
                    label="ADD TO DASHBOARD"
                    className="btn-outline orange"
                  />
                </div>
                <div className="application_fee">
                  <span>Application Fee</span>
                  <a href="#" className="">
                    Variable fee
                  </a>
                </div>
                <div className="application_fee">
                  <span>Validity</span>
                  <a href="#" className="">
                    Year
                  </a>
                </div>
                <div className="application_fee">
                  <span>Can be applied through IFP</span>
                  <a href="#" className="">
                    Year
                  </a>
                </div>
              </div>
              <Tabbing />
            </div>
          </div>
        </div>

        <section className="important-links">
          <div className="container">
            <Row className="ImportantLinkRow">
              <Col md={12}>
                <div className="sectionTitle">
                  <h3>
                    <span>
                      <i className="bi bi-link-45deg"></i>
                    </span>
                    Important Links
                  </h3>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} className="ImportantLinkGrid">
                <ImportantLinkItems
                  icon={EMblmLogo}
                  title="Gujarat Pollution Control Board"
                />
              </Col>
              <Col sm={6} md={6} lg={4} className="ImportantLinkGrid">
                <ImportantLinkItems
                  icon={EMblmLogo}
                  title="Gujarat Pollution Control Board"
                />
              </Col>
              <Col sm={6} md={6} lg={4} className="ImportantLinkGrid">
                <ImportantLinkItems
                  icon={EMblmLogo}
                  title="Gujarat Pollution Control Board"
                />
              </Col>
            </Row>
          </div>
        </section>

        <section className="faq-section ">
          <div className="container">
            <Row>
              <Col lg={12}>
                {/* <div className="sectionTitle">
                                <h3>
                                    <span><i className="bi bi-chat-dots-fill"></i></span>
                                    Frequently Asked Question (FAQs)
                                </h3>
                            </div> */}
                <div className="title_wrap">
                  <div className="sectionTitle">
                    <h3 className="mb-0">
                      <span>
                        <i className="bi bi-chat-dots-fill"></i>
                      </span>
                      Frequently Asked Question (FAQs)
                    </h3>
                  </div>
                  <SearchFrom />
                </div>
                <div className="ImportantLinkGrid">
                  <CustomAccordion
                    items={[
                      {
                        eventKey: "0",
                        header:
                          "What are the system and browser requirements for running the IFP ?",
                        body: (
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores praesentium delectus autem ratione
                            unde architecto, facere ea maxime obcaecati cumque.
                            Quos necessitatibus in perspiciatis quibusdam,
                            deserunt blanditiis sequi recusandae illo!
                          </p>
                        ),
                      },
                      {
                        eventKey: "1",
                        header:
                          "After redressal, can the grievance be re-opened for further correspondence about it having been closed without details etc.?",
                        body: (
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores praesentium delectus autem ratione
                            unde architecto, facere ea maxime obcaecati cumque.
                            Quos necessitatibus in perspiciatis quibusdam,
                            deserunt blanditiis sequi recusandae illo!
                          </p>
                        ),
                      },
                      {
                        eventKey: "2",
                        header:
                          "How will I know the procedure and list of documents required for a particular approval?",
                        body: (
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores praesentium delectus autem ratione
                            unde architecto, facere ea maxime obcaecati cumque.
                            Quos necessitatibus in perspiciatis quibusdam,
                            deserunt blanditiis sequi recusandae illo!
                          </p>
                        ),
                      },
                      {
                        eventKey: "3",
                        header:
                          "Do I need to repeat all the procedure for getting renewal for my existing enterprise every time ?",
                        body: (
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores praesentium delectus autem ratione
                            unde architecto, facere ea maxime obcaecati cumque.
                            Quos necessitatibus in perspiciatis quibusdam,
                            deserunt blanditiis sequi recusandae illo!
                          </p>
                        ),
                      },
                    ]}
                  />
                </div>
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
        </section>

        <section className="vedioGallery">
          <div className="VideoGalleryPart">
            <div className="container">
              <div className="HeadingBox ResultTopPart">
                <Row>
                  <Col lg={12}>
                    <div className="sectionTitle">
                      <h3>
                        <span>
                          <i className="bi bi-collection-play-fill"></i>
                        </span>
                        Video Gallery
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row className="VideoBoxRow">
                <Col className="VideoBoxGrid" lg={3}>
                  <VideoGalleryDetail
                    thumbnail={VideoThumb1}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="https://www.youtube.com/watch?v=M9FPK_HfsPw"
                  />
                </Col>
                <Col className="VideoBoxGrid" lg={3}>
                  <VideoGalleryDetail
                    thumbnail={VideoThumb2}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="https://www.youtube.com/watch?v=M9FPK_HfsPw"
                  />
                </Col>
                <Col className="VideoBoxGrid" lg={3}>
                  <VideoGalleryDetail
                    thumbnail={VideoThumb3}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="https://www.youtube.com/watch?v=M9FPK_HfsPw"
                  />
                </Col>
                <Col className="VideoBoxGrid" lg={3}>
                  <VideoGalleryDetail
                    thumbnail={VideoThumb4}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="https://www.youtube.com/watch?v=M9FPK_HfsPw"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <ContactSection
          officerName="Name of the Nodal Officer"
          designation="Joint Commissioner"
          email="gujarat@gujarat.gov.in"
          phone="(079) 2323 2152"
          sopLink="#"
          contactLink="#"
          logoSrc={GPCB}
          mailIcon={mailIcon}
          phoneIcon={phoneIcon}
        />

        <ApprovalRequired />
      </section>
    </>
  );
}

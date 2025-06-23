"use client";

import { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import Buttons from "../core/buttons/buttons";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PDFIcon from "../../../public/images/pdf.svg";

import "@/components/pdf-list/pdf-list.scss";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PDFList({ validated, updates, title, link }) {
  return (
    <div className="PDFListBox">
      <Row>
        <Col
          sm={10}
          className="d-flex flex-wrap justify-content-start align-items-center order-2 order-sm-1"
        >
          <div className="w-100 ValidatedUpdates">
            <span className="font14 font400 Validated">{validated}</span>
            <span className="font14 font400 Updates">{updates}</span>
          </div>
          <h3 className="w-100 mb-0 font16 font500 Heading">{title}</h3>
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-sm-end align-items-center order-1 order-sm-2"
        >
          <div className="d-flex align-items-center DownloadGroup">
            <Link
              className="d-flex align-items-center font14 font500 PDFLink"
              href={link}
              title={title}
            >
              <Image src={PDFIcon} alt={title} />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

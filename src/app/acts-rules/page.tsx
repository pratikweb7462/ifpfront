"use client";

import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import Form from "react-bootstrap/Form";

import UserGuide from "@/components/User-guide/User-guide";
import CustomAccordionV2 from "@/components/core/accordion-v-2/accordion-v-2";
import PDFList from "@/components/pdf-list/pdf-list";

// ---------- ✅ Type Definitions ----------
interface FilterSection {
  title: string;
  searchEnabled: boolean;
  data: string[];
}

interface PDFListProps {
  validated: string;
  updates: string;
  title: string;
  link: string;
}

interface AccordionItem {
  eventKey: string;
  header: JSX.Element;
  body: JSX.Element;
}

// ---------- ✅ Component ----------
export default function Approvals() {
  const filterSections: FilterSection[] = [
    {
      title: "Name of Department",
      searchEnabled: true,
      data: [
        "Agriculture, Farmers Welfare and Co-operation Department",
        "Development Commissioner Office - Panchayat, Rural Housing & Rural Development",
        "Department of Science & Technology",
        "Energy & Petrochemicals Department",
        "Finance Department",
        "Food and Drug Control Administration - Health & Family Welfare Department",
        "Forest and Environment Department",
        "Gujarat Industrial Development Corporation",
        "Home Department",
        // Duplicate entries could be removed if not required
      ],
    },
  ];

  // State with explicit typing
  const [searchTerms, setSearchTerms] = useState<string[]>(
    filterSections.map(() => "")
  );

  // Explicit types for function params
  const handleSearchChange = (index: number, value: string) => {
    const updatedSearchTerms = [...searchTerms];
    updatedSearchTerms[index] = value;
    setSearchTerms(updatedSearchTerms);
  };

  const CustomAccordionV2Items: AccordionItem[] = Array.from({ length: 10 }, (_, i) => ({
    eventKey: i.toString(),
    header: (
      <PDFList
        validated="Validated on June 1, 2025"
        updates="5 Updates"
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        link="/fonts/test.pdf"
      />
    ),
    body: (
      <>
        {Array.from({ length: 3 }).map((_, idx) => (
          <PDFList
            key={idx}
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            link="/fonts/test.pdf"
          />
        ))}
      </>
    ),
  }));

  return (
    <div className="InnerPages">
      <Container>
        <Row>
          <Col lg={12} xl={3} xxl={3}>
            <FilterPart filterSections={filterSections} />
          </Col>

          <Col lg={12} xl={9} xxl={9}>
            <div className="HeadingBox ResultTopPart">
              <Row>
                <Col lg={4} className="HeadingGrid">
                  <h3 className="font30 font700 mb-0">Acts & Rules</h3>
                </Col>
                <Col lg={8} className="FilterGrid">
                  <div className="w-100 d-flex flex-wrap justify-content-lg-end align-items-center ShowResult">
                    <span>Showing result 1-10 of 221 results</span>
                    <Form.Select aria-label="Filter">
                      <option>Show</option>
                      <option value="1">Show 10</option>
                      <option value="2">Show 20</option>
                      <option value="3">Show 30</option>
                    </Form.Select>
                    <Form.Select aria-label="Default">
                      <option>Default</option>
                      <option value="1">Default 1</option>
                      <option value="2">Default 2</option>
                      <option value="3">Default 3</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
            </div>

            <Row>
              <Col lg={12}>
                <CustomAccordionV2 items={CustomAccordionV2Items} />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="d-flex justify-content-center justify-content-md-end PaginationBox">
                  <PaginationExample />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

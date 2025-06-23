"use client";

import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import Form from "react-bootstrap/Form";

import UserGuide from "@/components/User-guide/User-guide";
import CustomAccordionV2 from "@/components/core/accordion-v-2/accordion-v-2";
import PDFList from "@/components/pdf-list/pdf-list";

export default function Approvals() {
  const filterSections = [
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
        "Agriculture, Farmers Welfare and Co-operation Department",
        "Development Commissioner Office - Panchayat, Rural Housing & Rural Development",
        "Department of Science & Technology",
        "Energy & Petrochemicals Department",
        "Finance Department",
        "Food and Drug Control Administration - Health & Family Welfare Department",
        "Forest and Environment Department",
        "Gujarat Industrial Development Corporation",
        "Home Department",
      ],
    },
  ];

  // Initialize state for each searchable section
  const [searchTerms, setSearchTerms] = useState(filterSections.map(() => ""));

  const handleSearchChange = (index, value) => {
    const updatedSearchTerms = [...searchTerms];
    updatedSearchTerms[index] = value;
    setSearchTerms(updatedSearchTerms);
  };
  const CustomAccordionV2Items = [
    {
      eventKey: "0",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "1",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "2",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "3",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "4",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "5",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "6",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "7",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "8",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
    {
      eventKey: "9",
      header: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates="5 Updates"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
      body: (
        <>
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
          <PDFList
            validated="Validated on June 1, 2025"
            updates=""
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            link="/fonts/test.pdf"
          />
        </>
      ),
    },
  ];

  return (
    <div className="InnerPages">
      <Container>
        <Row>
          {/* Left Column: Filters */}
          <Col lg={12} xl={3} xxl={3}>
            <FilterPart filterSections={filterSections} />
          </Col>

          {/* Right Column: Results */}
          <Col lg={12} xl={9} xxl={9}>
            {/* <div className="ResultPart"> */}
            <div className="HeadingBox ResultTopPart">
              <Row>
                <Col lg={4} className="HeadingGrid">
                  <h3 className="font30 font700 mb-0">Acts & Rules</h3>
                </Col>
                <Col lg={8} className="FilterGrid">
                  <div className="w-100 d-flex flex-wrap  justify-content-lg-end align-items-center ShowResult">
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
                  <PaginationExample></PaginationExample>
                </div>
              </Col>
            </Row>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

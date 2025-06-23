"use client";

import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Approvalslist from "@/components/Approvalslist/Approvalslist";
import Emblmlogo from "../../../public/images/emblmlogo.png";
import Gpcb from "../../../public/images/gpcb.png";
import Fdca from "../../../public/images/fdca.png";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import Form from "react-bootstrap/Form";
import PDFIcon from "../../../public/images/pdf.svg";
import UserGuide from "@/components/User-guide/User-guide";

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
                  <h3 className="font30 font700 mb-0">User Guide</h3>
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
            <Row className="UserGuideRow">
              <UserGuide
                title="Applicant‑side User Manual for Provisional Eligibility Certificate"
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Applicant‑side User Manual for Provisional Eligibility Certificate"
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Electrical Installation Certification — User Manual (Applicant)"
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Applicant‑side User Manual for Provisional Eligibility Certificate"
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Applicant‑side User Manual for Provisional Eligibility Certificate"
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
                buttontext="Download"
                link="/fonts/test.pdf"
              />
              <UserGuide
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
                buttontext="Download"
                link="/fonts/test.pdf"
              />
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

"use client";

import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Approvalslist from "@/components/Approvalslist/Approvalslist";

import ApprovalsImg1 from "../../../public/images/gpcb.png";
import ApprovalsImg2 from "../../../public/images/fdca.png";
import ApprovalsImg3 from "../../../public/images/emblmlogo.png";
import ApprovalsImg4 from "../../../public/images/ApprovalsImg4.svg";
import ApprovalsImg5 from "../../../public/images/ApprovalsImg5.svg";
import ApprovalsImg6 from "../../../public/images/ApprovalsImg6.svg";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import Form from "react-bootstrap/Form";

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
    {
      title: "Approval Type",
      searchEnabled: true,
      data: ["Pre-Establishment Approval", "Pre-Operational Approval"],
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
                  <h3 className="font30 font700 mb-0">221 Approvals</h3>
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
              <Approvalslist
                image={ApprovalsImg3}
                title="Industrial Park Application for Registration"
                subtext="Industries Commissionerate"
                update="90 Days"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg3}
                title="Industrial Park Application for Approval"
                subtext="Industries Commissionerate"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg1}
                title="GPCB - consent To Establish"
                subtext="Forest and Environment Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg1}
                title="GPCB — Application for E-Waste (Management and Handling)"
                subtext="Forest and Environment Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg2}
                title="Retail Drug License (Pharmacy)/Whole Sale License"
                subtext="Food and Drug Control Administration-H and FWD"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg2}
                title="Fresh Drug Manufacturing License"
                subtext="Food and Drug Control Administration-H and FWD"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg4}
                title="New HT Connection UGVCL"
                subtext="Energy and Petrochemicals Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg4}
                title="New LT Connection UGVCL"
                subtext="Energy and Petrochemicals Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg5}
                title="Road Cutting Application - Roads and Building Department"
                subtext="Road and Building Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
              />
              <Approvalslist
                image={ApprovalsImg6}
                title="UDD - Building Use Permission"
                subtext="Urban Development and Urban Housing Department"
                link1="approval-details"
                link2="/"
                link3="/"
                link4="/"
                link5="/"
                link6="/"
                text1="View Details"
                text2="Add to Dashboard"
                text3="Track Application"
                text4="User Guide"
                text5="Leave Feedback"
                text6="Help & Support"
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

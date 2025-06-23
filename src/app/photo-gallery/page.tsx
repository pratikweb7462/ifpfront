"use client";
import Image from "next/image";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import PhotoGalleryItem from "@/components/photo-gallery/photo-gallery";
import Thumb1 from "../../../public/images/thumb1.jpg";
import Thumb2 from "../../../public/images/thumb2.jpg";
import Thumb3 from "../../../public/images/thumb3.jpg";
import Thumb4 from "../../../public/images/thumb4.jpg";
import Thumb5 from "../../../public/images/thumb5.jpg";
import Thumb6 from "../../../public/images/thumb6.jpg";
import Thumb7 from "../../../public/images/thumb7.jpg";
import Thumb8 from "../../../public/images/thumb8.jpg";
import Thumb9 from "../../../public/images/thumb9.jpg";
import Thumb10 from "../../../public/images/thumb10.jpg";
import Thumb11 from "../../../public/images/thumb11.jpg";
import Thumb12 from "../../../public/images/thumb12.jpg";
import Form from "react-bootstrap/Form";

export default function PhotoGallery() {
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
            <div className="VideoGalleryPart">
              <div className="HeadingBox ResultTopPart">
                <Row>
                <Col lg={4} className="HeadingGrid">
                    <h3 className="font30 font700 mb-0">Photo Gallery</h3>
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
              <Row className="VideoBoxRow">
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb1}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb2}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb3}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb4}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb5}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb6}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb7}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb8}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb9}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb10}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb11}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <PhotoGalleryItem
                    thumbnail={Thumb12}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    photocount="12"
                    photos={[
                      "/images/thumb1.jpg",
                      "/images/thumb2.jpg",
                      "/images/thumb3.jpg",
                      "/images/thumb4.jpg",
                      "/images/thumb5.jpg",
                      "/images/thumb6.jpg",
                      "/images/thumb7.jpg",
                      "/images/thumb8.jpg",
                      "/images/thumb9.jpg",
                      "/images/thumb10.jpg",
                      "/images/thumb11.jpg",
                      "/images/thumb12.jpg",
                    ]}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

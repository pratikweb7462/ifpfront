"use client";
import Image from "next/image";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PaginationExample from "../../components/core/pagination/pagination";
import FilterPart from "../../components/Filters/filters";
import VideoGalleryItem from "@/components/video-gallery/video-gallery";
import VideoThumb1 from "../../../public/images/videothumb1.jpg";
import VideoThumb2 from "../../../public/images/videothumb2.jpg";
import VideoThumb3 from "../../../public/images/videothumb3.jpg";
import VideoThumb4 from "../../../public/images/videothumb4.jpg";
import VideoThumb5 from "../../../public/images/videothumb5.jpg";
import VideoThumb6 from "../../../public/images/videothumb6.jpg";
import VideoThumb7 from "../../../public/images/videothumb7.jpg";
import VideoThumb8 from "../../../public/images/videothumb8.jpg";
import VideoThumb9 from "../../../public/images/videothumb9.jpg";
import VideoThumb10 from "../../../public/images/videothumb10.jpg";
import Form from "react-bootstrap/Form";

export default function VideoGallery() {
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
                    <h3 className="font30 font700 mb-0">Video Gallery</h3>
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
                  <VideoGalleryItem
                    thumbnail={VideoThumb1}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb2}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb3}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb4}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb5}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb6}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb7}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb8}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb9}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb10}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb1}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
                  />
                </Col>
                <Col className="VideoBoxGrid" md={6} lg={4} xl={4} xxl={4}>
                  <VideoGalleryItem
                    thumbnail={VideoThumb2}
                    title="58 MoUs were signed on a single day with an anticipated investment 58 MoUs were signed on a single"
                    location="Gandhinagar, Gujarat"
                    date="12 June 2025"
                    videoUrl="/video-detail"
                    photocount="12"
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

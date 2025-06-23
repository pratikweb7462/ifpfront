import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import styles from "../../../assets/styles/banner.module.scss";
import banner_img from "../../../../public/images/banner-img.png";
import Image from 'next/image';

export default function Banner() {
    return(
        <>
        <div className={styles.bannerSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-white py-4">
            <h2 className="fw-bold">Approvals</h2>
            <p className="mb-4">Issued by the Government of Gujarat</p>

            <InputGroup className={styles.searchGroup}>
              <Form.Select aria-label="Department Name" className="">
                <option>Department Name</option>
                <option value="1">Industries</option>
                <option value="2">Mines</option>
              </Form.Select>

              <Form.Control placeholder="Search Approvals" className=''/>

              <Button variant="warning" className={styles.exploreBtn}>
                EXPLORE ALL
              </Button>
            </InputGroup>

            <p className="mt-3 text-white">
              Don’t know which approvals are required?{' '}
              <a href="#" className="text-success fw-semibold">
                Click Here & Know Your Approval
              </a>
            </p>
          </Col>

          <Col md={6} className="d-none d-md-block text-end">
            {/* <Image src={banner_img} alt="Map" className="img-fluid" /> */}
          </Col>
        </Row>
      </Container>
    </div>
        </>
    )
}
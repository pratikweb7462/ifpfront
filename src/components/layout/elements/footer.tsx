"use client";
import { Col, Container, Row } from "react-bootstrap";
import "@/components/layout/elements/footer.scss";
import VisitorCounter from "@/components/layout/elements/visitorcounter";
import Buttons from "@/components/core/buttons/buttons";

export default function Footer() {
  const visitorCount = 123456;

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <ul className="list-unstyled">
              <li>
                <Buttons href="/" label="About Us" />
              </li>
              <li>
                <Buttons href="/" label="Services" />
              </li>
              <li>
                <Buttons href="/" label="Departments" />
              </li>
              <li>
                <Buttons href="/" label="Know Your Approval (KYA)" />
              </li>
              <li>
                <Buttons href="/" label="Dashboard" />
              </li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <ul className="list-unstyled">
              <li>
                <Buttons href="/acts-rules" label="Acts & Rules" />
              </li>
              <li>
                <Buttons href="/" label="Help &amp; Support" />
              </li>
              <li>
                <Buttons href="/" label="FAQs" />
              </li>
              <li>
                <Buttons href="/user-guide" label="User Guide" />
              </li>
            </ul>
          </Col>

          <Col lg={4} md={4} sm={6}>
            <ul className="list-unstyled">
              <li>
                <Buttons href="/" label="Terms of Use" />
              </li>
              <li>
                <Buttons href="/" label="Privacy Policy" />
              </li>
              <li>
                <Buttons href="/" label="Refund Policy" />
              </li>
              <li>
                <Buttons href="/" label="Misinformation Policy" />
              </li>
            </ul>
          </Col>

          <Col lg={3} md={12} sm={12}>
            <h6>Toll Free Number</h6>
            <span className="contactno">1800 233 1847</span>
            <ul className="address">
              <li className="map">
                Industries Commissionerate <br></br>Block 1, 2nd Floor, Udyog
                Bhavan, Sector 11, Gandhinagar-382011, Gujarat
              </li>
              <li className="mail">
                <Buttons href="mailto:support-ipp@gov.in" label="support-ipp@gov.in" />
              </li>
              <li className="call">
                 <Buttons href="tel:079-232-46571" label="079-232-46571 / 1800 233 1847" />
              </li>
              <li className="call">
                 <Buttons href="/" label="Contact Us" className="contact" />
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light mt-4 mb-4" />
        <div className="footerbottom">
          <Row>
            <Col lg={6} md={12}>
              <div className="copyright">
                <p>
                  Copyright © 2025. All Rights Reserved Industrial Extension
                  Bureau. (INDEXTb)
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="latestupdate">
                <p>Last Updated Date: 12/06/2025</p>
                <div className="visitor">
                  <p>Visitor Counter: </p>
                  <div className="count">
                    <VisitorCounter count={visitorCount} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className="footerbottomcontent">
                <p>
                  &quot;Prevent unauthorised transactions in your account. Update
                  your mobile numbers/email IDs with Investor Facilitation
                  Portal. Receive information of your activity directly from IFP
                  portal on your mobile/email. Issued in the interest of
                  Applicant/Investors. KYC is one time exercise while applying
                  on IFP portal - once KYC is done, you need not undergo the
                  same process again when you approach another service available
                  on the IFP portal.
                  <br />
                  As a portal we don&apos;t allow intermediaries, and have not
                  authorized anyone to file/fill the applications on behalf of
                  &quot;Applicant/Investor&quot;. If you find anyone claiming to be part
                  of IFP portal and offering such services, please{" "}
                  <a href="#">create a ticket here</a>
                </p>
                <p className="mb-0">
                  Please ensure you carefully read the policy documents/user
                  guides before applying for the applications/services available
                  on the IFP portal.
                </p>
                <ul>
                  <li>
                    <a href="#">Query Mechanism </a>{" "}
                  </li>
                  <li>
                    <a href="#">Grievances Redressal Mechanism</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

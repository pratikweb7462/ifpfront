import React from "react";
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import "../../components/contactdetails/contactdetails.scss";

export default function ContactDetails({officerName , designation , email , phone , sopLink , contactLink, logoSrc,
  mailIcon,
  phoneIcon }) {
    return(
        <>

        <section className="contact">
            <div className="container">
            <Row>
                <Col md={12}>
                <div className="sectionTitle">
                    <h3><span className="bi bi-telephone-fill"></span> Contact Details</h3>
                </div>

                <div className="cardBox">
                    <div className="left">
                    <h4>{officerName}</h4>
                    <p>{designation}</p>

                    <div className="contactInfo">
                        <a href={`mailto:${email}`}>
                        <Image src={mailIcon} alt="mail" width={18} height={18} />
                        {email}
                        </a>

                        <a href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
                        <Image src={phoneIcon} alt="phone" width={18} height={18} />
                        {phone}
                        </a>
                    </div>

                    <div className="links">
                        <a href={sopLink} className="d-block">STANDARD OPERATING PROCEDURE</a>
                        <a href={contactLink} className="d-block">CONTACT US</a>
                    </div>
                    </div>

                    <div className="right">
                    <div className="white-box">
                        <Image src={logoSrc} alt="Logo" />
                    </div>
                    </div>
                </div>
                </Col>
            </Row>
            </div>
        </section>

        </>
    )
}
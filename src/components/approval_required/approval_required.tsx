"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import approvalimg from "../../../public/images/approval_required.svg";
import '../../components/approval_required/approval_required.scss';

const ApprovalRequired = () => {
   return(
        <>
        <section className="approval_required">
            <div className="container">
            <Row>
                <Col md={12}>
                    <div className="approval_wrap">
                        <div className="title_section">
                            <p>Don&apos;t know which approvals are required? </p>
                            <a href="#">Click Here & Know your Approval</a>
                        </div>
                        <div className="details">
                            <div className="left">
                                <span>Disclaimer:</span>
                                <p>While IFP endeavours to keep this list of approvals and registrations up to date and accurate, We do not guarantee the completeness or accuracy of this list. This list is provided by IFP on the Platform &apos;as is&apos; based on inputs from Departments and may be subject to change from time to time and IFP may not be held responsible for any losses or damages caused to you arising out of this list.</p>
                            </div>
                            <div className="right">
                                <div className="img_wrap">
                                    <Image src={approvalimg} alt={approvalimg} />
                                </div>
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

export default ApprovalRequired;
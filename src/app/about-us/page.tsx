"use client";

import { useState } from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
// import Tabbing from "@/components/about-tabbing/about-tabbing";
import AboutTabbing from "@/components/about-tabbing/about-tabbing";



import "./about-us.scss";

const teamMembers = [
  { name: 'Nodal Officer', role: 'Designation', image: '/images/profile-img.svg'},
  { name: 'Team Member 1', role: 'Designation', image: '/images/profile-img.svg'},
  { name: 'Team Member 2', role: 'Designation', image: '/images/profile-img.svg'},
  { name: 'Team Member 3', role: 'Designation', image: '/images/profile-img.svg'},
];

const points = [
  {title: "All Approvals in One Place", detail: "Get all your approvals in one place, from the comfort of your home or office.", image: '/images/clipboard.svg'},
  {title: "Secure Document Repository", detail: "Upload document once and use them in your applications", image: '/images/security.svg'},
  {title: "Fast Query Management", detail: "Get quick resolution to your queries from our dedicated team", image: '/images/management.svg'},
  {title: "Real-time Status Tracking", detail: "Get real-time updates on your application status and plan your next steps easily", image: '/images/traking-status.svg'},
  {title: "Easy Renewal", detail: "Renew your approvals easily through a seamless interfae", image: '/images/renewale.svg'},
  {title: "Know your Approvals", detail: "Use the smart questionnaire to quickly find which approvals your business may need", image: '/images/approvals.svg'},
];

export default function AboutUsPage() {
  return (
    <>  
    <div className="IFP-About-Us">
        <div className="IFP-about">
          <div className="container">
            <Row>
              <Col lg={8} md={12}>
                <div className="IFP-about-content">
                  <h3>About Investor Facilitation Portal</h3>
                  <p>
                    The Investor Facilitation Agency (IFA) is a dedicated bureau within the Industries Commissionerate office that guides and assists entrepreneurs in setting up industries across the State. It supports the formulation of policies that foster industrial progress and provides secretarial assistance to the State Level Facilitation Committee, the Single Window Facilitation Committee and, when required, District Level Facilitation Committees. In addition, the IFA coordinates with State Government departments on investor applications, integrates departmental websites with the Investor Facilitation Portal and supplies any other support needed to ensure the portal’s smooth functioning. Finally, it resolves investor grievances related to approvals, incentives, land or technical matters, and other issues in the manner prescribed.
                  </p>
                  
                </div>
                <div className="our-team">
                  <h3>Our Team </h3>
                  <div className="teamGrid">
                    {teamMembers.map((member, idx) =>(
                      <div key={idx} className="member">
                        <div className="member-img">
                          <Image src={member.image} alt={member.name} className="member-image"  width={100} height={100} />
                        </div>
                        <div className="member-details">
                          <h6>{member.name}</h6>
                          <span>{member.role}</span>
                        </div>
                          
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="IFP-help-you">
                    <div className="helpCard">
                      <h5>How does IFP Help you?</h5>
                      <ul>
                          {points.map((point, idx) => (
                            <li key={idx}>
                              <div className="card-wrap">
                                <div className="card-img">
                                  <Image src={point.image} alt="check" width={37} height={37} />
                                </div>
                                <div className="card-details">
                                  <h6>{point.title}</h6>
                                  <span>{point.detail}</span>
                                </div>
                              </div>
                                  
                              
                            </li>
                          ))}
                      </ul>
                    </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="approvals">
          <div className="container">
            <Row>
              <Col md={12}>
                {/* <Tabbing departments={[
                  { name: 'Department 1', content: <p>Content for Department 1</p> },
                  { name: 'Department 2', content: <p>Content for Department 2</p> },
                  { name: 'Department 3', content: <p>Content for Department 3</p> },
                ]} />  */}

                <AboutTabbing departments={[
                  { name: 'Department 1', content: 'Content for Department 1', image: '/images/department-approval.svg' },
                  { name: 'Department 2', content: 'Content for Department 2' },
                  { name: 'Department 3', content: 'Content for Department 3' },
                ]} />
              </Col>
            </Row>
          </div>
        </div>
    </div>
    
    </>
  );
}

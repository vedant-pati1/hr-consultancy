"use client";
import React from "react";
import { Row, Col, Card, Collapse, Divider } from "antd";
import {
  DollarOutlined,
  SafetyOutlined,
  FileTextOutlined,
  TeamOutlined,
  AuditOutlined,
  BulbOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import HeroSection from "@/my-components/HeroSection";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const { Panel } = Collapse;

const ServicesPage: React.FC = () => {
  //   useEffect(() => {
  //     const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('visible');
  //         }
  //       });
  //     };

  //     const observer = new IntersectionObserver(observerCallback, {
  //       threshold: 0.1
  //     });

  //     document.querySelectorAll('.fade-in').forEach(element => {
  //       observer.observe(element);
  //     });

  //     return () => observer.disconnect();
  //   }, []);

  const services = [
    {
      title: "Payroll Management",
      icon: <DollarOutlined style={{ fontSize: 48 }} />,
      description:
        "Comprehensive payroll processing and management services to ensure accurate and timely compensation for your employees.",
      details: [
        "Timely salary calculations and payslip preparation",
        "Integration with attendance systems",
        "Maintenance of payroll records",
        "Performance-based incentive tracking",
        "Payroll analytics for budgeting",
      ],
    },
    {
      title: "Compliance Management",
      icon: <SafetyOutlined style={{ fontSize: 48 }} />,
      description:
        "Stay compliant with all relevant laws and regulations with our comprehensive compliance management services.",
      details: [
        "Filings for PF, ESIC, PT, TDS, etc.",
        "Adherence to gratuity, bonus, and labor laws",
        "Shops & Establishment Act registration",
        "Monthly and annual compliance reporting",
        "Support for government audits",
      ],
    },
    {
      title: "HR Policy Development",
      icon: <FileTextOutlined style={{ fontSize: 48 }} />,
      description:
        "Custom HR policies tailored to your organization's specific needs and industry requirements.",
      details: [
        "Customized employee handbooks",
        "Leave, attendance, and travel policies",
        "Performance review systems",
        "Code of conduct and grievance processes",
        "Remote and hybrid work guidelines",
      ],
    },
    {
      title: "Recruitment Services",
      icon: <TeamOutlined style={{ fontSize: 48 }} />,
      description:
        "End-to-end recruitment solutions to help you find and hire the right talent for your organization.",
      details: [
        "Tailored job descriptions",
        "Shortlisting of top candidates",
        "Resume screening and sourcing",
        "Interview coordination",
        "Campus hiring and senior-level recruitment",
      ],
    },
    {
      title: "Background Verification",
      icon: <AuditOutlined style={{ fontSize: 48 }} />,
      description:
        "Thorough background checks to verify candidate credentials and ensure safe hiring decisions.",
      details: [
        "Employment and academic history checks",
        "Address and criminal background verification",
        "Reference checks",
        "Document authentication (PAN, Aadhaar)",
      ],
    },
    {
      title: "Orientation Program",
      icon: <BulbOutlined style={{ fontSize: 48 }} />,
      description:
        "Structured onboarding programs to help new employees integrate smoothly into your organization.",
      details: [
        "Welcome sessions for new employees",
        "Introduction to company culture and policies",
        "Team and department overviews",
        "Policy summaries and expectations",
        "Ongoing support and Q&A sessions",
      ],
    },
  ];

  const faqs = [
    {
      question: "How quickly can you implement HR services for our company?",
      answer:
        "We typically complete implementation within 2-4 weeks, depending on the complexity of your requirements and the services you need. We'll provide a specific timeline during our initial consultation.",
    },
    {
      question: "Do you offer customized packages based on our specific needs?",
      answer:
        "Yes, we understand that every business has unique requirements. We offer flexible packages that can be tailored to your specific needs and budget. We'll work with you to design a service package that addresses your most pressing HR challenges.",
    },
    {
      question: "How do you ensure compliance with changing HR regulations?",
      answer:
        "Our compliance team continuously monitors regulatory changes at local, state, and national levels. We implement updates to your HR policies and procedures as needed and provide regular compliance reports to keep you informed.",
    },
    {
      question: "Can you integrate with our existing HR software or systems?",
      answer:
        "Yes, we can work with most popular HR, payroll, and attendance systems. During onboarding, we'll assess your current tech stack and ensure smooth integration with our services.",
    },
    {
      question:
        "What makes your recruitment services different from other providers?",
      answer:
        "Our recruitment approach combines industry expertise, a vast talent network, and thorough screening processes. We focus on cultural fit alongside technical qualifications, resulting in higher retention rates and better performing teams.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive HR solutions tailored to your business needs"
        showButtons={false}
      />

      {/* Services Overview */}
      <section
        className="section-padding bg-white"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <div className="section-title">
            <Title level={2}>How We Can Help You</Title>
            <Paragraph className="text-center text-gray-600 max-w-3xl mx-auto">
              HR Remedy provides comprehensive HR solutions designed to support
              businesses at every stage of growth. Our services can be tailored
              to meet your specific needs.
            </Paragraph>
          </div>

          {/* IMPORTANT*/}
          {/* flex-row-reverse is not working because their is issue with tailwind css configuration
            after fixing it you can use it. */}

          {services.map((service, index) => (
            <div key={index} className="mb-16 fade-in">
              <Divider
                orientation="left"
                className={index === 0 ? "hidden" : ""}
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </Divider>

              <Row
                gutter={[24, 24]}
                align="middle"
                className={index % 2 === 0 ? "" : "flex-row-reverse"}
              >
                <Col xs={24} md={8} className="text-center">
                  <div className="text-[#1890ff] mb-4">{service.icon}</div>
                  <Title level={3}>{service.title}</Title>
                  <Paragraph className="text-lg">
                    {service.description}
                  </Paragraph>
                </Col>

                <Col xs={24} md={16}>
                  <Card className="shadow-md">
                    <Title level={4} className="mb-4">
                      What We Offer:
                    </Title>
                    <ul className="pl-0 list-none">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="mb-3 flex items-start">
                          <CheckOutlined className="text-[#52c41a] mt-1 mr-3" />
                          <Text className="text-base">{detail}</Text>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section
        className="section-padding bg-gray-50"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
              Frequently Asked Questions
            </Title>
          </div>

          <Row justify="center">
            <Col xs={24} md={20} lg={18} className="fade-in">
              <Collapse
                accordion
                bordered={false}
                className="bg-transparent"
                items={faqs.map((faq, index) => ({
                  key: index.toString(),
                  label: (
                    <span className="text-lg font-medium">{faq.question}</span>
                  ),
                  children: (
                    <Paragraph className="text-base">{faq.answer}</Paragraph>
                  ),
                  className: "mb-4 bg-white rounded-lg overflow-hidden",
                }))}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1890ff] text-white">
        <div className="container mx-auto px-4 text-center">
          <Title level={2} className="text-white mb-6">
            Ready to Get Started?
          </Title>
          <Paragraph className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll help you determine
            which services best fit your business needs.
          </Paragraph>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <a href="/contact">
                <button className="bg-white text-[#1890ff] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
                  Contact Us
                </button>
              </a>
            </Col>
            <Col>
              <a href="tel:+919876543210">
                <button className="bg-transparent text-white border border-white hover:bg-white hover:text-[#1890ff] font-medium py-3 px-6 rounded-lg transition duration-300">
                  Call Us: {process.env.MOBILE_NUMBER}
                </button>
              </a>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

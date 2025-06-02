"use client";
import HeroSection from "@/my-components/HeroSection";
import ServiceCard from "@/my-components/ServiceCard";
import TestimonialCard from "@/my-components/TestimonialCard";
import { Typography, Row, Col, Card, Carousel, Button } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  DollarOutlined,
  SafetyOutlined,
  FileTextOutlined,
  TeamOutlined,
  AuditOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Payroll Management",
    icon: <DollarOutlined style={{ fontSize: 36 }} />,
    description: [
      "Timely salary calculations",
      "Integration with attendance systems",
      "Payroll analytics",
    ],
  },
  {
    title: "Compliance Management",
    icon: <SafetyOutlined style={{ fontSize: 36 }} />,
    description: [
      "PF, ESIC, PT, TDS filings",
      "Labor law compliance",
      "Audit support",
    ],
  },
  {
    title: "HR Policy Development",
    icon: <FileTextOutlined style={{ fontSize: 36 }} />,
    description: [
      "Custom employee handbooks",
      "Performance review systems",
      "Remote work guidelines",
    ],
  },
  {
    title: "Recruitment Services",
    icon: <TeamOutlined style={{ fontSize: 36 }} />,
    description: [
      "Tailored job descriptions",
      "Resume screening",
      "Interview coordination",
    ],
  },
  {
    title: "Background Verification",
    icon: <AuditOutlined style={{ fontSize: 36 }} />,
    description: [
      "Employment history checks",
      "Academic verification",
      "Document authentication",
    ],
  },
  {
    title: "Orientation Program",
    icon: <BulbOutlined style={{ fontSize: 36 }} />,
    description: [
      "New employee onboarding",
      "Company culture introduction",
      "Policy training",
    ],
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director",
    company: "TechSolutions Inc.",
    content:
      "HR Remedy has transformed our HR operations. Their expert team has helped us streamline our processes and ensure full compliance with all regulations.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "CEO",
    company: "Startup Innovations",
    content:
      "As a growing startup, we needed HR expertise without the overhead of a full department. HR Remedy provided exactly what we needed with their flexible services.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Operations Manager",
    company: "Global Manufacturing Ltd.",
    content:
      "Their payroll management service has eliminated errors and saved us countless hours every month. Highly recommended for businesses of all sizes.",
    rating: 4,
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Welcome to HR Consultancy"
        subtitle="Let us handle your HR functions professionally so you can focus on what you do best—leading and growing your business."
      />
      <section style={{ padding: "4rem 0", backgroundColor: "white" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
              Welcome to HR Remedy
            </Title>
          </div>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={16} lg={14}>
              <Paragraph
                style={{
                  color: "rgba(0, 0, 0, 0.85)",
                  fontSize: "1.125rem", // text-lg
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                HR Remedy is dedicated to providing comprehensive HR solutions
                tailored to the needs of startups and growing businesses. Our
                mission is to empower organizations by handling their HR
                functions with expertise and precision, allowing them to focus
                on their core business activities.
              </Paragraph>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1.5rem", // mt-6
                }}
              >
                <Link href="/about">
                  <Button type="primary" size="large">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center" }}>
              Our Services
            </Title>
            <Paragraph className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
              We offer a comprehensive range of HR services to support your
              business needs
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} lg={8} key={index} className="fade-in">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12 fade-in">
            <Link href="/services">
              <Button type="primary" size="large">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{ paddingTop: 64, paddingBottom: 64 }}
        className=" bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center" }}>
              Why Choose Us
            </Title>
          </div>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card className="h-full text-center hover:shadow-md transition-shadow">
                <div className="text-[#1890ff] text-4xl mb-4">
                  <TeamOutlined />
                </div>
                <Title level={4}>Experienced Team</Title>
                <Paragraph>
                  Our team brings years of HR expertise across various
                  industries, ensuring your HR needs are handled with precision.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card className="h-full text-center hover:shadow-md transition-shadow">
                <div className="text-[#1890ff] text-4xl mb-4">
                  <SafetyOutlined />
                </div>
                <Title level={4}>Compliance Focused</Title>
                <Paragraph>
                  We stay updated with the latest HR regulations to ensure your
                  business remains compliant at all times.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card className="h-full text-center hover:shadow-md transition-shadow">
                <div className="text-[#1890ff] text-4xl mb-4">
                  <BulbOutlined />
                </div>
                <Title level={4}>Tailored Solutions</Title>
                <Paragraph>
                  Our services are customized to fit your specific business
                  needs, whether you're a startup or an established company.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{ paddingTop: 64, paddingBottom: 64 }}
        className="bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center" }}>
              What Our Clients Say
            </Title>
          </div>

          <div className="hidden md:block fade-in">
            <Row gutter={[24, 24]}>
              {testimonials.map((testimonial, index) => (
                <Col md={8} key={index}>
                  <TestimonialCard {...testimonial} />
                </Col>
              ))}
            </Row>
          </div>

          <div className="md:hidden fade-in">
            <Carousel autoplay dots={{ className: "custom-carousel-dots" }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 py-2">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1890ff] text-white">
        <div className="container mx-auto px-4 text-center">
          <Title level={2} className="text-white mb-6">
            Ready to Transform Your HR Operations?
          </Title>
          <Paragraph className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business with
            tailored HR solutions that drive growth and efficiency.
          </Paragraph>
          <Link href="/contact">
            <Button
              size="large"
              className="bg-white text-[#1890ff] hover:bg-gray-100"
            >
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

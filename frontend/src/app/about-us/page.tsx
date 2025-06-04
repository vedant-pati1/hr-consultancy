"use client";
import React from "react";
import { Row, Col, Card, Space } from "antd";
import {
  TrophyOutlined,
  HeartOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import HeroSection from "@/my-components/HeroSection";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const AboutPage: React.FC = () => {
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

  const values = [
    {
      icon: <TrophyOutlined style={{ fontSize: 32 }} />,
      title: "Excellence",
      description:
        "We strive for excellence in all our services, ensuring the highest quality HR solutions for our clients.",
    },
    {
      icon: <HeartOutlined style={{ fontSize: 32 }} />,
      title: "People-Centric",
      description:
        "We believe that people are at the heart of every successful business, and our solutions reflect this core value.",
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 32 }} />,
      title: "Innovation",
      description:
        "We continually adapt and innovate our HR solutions to meet the evolving needs of modern businesses.",
    },
  ];

  const differentiators = [
    "Flexible services tailored to business needs",
    "Responsive and reliable support",
    "Experienced across various industries",
    "People-centric approach",
    "Attention to detail ensuring compliance",
  ];

  return (
    <div>
      <HeroSection
        title="About HR Remedy"
        subtitle="Learn about our mission, values, and what makes us the preferred HR partner for growing businesses."
        showButtons={false}
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white" style={{ padding: 64 }}>
        <div className="container mx-auto px-4">
          <div className="section-title" style={{ marginBottom: 32 }}>
            <Title level={2} style={{ textAlign: "center" }}>
              Our Story
            </Title>
          </div>

          <Row gutter={[24, 48]} justify="center" align="middle">
            <Col xs={24} md={12} className="fade-in">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-lg shadow-md w-full"
              />
            </Col>

            <Col xs={24} md={12} className="fade-in">
              <Paragraph className="text-lg" style={{ fontSize: 18 }}>
                HR Remedy was founded in 2020 with a clear vision: to provide
                small and medium-sized businesses with access to professional HR
                services typically available only to large corporations.
              </Paragraph>

              <Paragraph className="text-lg mt-4" style={{ fontSize: 18 }}>
                Our founders, with over 20 years of combined experience in human
                resources across various industries, recognized a gap in the
                market. Many growing companies struggled with HR compliance,
                employee management, and building effective workplace cultures
                without dedicated HR departments.
              </Paragraph>

              <Paragraph className="text-lg mt-4" style={{ fontSize: 18 }}>
                Today, we serve clients across India, helping them navigate the
                complex world of human resources with practical, scalable
                solutions that grow with their businesses.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50" style={{ padding: 64 }}>
        <div className="container mx-auto px-4">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12} className="fade-in">
              <Card className="h-full shadow-md">
                <Title level={3}>
                  <span className="text-[#1890ff] mr-2">Our Mission</span>
                </Title>
                <Paragraph className="text-lg" style={{ fontSize: 18 }}>
                  To empower businesses with practical, compliant, and
                  people-centric HR solutions that drive growth and create
                  positive workplace environments.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12} className="fade-in">
              <Card className="h-full shadow-md">
                <Title level={3}>
                  <span className="text-[#1890ff] mr-2">Our Vision</span>
                </Title>
                <Paragraph className="text-lg" style={{ fontSize: 18 }}>
                  To be the most trusted HR partner for growing businesses,
                  known for our expertise, integrity, and commitment to helping
                  organizations and their people thrive.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white" style={{ padding: 64 }}>
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2}>Our Values</Title>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {values.map((value, index) => (
              <Col xs={24} sm={8} key={index} className="fade-in">
                <Card className="text-center h-full hover:shadow-md transition-shadow">
                  <div className="text-[#1890ff] mb-4">{value.icon}</div>
                  <Title level={4}>{value.title}</Title>
                  <Paragraph>{value.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50" style={{ padding: 64 }}>
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
              Why Choose Us
            </Title>
          </div>

          <Row gutter={[24, 48]} justify="center" align="middle">
            <Col xs={24} md={12} lg={10} className="fade-in">
              <img
                // src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                src="/images/four-people-and-desk.jpeg"
                alt="Professional team meeting"
                className="rounded-lg shadow-md w-full"
              />
            </Col>

            <Col xs={24} md={12} lg={14} className="fade-in">
              <Space direction="vertical" size="middle">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleOutlined className="text-[#1890ff] text-lg mt-1 mr-3" />
                    <Paragraph className="text-lg m-0" style={{ fontSize: 18 }}>
                      {item}
                    </Paragraph>
                  </div>
                ))}
              </Space>

              <Paragraph className="text-lg mt-8" style={{ fontSize: 18 }}>
                Our approach combines deep HR expertise with a genuine
                understanding of the challenges faced by growing businesses. We
                don't just provide services; we build partnerships with our
                clients, becoming an extension of their team.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white" style={{ padding: 64 }}>
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ marginBottom: 48, textAlign: "center" }}>
              Our Leadership Team
            </Title>
          </div>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card
                className="text-center h-full hover:shadow-md transition-shadow"
                cover={
                  <img
                    alt="Aarav Sharma"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-64 object-cover"
                  />
                }
              >
                <Title level={4}>Aarav Sharma</Title>
                <Text type="secondary" className="block mb-3">
                  Founder & CEO
                </Text>
                <Paragraph>
                  With 15+ years in HR leadership roles, Aarav brings expertise
                  in strategic HR planning and organizational development.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card
                className="text-center h-full hover:shadow-md transition-shadow"
                cover={
                  <img
                    alt="Priya Patel"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-64 object-cover"
                  />
                }
              >
                <Title level={4}>Priya Patel</Title>
                <Text type="secondary" className="block mb-3">
                  Chief Operations Officer
                </Text>
                <Paragraph>
                  Priya oversees all service delivery, ensuring our clients
                  receive exceptional HR solutions tailored to their needs.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} className="fade-in">
              <Card
                className="text-center h-full hover:shadow-md transition-shadow"
                cover={
                  <img
                    alt="Vikram Singh"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-64 object-cover"
                  />
                }
              >
                <Title level={4}>Vikram Singh</Title>
                <Text type="secondary" className="block mb-3">
                  Head of Compliance
                </Text>
                <Paragraph>
                  Vikram is our compliance expert, staying ahead of regulatory
                  changes to keep our clients fully compliant.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

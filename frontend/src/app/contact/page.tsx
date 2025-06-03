"use client";
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import HeroSection from "@/my-components/HeroSection";
import ContactForm from "@/my-components/ContactForm";
const { Title, Paragraph, Text } = Typography;

const ContactPage: React.FC = () => {
  // const contactInfo = [
  //   {
  //     icon: <PhoneOutlined style={{ fontSize: 24 }} />,
  //     title: "Phone",
  //     details: "+91 9876543210",
  //     action: "tel:+919876543210"
  //   },
  //   {
  //     icon: <MailOutlined style={{ fontSize: 24 }} />,
  //     title: "Email",
  //     details: "info@hrremedy.com",
  //     action: "mailto:info@hrremedy.com"
  //   },
  //   {
  //     icon: <EnvironmentOutlined style={{ fontSize: 24 }} />,
  //     title: "Address",
  //     details: "123 Business Avenue, Corporate Park, Mumbai, India",
  //     action: "https://maps.google.com/?q=Mumbai,India"
  //   },
  //   {
  //     icon: <ClockCircleOutlined style={{ fontSize: 24 }} />,
  //     title: "Business Hours",
  //     details: "Monday - Friday: 9:00 AM - 6:00 PM",
  //     action: null
  //   }
  // ];

  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for any questions or to start your HR transformation journey"
        showButtons={false}
      />

      {/* Contact Information */}
      <section
        className="section-padding bg-white"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2} style={{ textAlign: "center" }}>
              Get In Touch
            </Title>
            <Paragraph
              className="text-center text-gray-600 max-w-3xl mx-auto"
              style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
            >
              Have questions or ready to get started? Our team is here to help.
              Reach out using any of the methods below.
            </Paragraph>
          </div>

          {/* <Row gutter={[24, 24]} className="mb-12">
            {contactInfo.map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <a 
                  href={item.action || "#"} 
                  className={`block ${!item.action ? 'pointer-events-none' : ''}`}
                  target={item.action && !item.action.startsWith('tel:') && !item.action.startsWith('mailto:') ? "_blank" : ""}
                  rel="noopener noreferrer"
                >
                  <Card 
                    className="text-center h-full hover:shadow-md transition-shadow"
                    hoverable={!!item.action}
                  >
                    <div className="text-[#1890ff] mb-4">
                      {item.icon}
                    </div>
                    <Title level={4}>{item.title}</Title>
                    <Text className="block text-gray-600">{item.details}</Text>
                  </Card>
                </a>
              </Col>
            ))}
          </Row> */}

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <ContactForm
                title="Get in touch"
                isRequirementForm={false}
                post_url={`${process.env.BACKEND_URL}/api/form/contact`}
              />
            </Col>

            <Col xs={24} md={12}>
              <ContactForm
                title="Submit Your Requirements"
                isRequirementForm={true}
                post_url={`${process.env.BACKEND_URL}/api/form/requirements`}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <Title level={2}>Our Location</Title>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71790628325991!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1656935214453!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HR Remedy location"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;

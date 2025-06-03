"use client";
import React from "react";
import { Typography, Button, Space } from "antd";
const { Title, Paragraph } = Typography;
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  showButtons = true,
}) => {
  return (
    <div
      className="hero-section p-[100px] "
      style={{
        // backdropFilter: 'linear-gradient(rgba(0, 21, 41, 0.7), rgba(0, 21, 41, 0.7))',
        backgroundImage: `url('/images/hero-section.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <Title
          level={1}
          className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </Title>
        <Paragraph
          className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{
            color: "rgba(255, 255, 255)",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            marginBottom: "2rem",
            maxWidth: "40rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {subtitle}
        </Paragraph>

        {showButtons && (
          <Space size="large" className="mb-4">
            <Link href="/contact">
              <Button type="primary" size="large">
                Contact
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="large"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Our Services
              </Button>
            </Link>
          </Space>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

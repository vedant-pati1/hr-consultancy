import React from "react";
import { Card, Typography } from "antd";
import Link from "next/link";
const { Title, Paragraph } = Typography;

interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Link href="/services\" className="block">
      <Card variant="outlined" className="service-card h-full" hoverable>
        <div className="text-center mb-4 text-[#1890ff]">{icon}</div>
        <Title level={4} className="text-center mb-4">
          {title}
        </Title>
        <ul className="pl-5">
          {description.map((item, index) => (
            <li key={index} className="mb-2">
              <Paragraph>{item}</Paragraph>
            </li>
          ))}
        </ul>
      </Card>
    </Link>
  );
};

export default ServiceCard;

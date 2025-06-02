import React from 'react';
import { Card, Typography, Rate, Avatar } from 'antd';

const { Text, Paragraph } = Typography;

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  rating,
  avatar,
}) => {
  return (
    <Card className="testimonial-card h-full">
      <div className="flex flex-col h-full">
        <Rate disabled defaultValue={rating} className="mb-4" />
        <Paragraph className="italic mb-4 flex-grow">"{content}"</Paragraph>
        <div className="flex items-center mt-auto">
          <Avatar 
            size={50} 
            src={avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${name}`} 
            className="mr-3" 
            style={{marginRight: 12}}
          />
          <div>
            <Text strong className="block">{name}</Text>
            <Text type="secondary">{role}, {company}</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
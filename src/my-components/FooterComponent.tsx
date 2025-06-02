import React from 'react';
import {Row, Col, Space, Divider } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import Link from 'next/link';
import { 
  LinkedinOutlined, 
  FacebookOutlined, 
  InstagramOutlined, 
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';

const FooterComponent: React.FC = () => {
  return (
    <Footer className="bg-gray-800 text-white pt-12 pb-6" style={{backgroundColor: '#1a202c', color: '#cbd5e0'}}>
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Title level={4} className="text-white mb-4" style={{color:'white'}}>HR Remedy</Title>
            <Text className="text-gray-300 block mb-4"style={{color:'white'}}>
              Empower your people. Simplify your HR. Let us handle your HR functions professionally so you can focus on what you do best—leading and growing your business.
            </Text>
            <Space size="middle">
              <a style={{color:'white'}} href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <LinkedinOutlined className="text-2xl" />
              </a>
              <a style={{color:'white'}} href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FacebookOutlined className="text-2xl" />
              </a>
              <a style={{color:'white'}} href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <InstagramOutlined className="text-2xl" />
              </a>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={8}>
            <Title level={4} className="text-white mb-4" style={{color:'white'}}>Quick Links</Title>
            <ul className="space-y-2 p-0 list-none">
              <li>
                <Link href="/" style={{color:'white'}} >Home</Link>
              </li>
              <li>
                <Link href="/about" style={{color:'white '}} className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/services" style={{color:'white'}} className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/blog" style={{color:'white'}} className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/contact" style={{color:'white'}} className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" style={{color:'white'}} className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={8}>
            <Title level={4} className="text-white mb-4" style={{color:'white'}}>Contact Info</Title>
            <ul className="space-y-3 p-0 list-none">
              <li className="flex items-start">
                <EnvironmentOutlined className="mt-1 mr-2 text-gray-300" />
                <Text className="text-gray-300"style={{color:'white'}} >
                  123 Business Avenue, Corporate Park, Mumbai, India
                </Text>
              </li>
              <li className="flex items-center">
                <PhoneOutlined className="mr-2 text-gray-300" />
                <Text className="text-gray-300" style={{color:'white'}}>+91 9876543210</Text>
              </li>
              <li className="flex items-center">
                <MailOutlined className="mr-2 text-gray-300"  />
                <Text className="text-gray-300" style={{color:'white'}}>info@hrremedy.com</Text>
              </li>
            </ul>
          </Col>
        </Row>
        
        <Divider className="bg-gray-600 my-6" />
        
        <Row>
          <Col span={24} className="text-center">
            <Text className="text-gray-400" style={{color:'white'}}>
              &copy; {new Date().getFullYear()} HR Remedy. All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
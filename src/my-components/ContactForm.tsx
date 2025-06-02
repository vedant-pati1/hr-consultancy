"use client";
import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  BankOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

// const { Option } = Select;
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

interface ContactFormProps {
  title?: string;
  isRequirementForm?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get in Touch",
  isRequirementForm = false,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success(
      "Thank you for your submission! We will get back to you shortly.",
    );
    form.resetFields();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Title level={3} className="mb-6 text-center">
        {title}
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email Address" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
        </Form.Item>

        {isRequirementForm ? (
          <>
            <Form.Item
              name="company"
              label="Organization Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your organization name",
                },
              ]}
            >
              <Input
                prefix={<BankOutlined />}
                placeholder="Organization Name"
              />
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[
                { required: true, message: "Please enter your location" },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined />}
                placeholder="City, State"
              />
            </Form.Item>

            <Form.Item
              name="requirements"
              label="Candidate Requirements"
              rules={[
                {
                  required: true,
                  message: "Please describe your requirements",
                },
              ]}
            >
              <TextArea
                placeholder="Please describe your candidate requirements in detail..."
                rows={4}
              />
            </Form.Item>

            <Form.Item
              name="service"
              label="Services Required"
              rules={[
                {
                  required: true,
                  message: "Please select at least one service",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select required services"
                optionLabelProp="label"
              >
                <Select.Option value="payroll" label="Payroll Management">
                  Payroll Management
                </Select.Option>
                <Select.Option value="compliance" label="Compliance Management">
                  Compliance Management
                </Select.Option>
                <Select.Option value="policy" label="HR Policy Development">
                  HR Policy Development
                </Select.Option>
                <Select.Option value="recruitment" label="Recruitment Services">
                  Recruitment Services
                </Select.Option>
                <Select.Option
                  value="verification"
                  label="Background Verification"
                >
                  Background Verification
                </Select.Option>
                <Select.Option value="orientation" label="Orientation Program">
                  Orientation Program
                </Select.Option>
              </Select>
            </Form.Item>
          </>
        ) : (
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea placeholder="How can we help you?" rows={4} />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            {isRequirementForm ? "Submit Requirements" : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;

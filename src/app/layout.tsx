import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Breadcrumb from "antd/es/breadcrumb";
import Menu from "antd/es/menu";
import { Button } from "antd";
import Link from "next/link";
import Footer from "@/my-components/FooterComponent";

export const metadata: Metadata = {
  title: "HR Consultancy",
  description: "HR Consultancy - Your Partner in Human Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    { label: "Home", key: "/home" },
    { label: "About Us", key: "/about-us" },
    { label: "Services", key: "/services" },
    { label: "Contact", key: "/contact" },
  ];
  return (
    <html lang="en">
      <body
        style={{
          overflow: "visible",
        }}
      >
        <AntdRegistry>
          <Layout>
            <Header
              style={{
                background: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <div className="demo-logo" /> */}
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                items={items.map((item) => ({
                  key: item.key,
                  label: <Link href={item.key}>{item.label}</Link>,
                }))}
                className="flex justify-center flex-1"
              />
              <Button type="primary">Get started</Button>
            </Header>
            <Content className="height-full">{children}</Content>
            <Footer />
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}

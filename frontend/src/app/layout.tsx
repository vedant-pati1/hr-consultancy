import "./globals.css";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout, { Content } from "antd/es/layout/layout";
import Footer from "@/my-components/FooterComponent";
import Header from "@/my-components/HeaderComponent";

export const metadata: Metadata = {
  title: "HR Consultancy",
  description: "HR Consultancy - Your Partner in Human Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          overflow: "visible",
        }}
      >
        <AntdRegistry>
          <Layout>
            <Header />
            {/* Main content area */}
            <Content className="height-full">{children}</Content>
            <Footer />
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}

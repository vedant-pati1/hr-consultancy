"use client";
import { Header } from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import { Button, Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  function showDrawer() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  const items = [
    { label: "Home", key: "/home" },
    { label: "About Us", key: "/about-us" },
    { label: "Services", key: "/services" },
    { label: "Contact", key: "/contact" },
  ];
  return (
    <>
      <Header
        style={{
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-800">HR Remedy</span>
        </Link>

        <div className="hidden md:block">
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
        </div>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button type="primary">Contact Us</Button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="flex items-center justify-center"
          />
        </div>
      </Header>
      {/* Mobile Drawer Navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width={280}
        footer={
          <Space className="w-full flex justify-center">
            <Link href="/contact" onClick={onClose}>
              <Button type="primary" block>
                Get Started
              </Button>
            </Link>
          </Space>
        }
      >
        <Menu
          mode="vertical"
          items={items.map((item) => ({
            key: item.key,
            label: (
              <Link href={item.key} onClick={onClose}>
                {item.label}
              </Link>
            ),
          }))}
        />
      </Drawer>
    </>
  );
};
export default HeaderComponent;

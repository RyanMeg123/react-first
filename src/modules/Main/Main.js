import { Layout, Menu, Breadcrumb } from "antd";
import "./Main.scss";
import React, { useState, useEffect } from "react";

const { Header, Content, Footer } = Layout;

const LayoutMain = () => {
  const [templateContent, setTemplate] = useState(null);
  const menuChange = ({ item, key, keyPath, domEvent }) => {
    console.log(key, "key");
    setTemplate(template[Number(key - 1)]);
  };
  let template = ["这是nav1", "这是nav2", "这是nav3"];
  useEffect(() => {
    // setTemplate(template[0]);
    
  });
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          onClick={menuChange}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {templateContent}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default LayoutMain;

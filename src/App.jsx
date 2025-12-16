import React from "react";
import { Layout, Image } from "antd";
import LogoAdmin from "./assets/admin-panel-logo.png";

const { Header, Sider, Content } = Layout;


function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#001529",
          padding: "0 20px",
        }}
      >
        <Image src={LogoAdmin} width={50} height={50} preview={false} />
      </Header>
      <Layout>
        <Sider style={{ backgroundColor: "#001529", color: "white" }}>
          Left Sider
        </Sider>
        <Content style={{ padding: "20px" }}>Main Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;

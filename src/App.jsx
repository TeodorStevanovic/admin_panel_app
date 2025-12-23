import React, { useState } from "react";
import { Layout, Image, Menu } from "antd";
import LogoAdmin from "./assets/admin-panel-logo.png";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";

const { Header, Sider, Content } = Layout;
const items = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Users",
  },
  {
    key: "3",
    label: "Settings",
  },
];

const renderContent = (key) => {
  switch (key) {
    case "1":
      return <Dashboard />;

    case "2":
      return <Users />;

    case "3":
      return <div>Settings Content</div>;

    default:
      return <div>Default Content</div>;
  }
};

function App() {
  const [selectItem, setSelectItem] = useState("1");

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
          <Menu
            onClick={(e) => setSelectItem(e.key)}
            selectedKeys={[selectItem]}
            mode="inline"
            theme="dark"
            items={items}
          />
        </Sider>
        <Content style={{ padding: "20px" }}>
          {renderContent(selectItem)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

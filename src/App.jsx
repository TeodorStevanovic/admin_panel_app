import React, { useState, useEffect } from "react";
import { Layout, Image, Menu } from "antd";
import LogoAdmin from "./assets/admin-panel-logo.png";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

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

function App() {
  const [selectItem, setSelectItem] = useState("1");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          localStorage.setItem("users", JSON.stringify(data));
        });
    }
  }, []);

  const renderContent = (key) => {
    switch (key) {
      case "1":
        return <Dashboard users={users} />;
      case "2":
        return (
          <Users dataSource={users} setDataSource={setUsers} theme={theme} />
        );

      case "3":
        return <Settings theme={theme} setTheme={setTheme} />;

      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
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
        <Content
          style={{
            padding: "20px",
            backgroundColor: theme === "dark" ? "#001529" : "#fff",
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          {renderContent(selectItem)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

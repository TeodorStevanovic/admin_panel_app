import React from "react";
import { Switch, Col, Row } from "antd";

const Settings = ({ theme, setTheme }) => {
  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Theme :</h1>
      <Row>
        <Col span={24}>
          <Switch onChange={changeTheme} />
        </Col>
      </Row>
    </div>
  );
};

export default Settings;

import React from "react";
import { Row, Card, Col, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Dashboard = ({ users }) => {
  const activeUsers = users.filter((user) => user.id % 2 === 0).length;
  const inactiveUsers = users.length - activeUsers;
  return (
    <>
      <Row>
        <Col span={8}>
          <Card>
            <UserOutlined />
            <Statistic title="Total Users:" value={users.length} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Users:" value={activeUsers} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Inactive Users:" value={inactiveUsers} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

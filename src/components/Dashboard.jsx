import React from "react";
import { Row, Card, Col, Statistic } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ users }) => {
  const activeUsers = users.filter((user) => user.id % 2 === 0).length;
  const inactiveUsers = users.length - activeUsers;
  const data = [
    { name: "Active Users", value: activeUsers },
    { name: "Inactive Users", value: inactiveUsers },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "90vh" }}
    >
      <Row>
        <Col span={8}>
          <Card>
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
      <Row style={{ marginTop: "auto", paddingTop: 20}}>
        <Col span={24}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1890ff" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

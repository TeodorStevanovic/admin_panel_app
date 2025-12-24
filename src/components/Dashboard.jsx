import React from "react";
import { Row, Card, Col, Statistic } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <Card>
            <UserOutlined />
            <Statistic title="Total Users:" value="10" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Users:" value="5" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Inactive Users:" value="5" />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

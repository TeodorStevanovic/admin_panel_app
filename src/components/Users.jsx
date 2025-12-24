import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const Users = ({ dataSource, setDataSource }) => {
  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setDataSource((prev) => [
          ...prev,
          {
            id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
            name: values.name,
            email: values.email,
            address: {
              city: values.address.city,
            },
          },
        ]);
        setModal(false);
        form.resetFields();
      })
      .catch(() => {});
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
      <Button type="primary" onClick={showModal}>
        <UserAddOutlined />
      </Button>
      <Modal
        title="Basic Modal"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="Name:"
            name="name"
            rules={[{ required: true, message: "Please input name." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input age." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name={["address", "city"]}
            rules={[{ required: true, message: "Please input address." }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Users;

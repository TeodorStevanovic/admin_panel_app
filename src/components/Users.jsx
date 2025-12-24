import React, { useState } from "react";
import { Button, Modal, Form, Table, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const Users = () => {
  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Teodor",
      age: 23,
      address: "Profesora Rasulica",
    },
    {
      key: "2",
      name: "Milan",
      age: 54,
      address: "Velizara Kosanovica",
    },
  ]);

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
            key: prev.length > 0 ? prev[prev.length - 1].key + 1 : 1,
            name: values.name,
            age: values.age,
            address: values.address,
          },
        ]);
        setModal(false);
        form.resetFields();
      })
      .catch(() => {});
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
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
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input age." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
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

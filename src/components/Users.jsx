import React from "react";
import { Table } from "antd";

const Users = () => {
  const dataSource = [
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
  ];

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

  return <Table dataSource={dataSource} columns={columns}/>
};

export default Users;

import { Typography } from "antd";
import React, { useState } from "react";
import { Space, Table, Tag, Divider } from "antd";
import "./DashboardPage.css";
import { Button, Popover } from "antd";
import db from "../../../../db.json";
import {
  ClockCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  EllipsisOutlined,
  CheckCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Column } = Table;

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});

  const hide = (key) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleOpenChange = (key, newOpen) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [key]: newOpen,
    }));
  };

  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["Approved"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["Pending"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Denied"],
    },
    {
      key: "4",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Pending"],
    },
    {
      key: "5",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Denied"],
    },
    {
      key: "6",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Approved"],
    },
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case "Approved":
        return "green";
      case "Pending":
        return "orange";
      case "Denied":
        return "red";
      default:
        return "orange";
    }
  };

  const getTagIcon = (tag) => {
    switch (tag) {
      case "Approved":
        return <CheckCircleOutlined />;
      case "Pending":
        return <SyncOutlined />;
      case "Denied":
        return <CloseCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <Table dataSource={data} className="table-container">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Status"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag) => (
              <Tag color={getTagColor(tag)} key={tag} icon={getTagIcon(tag)}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title=""
        key="school"
        render={(_, record) => (
          // <Button type="link" style={{color: "black"}}>
          //   <a>
          //     <MoreOutlined />
          //   </a>
          // </Button>

          // <Popover
          //   content={<a onClick={hide}>Close</a>}
          //   title="Title"
          //   trigger="click"
          //   open={open}
          //   onOpenChange={handleOpenChange}
          // >
          //   <Button type="primary">Click me</Button>
          // </Popover>

          <Popover
            content={
              <>
            <a onClick={() => hide(record.key)}>Accept</a>
            <Divider type="vertical" />
            <a>Delete</a>
            </>
          }
            title="Options"
            trigger="click"
            open={openStates[record.key]}
            onOpenChange={(newOpen) => handleOpenChange(record.key, newOpen)}
          >
            <Button type="link" style={{ color: "black" }}>
              <a>
                <MoreOutlined />
              </a>
            </Button>
          </Popover>
        )}
      />
    </Table>
  );
};

export default DashboardPage;

import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Divider } from "antd";
import "./DashboardPage.css";
import { Button, Popover } from "antd";
import db from "../../../../db.json";
import {
  SyncOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { duration } from "@mui/material";

const { Column } = Table;

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = new Headers();
      const token =
        "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5MzEzOTY1fQ.ed15INnN1kHgvknRh7EzAuXvQRET3fEn0yx5ZEPR0GP6UP9sY9ljWJAhU4YeBPQExx12jO_br4Q7uDVxrDXzzg";
      headers.append("Authorization", `${token}`);
      const response = await fetch(
        "https://alumniproject.azurewebsites.net/admin/api/schools?pageNo=1&pageSize=10",
        {
          method: "GET",
          headers: headers,
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData.items);
        setDataSource(jsonData.items);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  //
  const getTagColor = (tag) => {
    switch (tag) {
      case 0:
        return "green";
      case 1:
        return "orange";
      case 2:
        return "red";
      default:
        return "orange";
    }
  };

  const getTagIcon = (tag) => {
    switch (tag) {
      case 0:
        return <CheckCircleOutlined />;
      case 1:
        return <SyncOutlined />;
      case 2:
        return <CloseCircleOutlined />;
      default:
        return <SyncOutlined />;
    }
  };

  const getTagName = (tag) => {
    switch (tag) {
      case 0:
        return "Approved";
      case 1:
        return "Pending";
      case 2:
        return "Denied";
      default:
        return "Pending";
    }
  };

  const hide = (key) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleOpenChange = (key, newOpen) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [key]: newOpen,
    }));
  };

  return (
    <Table dataSource={dataSource} className="table-container">
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Sub Domain"
        dataIndex="subDomain"
        key="subDomain"
        render={(subDomain) => <a href={subDomain}>{subDomain}</a>}
      />
      <Column title="Province" dataIndex="provinceName" key="provinceName" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Duration"
        dataIndex="duration"
        key="duration"
        render={(duration) => <>{duration} months</>}
      />
      <Column
        title="Status"
        dataIndex="requestStatus"
        key="requestStatus"
        render={(status) => (
          <Tag color={getTagColor(status)} icon={getTagIcon(status)}>
            {getTagName(status)}
          </Tag>
        )}
      />
      <Column
  title=""
  key="school"
  render={(_, record) => (
    <Popover
      content={
        <>
          <a onClick={() => hide(record.key)}>Accept</a>
          <Divider type="vertical" />
          <a>Deny</a>
        </>
      }
      title="Options"
      trigger="click"
      visible={visible[record.key]}
      onVisibleChange={(newVisible) =>
        handleOpenChange(record.key, newVisible)
      }
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

import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import "./DashboardPage.css";
import { Button, Popover } from "antd";
import {
  SyncOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { updateRequestStatus } from './schoolService';

const { Column } = Table;

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchoolId, setSelectedSchoolId] = useState(3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = new Headers();
      const token =
        "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5ODM2MDE0fQ.YCDJ3t4VTRAeo8-lMK919IBPG_SsDYjUDmZUFHavitibqnfIPsqqpQZfVAQTxMPYd-BsaA62ec76DoLJmmM5eA";
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

  const handleAccept = async (record) => {
    try {
      const { id } = record;
      const approve = 2;
      await updateRequestStatus({id, approve}); 
    } catch (error) {
     
    }
  };
  
  const handleDeny = async (record) => {
    try {
      const { id } = record;
      const deny = 3;
      await updateRequestStatus({id, deny}); 
    } catch (error) {
    }
  };
  

  //
  const getTagColor = (tag) => {
    switch (tag) {
      case 1:
        return "orange";
      case 2:
        return "green";
      case 3:
        return "red";
      default:
        return "orange";
    }
  };

  const getTagIcon = (tag) => {
    switch (tag) {
      case 1:
        return <SyncOutlined />;
      case 2:
        return <CheckCircleOutlined />;
      case 3:
        return <CloseCircleOutlined />;
      default:
        return <SyncOutlined />;
    }
  };

  const getTagName = (tag) => {
    switch (tag) {
      case 1:
        return "Pending";
      case 2:
        return "Approved";
      case 3:
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
                {/* <a onClick={() => hide(record.key) }>Accept</a>
          <Divider type="vertical" />
          <a>Deny</a> */}
                <div>
                  <Button onClick={() => handleAccept(record)}>Accept</Button>
                  <Button onClick={() => handleDeny(record)}>Deny</Button>
                </div>
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

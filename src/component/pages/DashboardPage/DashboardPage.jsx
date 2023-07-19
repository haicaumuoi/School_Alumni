import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import "./DashboardPage.css";
import { Button, Popover } from "antd";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import {
  SyncOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { updateRequestStatus } from "./schoolService";
import { getSchoolCount } from "./countSchoolService";

const { Column } = Table;
const formatter = (value) => <CountUp end={value} separator="," />;
const formatterSchool = (value) => `${value} schools`;

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchoolId, setSelectedSchoolId] = useState(3);
  const [schoolCount, setSchoolCount] = useState(0);

  useEffect(() => {
    fetchDataTable();
    // fetchDataCount();
    const fetchSchoolCount = async () => {
      const count = await getSchoolCount();
      if (count !== null) {
        setSchoolCount(count);
      }
    };
    fetchSchoolCount();
  }, []);

  const token = import.meta.env.VITE_BEARER_TOKEN;

  const fetchDataTable = async () => {
    try {
      const headers = new Headers();

      // const token = "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5ODM2MDE0fQ.YCDJ3t4VTRAeo8-lMK919IBPG_SsDYjUDmZUFHavitibqnfIPsqqpQZfVAQTxMPYd-BsaA62ec76DoLJmmM5eA"
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

  // const fetchDataCount = async () => {
  //   try {
  //     const headers = new Headers();
  //     // const token = import.meta.env.VITE_BEARER_TOKEN;
  //     headers.append("Authorization", `${token}`);
  //     const response = await fetch(
  //       "https://alumniproject.azurewebsites.net/admin/api/schools/count?from=2023-01-01&to=2023-12-31",
  //       {
  //         method: "GET",
  //         headers: headers,
  //       }
  //     );

  //     if (response.ok) {
  //       const jsonData = await response.json();
  //       console.log(jsonData.items);
  //       setDataSource(jsonData.items);
  //     } else {
  //       console.error("Error:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const handleApprove = async (record) => {
    try {
      const { id } = record;
      const approve = 2;
      await updateRequestStatus({ id, approve });
    } catch (error) {}
  };

  const handleDeny = async (record) => {
    try {
      const { id } = record;
      const deny = 3;
      await updateRequestStatus({ id, deny });
    } catch (error) {}
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
    <div className="school-table">
      <Table dataSource={dataSource} className="table-container">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Mail" dataIndex="hostEmail" key="mail" />
        {/* <Column
        title="Sub Domain"
        dataIndex="subDomain"
        key="subDomain"
        render={(subDomain) => <a href={subDomain}>{subDomain}</a>}
      /> */}

        <Column
          title="Sub Domain"
          dataIndex="subDomain"
          key="subDomain"
          render={(subDomain) => (
            <span
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => {
                const domainStartIndex = subDomain.indexOf("//") + 1;
                const domainEndIndex = subDomain.indexOf("/", domainStartIndex);
                const domain =
                  domainEndIndex === -1
                    ? subDomain.slice(domainStartIndex)
                    : subDomain.slice(domainStartIndex, domainEndIndex);
                window.open(
                  `https://${domain}`,
                  "_blank",
                  "noopener noreferrer"
                );
              }}
            >
              {subDomain}
            </span>
          )}
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
                    <Button onClick={() => handleApprove(record)}>Approve</Button>
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
      <Row gutter={16} className="container">
        <Col span={12}>
          {/* <Statistic title="Active Schools" className="active-schools" value={5} formatter={formatter}  /> */}
          <Statistic
            title="Active Schools"
            className="active-schools"
            value={schoolCount}
            formatter={formatterSchool}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Statistics"
            className="statistics-one"
            value={10}
            precision={2}
            formatter={formatter}
          />
          June
          <Statistic
            value={20}
            className="statistics-two"
            precision={2}
            formatter={formatter}
          />
          July
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;

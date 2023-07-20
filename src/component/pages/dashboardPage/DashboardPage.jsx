import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import "./DashboardPage.css";
import { Button, Popover } from "antd";
import { Col, Row, Statistic } from "antd";
import axios from "axios";
import Chart from "chart.js/auto";
import {
  SyncOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { updateRequestStatus } from "./schoolService";

const { Column } = Table;
const BASE_URL_STATISTIC =
  "https://alumniproject.azurewebsites.net/admin/api/schools/statistics?from=2023-01-01&to=2023-12-31";

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSchoolId, setSelectedSchoolId] = useState(3);
  const [schoolCount, setSchoolCount] = useState(0);
  const [schoolCountStatus1, setSchoolCountStatus1] = useState(0);
  const [schoolCountStatus2, setSchoolCountStatus2] = useState(0);
  const [schoolCountStatus3, setSchoolCountStatus3] = useState(0);
  const [statisticsData, setStatisticsData] = useState({});

  const formatterSchool = (valueAll) => `${valueAll} Schools`;

  useEffect(() => {
    fetchSchoolDataTable();
    fetchSchoolStatistic();
    fetchSchoolCount();
    fetchSchoolCountByStatus1();
    fetchSchoolCountByStatus2();
    fetchSchoolCountByStatus3();
    setLoading(false);
  }, []);

  // const token = import.meta.env.VITE_BEARER_TOKEN;

  const token =
    "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5OTE4MTA0fQ.Bt3mQBvF0BBTjkE8QoQOOFN-ZLS1AT_0wVS0HIgXQQdapHoADTtL5DkaQWxIhu4VSdNGeo0g0yQP0uu2sZGf0Q";

  const fetchSchoolDataTable = async () => {
    try {
      const headers = new Headers();
      // const token = "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5ODM2MDE0fQ.YCDJ3t4VTRAeo8-lMK919IBPG_SsDYjUDmZUFHavitibqnfIPsqqpQZfVAQTxMPYd-BsaA62ec76DoLJmmM5eA"
      headers.append("Authorization", `${token}`);
      const response = await fetch(
        "https://alumniproject.azurewebsites.net/admin/api/schools?pageNo=1&pageSize=20",
        {
          method: "GET",
          headers: headers,
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        // console.log(jsonData.items);
        setDataSource(jsonData.items);
        setLoading(false);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
     
    }
  };

  const fetchSchoolCount = async () => {
    axios
      .get(
        "https://alumniproject.azurewebsites.net/admin/api/schools/count?from=2023-01-01&to=2023-12-31"
      )
      .then((response) => {
        // Update the school count in the state
        setSchoolCount(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching school count:", error);
      });
  };

  const fetchSchoolCountByStatus1 = async () => {
    axios
      .get(
        "https://alumniproject.azurewebsites.net/admin/api/schools/count/status?from=2023-01-01&to=2023-12-31&status=1"
      )
      .then((response) => {
        // Update the school count in the state
        setSchoolCountStatus1(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching school count:", error);
      });
  };

  const fetchSchoolCountByStatus2 = async () => {
    axios
      .get(
        "https://alumniproject.azurewebsites.net/admin/api/schools/count/status?from=2023-01-01&to=2023-12-31&status=2"
      )
      .then((response) => {
        // Update the school count in the state
        setSchoolCountStatus2(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching school count:", error);
      });
  };

  const fetchSchoolCountByStatus3 = async () => {
    axios
      .get(
        "https://alumniproject.azurewebsites.net/admin/api/schools/count/status?from=2023-01-01&to=2023-12-31&status=3"
      )
      .then((response) => {
        // Update the school count in the state
        setSchoolCountStatus3(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching school count:", error);
      });
  };

  const fetchSchoolStatistic = async () => {
    try {
      const headers = new Headers();
      headers.append("Authorization", `${token}`);
      headers.append("Content-Type", "application/json");
      const response = await fetch(`${BASE_URL_STATISTIC}`, {
        method: "GET",
        headers: headers,
      }); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(response);
      setStatisticsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle the error here or show an error message to the user.
    }
  };

  const ChartComponent = ({ statisticsData }) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const labels = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          const dataArr = labels.map(
            (month, index) => statisticsData[index + 1] || 0
          );

          const ctx = document.getElementById("myChart");
          new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "# of Schools from 01-01-2023 to 31-12-2023",
                  data: dataArr,
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [statisticsData]);

    return <canvas id="myChart" width="400" height="200"></canvas>;
  };

  const handleApprove = async (record) => {
    try {
      const { id } = record;
      const approve = 2;
      await updateRequestStatus({ id, requestStatus: approve });
    } catch (error) {}
  };

  const handleDeny = async (record) => {
    try {
      const { id } = record;
      const deny = 3;
      await updateRequestStatus({ id, requestStatus: deny });
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
                    <Button onClick={() => handleApprove(record)}>
                      Approve
                    </Button>
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
        <Col span={3} className="column-count-all">
          <Statistic
            title="All Schools"
            className="active-schools"
            value={schoolCount}
            formatter={formatterSchool}
          />
        </Col>
        <Col span={3} className="column-count">
          <Statistic
            title="Schools Pending"
            className="active-schools"
            value={schoolCountStatus1}
            formatter={formatterSchool}
          />
        </Col>
        <Col span={3} className="column-count">
          <Statistic
            title="Schools Approved"
            className="active-schools"
            value={schoolCountStatus2}
            formatter={formatterSchool}
          />
        </Col>
        <Col span={3} className="column-count">
          <Statistic
            title="Schools Denied"
            className="active-schools"
            value={schoolCountStatus3}
            formatter={formatterSchool}
          />
        </Col>
        <div className="chart-statistic">
          <ChartComponent statisticsData={statisticsData} />
        </div>
      </Row>
    </div>
  );
};

export default DashboardPage;

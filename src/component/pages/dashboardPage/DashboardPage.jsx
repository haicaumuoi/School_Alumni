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

const { Column } = Table;

const DashboardPage = () => {
  const [openStates, setOpenStates] = useState({});
  // const [columns, setColumns] = useState([
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //   }
  // ]);
  // const [dataSource, setDataSource] = useState([]);


  // useEffect(() => {
  //   fetch('http://localhost:3000/schools')
  //   .then(res => res.json())
  //   .then((result) => {
  //     setDataSource(result.schools);
  //   });
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/school");
  //     const json = await response.json();
  //     setData(json.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const [column, setColumn] = useState([])
  // const [records, setRecords] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/school')
  //   .then(res => res.json())
  //   .then(data => {
  //     setColumn(Object.keys(data.data[0]))
  //     setRecords(data.data)
  //   })
  // })

  const data = [
    {
      key: "1",
      name: "Trần Kim Đạt",
      subDomain: "http://thptthixaquangtri.quangtri.edu.vn/",
      provinceName: "Quảng Trị",
      address: "Hải Phú, Hải Lăng, Quảng Trị",
      tags: ["Approved"],
      duration: 3 + " months",
    },
    {
      key: "2",
      name: "Nguyễn Vũ Hải Anh",
      subDomain: "https://fpt.edu.vn/",
      provinceName: "Hải Phòng",
      address: "Phạm Văn Chiều, Gò Vấp, TP.HCM",
      tags: ["Pending"],
      duration: 6 + " months",
    },
    {
      key: "3",
      name: "Joe",
      subDomain: "Black",
      provinceName: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Denied"],
      duration: 3,
    },
    {
      key: "4",
      name: "Joe",
      subDomain: "Black",
      provinceName: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Pending"],
      duration: 3,
    },
    {
      key: "5",
      name: "Joe",
      subDomain: "Black",
      provinceName: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Denied"],
      duration: 3,
    },
    {
      key: "6",
      name: "Joe",
      subDomain: "Black",
      provinceName: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Approved"],
      duration: 3,
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
        return <SyncOutlined />;
    }
  };

  // const [openStates, setOpenStates] = useState({});

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

    return (
      <div>
      <Table columns={columns} dataSource={data} className="table-container">
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Sub Domain"
          dataIndex="subDomain"
          key="subDomain"
          render={(subDomain) => <a href={subDomain}>{subDomain}</a>}
        />
        <Column title="Province" dataIndex="provinceName" key="provinceName" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Duration" dataIndex="duration" key="duration" />
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
      </div>
    );
  };
};

export default DashboardPage;

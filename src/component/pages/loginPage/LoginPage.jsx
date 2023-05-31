import React, { useState } from "react";
import "./LoginPage.css";
import { Button, Form, Input, Typography, Space, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined
} from "@ant-design/icons";
import {
  googleSignIn,
  facebookSignIn,
} from "../../utilities/firebase/firebase";

const LoginPage = () => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  
  return (
    <div className="appBg">
      <Form className="loginForm">
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item label="Email" name={"myEmail"}>
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item label="Password" name={"myPassword"}>
          <Input placeholder="Enter your password" />
        </Form.Item>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
          block
        >
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined
            className="socialIcon"
            onClick={() => {
              googleSignIn();
              addNotification("success", "", "success message");
            }}
          />
          <FacebookOutlined
            className="socialIcon"
            onClick={() => {
              facebookSignIn();
              addNotification("success", "", "success message");
            }}
          />
          {/* <TwitterOutlined className='socialIcon'/> */}
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

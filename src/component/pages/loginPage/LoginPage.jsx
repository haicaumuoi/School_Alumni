import React, { useState } from "react";
import "./LoginPage.css";
import { Button, Form, Input, Typography, Space, Divider, message } from "antd";
import {
  GoogleCircleFilled,
  FacebookFilled,
} from "@ant-design/icons";
import {
  googleSignIn,
  facebookSignIn,
} from "../../utilities/firebase/firebase";
import ErrorPage from "../errorPage/ErrorPage";

const LoginPage = () => {
  const [loadings, setLoadings] = useState([]);
  const authenticated = false;

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

  if (authenticated) {
    return <ErrorPage isAuthenticated={authenticated} />;
  }

  
  return (
    <div className="loginBg">
      <Form className="loginForm">
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item rules={[
            {
                required: true,
                type: "email",
                message: "Please enter valid email",
            }

        ]}
        label="Email" name={"myEmail"}>
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item rules={[
            {
                required: true,
                message: "Please enter your password"
            }

        ]}label="Password" name={"myPassword"}>
          <Input.Password placeholder="Enter your password" />
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
          <GoogleCircleFilled
            className="socialIcon-google"
            onClick={() => {
              googleSignIn();
              addNotification("success", "", "success message");
            }}
          />
          <FacebookFilled
            className="socialIcon-facebook"
            onClick={() => {
              facebookSignIn();
              addNotification("success", "", "success message");
            }}
            style={{color: "blue"}}
          />
          {/* <TwitterOutlined className='socialIcon'/> */}
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

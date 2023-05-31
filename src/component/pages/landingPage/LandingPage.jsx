import React, { useEffect } from "react";
import { addNotification } from "../../utilities/commonServices/CommonService";
import { Button, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../redux/slices/darkModeSlice";
import { green } from "@ant-design/colors";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../errorPage/ErrorPage";
import LoginPage from "../loginPage/LoginPage";
import {
  googleSignIn,
  facebookSignIn,
} from "../../utilities/firebase/firebase";

const LandingPage = () => {
  const authenticated = false;
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  if (authenticated) {
    return <ErrorPage isAuthenticated={authenticated} />;
  }
  return (
    <Space
      style={{
        width: "inherit",
        height: "inherit",
        backgroundColor: isDarkMode ? "#000" : "#fff",
      }}
    >
      <Typography color="green-5">
        <Typography.Title level={2}>Landing Page</Typography.Title>
      </Typography>
      <Button
        onClick={() => {
          addNotification("success", "", "success message");
        }}
      >
        prompt
      </Button>
      <Button onClick={handleToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      <Button onClick={() => googleSignIn()}>Sign in with google</Button>
      <Button onClick={() => facebookSignIn()}>Sign in with facebook</Button>
    </Space>

    // <LoginPage />
  );
};

export default LandingPage;

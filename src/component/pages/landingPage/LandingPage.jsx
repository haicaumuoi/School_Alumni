import React, { useEffect } from "react";
import "./LandingPage.css"
import Home from "./Components/Home";


const LandingPage = () => {
  return (
    // <Space
    //   style={{
    //     width: "inherit",
    //     height: "inherit",
    //     backgroundColor: isDarkMode ? "#000" : "#fff",
    //   }}
    // >
    //   <Typography color="green-5">
    //     <Typography.Title level={2}>Landing Page</Typography.Title>
    //   </Typography>
    //   <Button
    //     onClick={() => {
    //       addNotification("success", "", "success message");
    //     }}
    //   >
    //     prompt
    //   </Button>
    //   <Button onClick={handleToggleDarkMode}>
    //     {isDarkMode ? "Light Mode" : "Dark Mode"}
    //   </Button>
    //   <Button onClick={() => googleSignIn()}>Sign in with google</Button>
    //   <Button onClick={() => facebookSignIn()}>Sign in with facebook</Button>
    // </Space>

    <div className="landingPage">
        <Home/>
    </div>
    
  );
};

export default LandingPage;

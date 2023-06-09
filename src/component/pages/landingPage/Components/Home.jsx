import React from "react";
import BannerBackground from "../Assets/fpt_background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Typography from "antd/es/typography/Typography";
import LoginPage from "../../loginPage/LoginPage";
import { Carousel } from "antd";

const { Title } = Typography;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          {/* <h1 className="primary-heading">School Alumni - Super ADMIN</h1> */}
          <Title level={1} className="main-title-section">
            School Alumni - Super ADMIN
          </Title>
          {/* <p className="primary-text">Manage education pages</p> */}
          <Title level={4} className="second-title-section">
            Offering a range of features and tools to support alumni
            interactions, including news, events, fundraising, job sharing
            functions.
          </Title>

          <button className="secondary-button">
            <Link to="/login">
              <Typography>
                Getting Started <FiArrowRight />
              </Typography>
            </Link>
          </button>

          {/* <button className="secondary-button" component={Link} to="/login">
            <Typography.Text>
              For more <FiArrowRight />
            </Typography.Text>
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

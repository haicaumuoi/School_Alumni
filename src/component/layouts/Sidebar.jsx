import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../utilities/sidebarData/AppSidebarData";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
    const location = useLocation();

    const filteredData = sidebarData.filter(item => !item.hideSubMenu);

    return (
        <Sider width={200} className="sidebar">
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["app_release"]}
                selectedKeys={[location.pathname]}
                style={{ height: "100%", borderRight: 0 }}
            >
                {filteredData.map((item, index) => {
                    if (item.subMenu) {
                        return (
                            <SubMenu key={item.name} icon={item.icon} title={item.title}>
                                {item.subMenu.map((subItem, subIndex) => {
                                    if (!subItem.hide) {
                                        const subPath = subItem.index ? item.path : `${item.path}/${subItem.path}`;
                                        return (
                                            <Menu.Item key={subPath} icon={subItem.icon}>
                                                <Link to={`/${subPath}`}>{subItem.title}</Link>
                                            </Menu.Item>
                                        );
                                    }
                                    return null;
                                })}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <Menu.Item key={item.path} icon={item.icon}>
                                <Link to={`/${item.path}`}>{item.title}</Link>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
        </Sider>
    );
};

export default Sidebar;

import {
  SmileOutlined,
  SettingFilled,
} from "@ant-design/icons";

export const sidebarData = [
  {
    name: "home",
    path: "home",
    exact: true,
    icon: <SmileOutlined></SmileOutlined>,
    title: "Home",
  },
  {
    name: "login",
    path: "login",
    title: "Login",
    icon: <SettingFilled></SettingFilled>,
    hideSubMenu: false,
    subMenu: [
      {
        index: true,
        icon: <SettingFilled></SettingFilled>,
        title: "2",
      },
      {
        path: "add",
        hide: true,
        exact: true,
        icon: <SettingFilled></SettingFilled>,
        title: "3",
      },
      {
        path: ":id",
        hide: true,
        exact: true,
        icon: <SettingFilled></SettingFilled>,
        title: "4",
      },
    ],
  },
  {
    name: "home",
    path: "abc",
    exact: true,
    icon: <SmileOutlined></SmileOutlined>,
    title: "Home",
  },
];

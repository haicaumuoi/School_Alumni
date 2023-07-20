import {
  SmileOutlined,
  InfoCircleFilled,
  WalletFilled,
  HomeFilled,
  PlusCircleFilled,
  SafetyCertificateFilled,
  MessageFilled,
  LayoutFilled,
  ContainerFilled,
  BankFilled,
  FileExclamationFilled,
  LoginOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

export const sidebarData = [
  {
    name: "home",
    path: "home",
    exact: true,
    icon: <HomeFilled />,
    title: "Home",
  },
  {
    name: "login",
    path: "login",
    title: "Login",
    icon: <LoginOutlined />,
    hideSubMenu: false,
  },
  {
    name: "dashboard",
    path: "dashboard",
    title: "Dashboard",
    icon: <BarChartOutlined />,
    exact: true,
  },
];

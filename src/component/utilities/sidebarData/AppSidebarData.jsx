import {
  SmileOutlined,
  SettingFilled,
  InfoCircleFilled,
  WalletFilled,
  HomeFilled,
  PlusCircleFilled,
  SafetyCertificateFilled,
  MessageFilled,
  LayoutFilled,
  ContainerFilled,
  BankFilled,
  FileExclamationFilled
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
    name: "schoolInfo",
    path: "schoolInfo",
    icon: <SmileOutlined></SmileOutlined>,
    title: "School Info",
    hideSubMenu: false,
    subMenu: [
      {
        path: "school",
        icon: <InfoCircleFilled />,
        title: "Infomation",
      },
      {
        path: "vnpay",
        icon: <WalletFilled />,
        title: "Payment Method",
      },
      {
        path: "grade",
        icon: <HomeFilled />,
        title: "School Year and Class",
      },
      {
        path: "members",
        icon: <PlusCircleFilled />,
        title: "Invite Member",
      },
      {
        path: "access_request",
        icon: <SafetyCertificateFilled />,
        title: "Join Request",
      },
    ],
  },
  {
    name: "activity",
    path: "activity",
    icon: <SmileOutlined></SmileOutlined>,
    title: "Activity",
    hideSubMenu: false,
    subMenu: [
      {
        path: "news",
        icon: <LayoutFilled />,
        title: "News",
      },
      {
        path: "events",
        icon: <ContainerFilled />,
        title: "Events",
      },
      {
        path: "funds",
        icon: <BankFilled />,
        title: "Funds",
      },
      {
        path: "recruitments",
        icon: <MessageFilled />,
        title: "Recruitment",
      },
      {
        path: "reports",
        icon: <FileExclamationFilled />,
        title: "Report",
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

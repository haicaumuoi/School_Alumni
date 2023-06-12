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
    // subMenu: [
    //   {
    //     index: true,
    //     icon: <HomeFilled></HomeFilled>,
    //     title: "2",
    //   },
    // ],
  },
  {
      name: "dashboard",
      path: "dashboard",
      title: "Dashboard",
      icon: <LoginOutlined />,
      exact: true,
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
      // {
      //   path: "recruitments",
      //   icon: <MessageFilled />,
      //   title: "Recruitment",
      // },
      // {
      //   path: "reports",
      //   icon: <FileExclamationFilled />,
      //   title: "Report",
      // },
    ],
  },
];

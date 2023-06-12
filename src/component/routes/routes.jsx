import config from "../config";
import LandingPage from "../pages/landingPage/LandingPage";
import Activity from "../view/activity/Activity";
import Home from "../view/home/Home";
import Login from "../view/login/Login";
import schoolInfo from "../view/schoolInfo/schoolInfo";
import Test1 from "../view/test1/Test1";
import Dashboard from "../view/dashboard/Dashboard";


const landingPageRoutes = {
    path: config.routes.landingPage,
    component: LandingPage,
}
const homeRoutes = {
    path: config.routes.home,
    component: Home,
}
const loginRoutes = {
    path: config.routes.login,
    component: Login,
}
const schoolInfoRoutes = {
    path: config.routes.schoolInfo,
    component: schoolInfo,
}
const activityRoutes = {
    path: config.routes.activity,
    component: Activity,
}
const abcRoutes = {
    path: config.routes.abc,
    component: Test1,
}

const DashboardRoutes = {
    path: config.routes.dashboard,
    component: Dashboard,
}

// const superAdminRoutes = [...classAdminRoutes, userListRoutes, userPermissionRoutes]
const adminRoutes = [landingPageRoutes, homeRoutes, loginRoutes, schoolInfoRoutes, activityRoutes, abcRoutes, DashboardRoutes]
export default adminRoutes;

// export { superAdminRoutes, classAdminRoutes, trainerRoutes, studentRoutes };


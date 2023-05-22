import config from "../config";
import LandingPage from "../pages/landingPage/LandingPage";
import Activity from "../view/activity/Activity";
import Home from "../view/home/Home";
import Login from "../view/login/Login";
import schoolInfo from "../view/schoolInfo/schoolInfo";


const landingPageRoute = {
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

// const superAdminRoutes = [...classAdminRoutes, userListRoutes, userPermissionRoutes]
const adminRoutes = [landingPageRoute, homeRoutes, loginRoutes, schoolInfoRoutes, activityRoutes]
export default adminRoutes;

// export { superAdminRoutes, classAdminRoutes, trainerRoutes, studentRoutes };


import config from "../config";
import LandingPage from "../pages/landingPage/LandingPage";
import Home from "../view/home/Home";
import Login from "../view/login/Login";
import Test1 from "../view/test1/Test1";


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
const abcRoutes = {
    path: config.routes.abc,
    component: Test1,
}

// const superAdminRoutes = [...classAdminRoutes, userListRoutes, userPermissionRoutes]
const adminRoutes = [landingPageRoute, homeRoutes, loginRoutes, abcRoutes]
export default adminRoutes;

// export { superAdminRoutes, classAdminRoutes, trainerRoutes, studentRoutes };

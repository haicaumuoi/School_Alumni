import config from "../config";
import LandingPage from "../pages/landingPage/LandingPage";
import Home from "../view/home/Home";
import Login from "../view/login/Login";


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

// const superAdminRoutes = [...classAdminRoutes, userListRoutes, userPermissionRoutes]
const adminRoutes = [landingPageRoute, homeRoutes, loginRoutes]
export default adminRoutes;

// export { superAdminRoutes, classAdminRoutes, trainerRoutes, studentRoutes };


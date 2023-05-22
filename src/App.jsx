import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import config from './component/config';
import ErrorPage from './component/pages/errorPage/ErrorPage';
import adminRoutes from './component/routes/routes';
import DefaultLayout from './component/layouts/DefaultLayout';
import LandingPage from './component/pages/landingPage/LandingPage';
import './App.css';

function App() {
  const [routeList, setRouteList] = useState([]);
  const authenticated = true;
  const userType = 'admin';

  useEffect(() => {
    switch (userType) {
      case 'admin':
        setRouteList(adminRoutes);
        break;
      default:
        break;
    }
  }, [userType]);

  return (
    <div className="App">
      <Routes>
        {!authenticated ? (
          <>
            <Route path={config.routes.landingPage} element={<LandingPage />} />
          </>
        ) : (
          routeList.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })
        )}
        <Route path="*" element={<ErrorPage isAuthenticated={authenticated} />} />
      </Routes>
    </div>
  );
}

export default App;

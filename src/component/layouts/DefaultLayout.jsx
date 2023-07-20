import React from 'react';
import { Layout, Breadcrumb} from 'antd';
import { useLocation, Link } from 'react-router-dom';
import HeaderComponent from './Header';
import Sidebar from './Sidebar';

const { Content, Footer } = Layout;

const DefaultLayout = ({ children }) => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const breadcrumbItems = pathSegments.map((segment, index) => {
        const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return {
            title: segment,
            path: breadcrumbPath,
            isCurrent: index === pathSegments.length - 1,
        };
    });

    return (
        <Layout className='min-h-screen'>
            <HeaderComponent />

            <Layout>
                <Sidebar />

                {/* <Layout className="p-4">
                    <Content className="p-4"> */}
                        {/* <Breadcrumb className='mb-4'>
                            {breadcrumbItems.map((item) => (
                                <Breadcrumb.Item key={item.path}>
                                    {item.isCurrent ? (
                                        <span>{item.title}</span>
                                    ) : (
                                        <Link to={item.path}>{item.title}</Link>
                                    )}
                                </Breadcrumb.Item>
                            ))}
                        </Breadcrumb> */}
                        {children}
                    {/* </Content>
                </Layout> */}
            </Layout>
            <Footer style={{ textAlign: 'center', background: 'blue', color: 'white' }}>School Alumni ©2023 | Created by Hapi-Team</Footer>
        </Layout>
    );
};

export default DefaultLayout;

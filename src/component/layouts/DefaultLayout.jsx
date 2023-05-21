import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from './Header';
import Sidebar from './Sidebar';

const { Content } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout style={{
            minHeight: '100vh',
        }}>
            <HeaderComponent style={{
                paddingInline: 0,
            }} />

            <Layout>
                <Sidebar />
                <Layout className="p-4">
                    <Content className="p-4">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;

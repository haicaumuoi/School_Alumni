import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';

const { Header, Footer, Content } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ color: '#fff' }}>Header</Header>
            <Layout>
                <Sidebar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
    );
}

export default DefaultLayout;

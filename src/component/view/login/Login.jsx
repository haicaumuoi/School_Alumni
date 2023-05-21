import React from 'react';
import { Typography } from 'antd';
import { useLocation } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const additionalPath = pathSegments.slice(1).join(' / ');

    return (
        <Typography>
            <Title>Login{additionalPath && ` - ${additionalPath}`}</Title>
        </Typography>
    );
};

export default Login;

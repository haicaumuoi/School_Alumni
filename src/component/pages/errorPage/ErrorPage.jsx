import React, { useEffect } from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    return (
        <Result
            status="500"
            title="Oops! Something went wrong."
            subTitle="We apologize for the inconvenience."
            extra={
                <Button type="primary" onClick={() => navigate(isAuthenticated ? '/home' : '/')}>
                    {isAuthenticated ? 'Go to Home' : 'Go back to homepage'}
                </Button>
            }
        />
    );
};

export default ErrorPage;

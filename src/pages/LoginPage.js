import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;

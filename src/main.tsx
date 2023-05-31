import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import vi_VN from 'antd/lib/locale/vi_VN';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ConfigProvider
            // theme={{
            //     algorithm: theme.darkAlgorithm,
            // }}
            locale={vi_VN}
        >
            <App />
        </ConfigProvider>
    </BrowserRouter>
);

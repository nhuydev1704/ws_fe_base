import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import vi_VN from 'antd/lib/locale/vi_VN';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ConfigProvider
            // theme={{
            //     algorithm: theme.compactAlgorithm,
            // }}
            locale={vi_VN}
        >
            <App />
        </ConfigProvider>
    </BrowserRouter>
);

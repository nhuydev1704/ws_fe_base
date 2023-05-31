import { Button } from 'antd';
import { useState } from 'react';
import GlobalStyle from './config/global.style';
import MainPage from './features/MainPage';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MainPage />
            <GlobalStyle />
        </>
    );
}

export default App;

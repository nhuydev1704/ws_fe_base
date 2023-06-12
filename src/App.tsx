import LocalStorage from './apis/LocalStorage';
import GlobalStyle from './config/global.style';
import MainPage from './features/MainPage';
import './index.css';

function App() {
    console.log('render');
    return (
        <div style={{ minHeight: '100vh' }}>
            <MainPage token={LocalStorage.getToken()} />
            <GlobalStyle />
        </div>
    );
}

export default App;

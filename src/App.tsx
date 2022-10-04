import { Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import styled from "styled-components";
import GlobalStyle from "./config/global.style";
import { LOADING_COLOR } from "./config/theme";
import MainPage from "./features/MainPage";
import { setAppLoading } from "./redux/slice/root.slice";

function App() {
  const { appLoading } = useSelector(
    (state: { root: { appLoading: boolean } }) => state.root
  );

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  // loading when going to app
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setAppLoading());
    }, 3000);
  }, []);

  return (
    <SpinLoadingStyled
      spinning={appLoading}
      indicator={<HashLoader color={LOADING_COLOR} loading size={60} />}
    >
      <MainPage />
      {/* define default style */}
      <GlobalStyle />
    </SpinLoadingStyled>
  );
}

const SpinLoadingStyled = styled(Spin)`
  &&& {
    top: 20%;
  }
`;

export default App;

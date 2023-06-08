import { TAB_SIZE } from '@/config/theme';
import ErrorBoundary from '@/features/Error/ErrorBoundary';
import useWindowSize from '@/hooks/useWindowSize';
import SideBar from '@/layout/SideBar';
import { Layout } from 'antd';
import React from 'react';
import Topbar from './Content/Topbar';
import { ContainerAuthStyled } from './style';

const PageLayout = (PageComponent: React.JSXElementConstructor<unknown>) => {
    return function WithPage({ ...props }) {
        const { width } = useWindowSize();

        const [collapsedMobile, setCollapsedMobile] = React.useState(false);

        const handleCallbackCollapseMobile: any = React.useCallback(() => {
            setCollapsedMobile(!collapsedMobile);
        }, [collapsedMobile]);

        return props.token ? (
            <Layout>
                {/* sidebar */}
                <SideBar
                    collapsedMobile={collapsedMobile}
                    handleCallbackCollapseMobile={handleCallbackCollapseMobile}
                />
                {/* content */}
                <Layout>
                    {/* top content */}
                    {width < TAB_SIZE && <Topbar handleCallbackCollapseMobile={handleCallbackCollapseMobile} />}
                    {/* body content */}
                    <ErrorBoundary>
                        <Layout.Content style={{ padding: '10px' }}>
                            {/* <CustomScrollbars> */}
                            <PageComponent {...props} />
                            {/* </CustomScrollbars> */}
                            {/* footer content */}
                            {/* <Footer>
                                <div className="gx-layout-footer-content">
                                    <div className="gx-layout-footer-content">WindsSoft Frontend Team - 2022</div>
                                </div>
                            </Footer> */}
                        </Layout.Content>
                    </ErrorBoundary>
                </Layout>
            </Layout>
        ) : (
            <Layout>
                <ContainerAuthStyled justify="center" align="middle">
                    <PageComponent {...props} />
                </ContainerAuthStyled>
            </Layout>
        );
    };
};

export default PageLayout;

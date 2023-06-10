import { TAB_SIZE } from '@/config/theme';
import ErrorBoundary from '@/features/Error/ErrorBoundary';
import useWindowSize from '@/hooks/useWindowSize';
import SideBar from '@/layout/SideBar';

import React from 'react';

const PageLayout = (PageComponent: React.JSXElementConstructor<unknown>) => {
    return function WithPage({ ...props }) {
        const { width } = useWindowSize();

        const [collapsedMobile, setCollapsedMobile] = React.useState(false);

        const handleCallbackCollapseMobile: any = React.useCallback(() => {
            setCollapsedMobile(!collapsedMobile);
        }, [collapsedMobile]);

        return props.token ? (
            <div>
                <SideBar
                    collapsedMobile={collapsedMobile}
                    handleCallbackCollapseMobile={handleCallbackCollapseMobile}
                />
                <PageComponent {...props} />
            </div>
        ) : (
            <div>
                <PageComponent {...props} />
            </div>
        );
    };
};

export default PageLayout;

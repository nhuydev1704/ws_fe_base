import { TAB_SIZE } from '@/config/theme';
import useWindowSize from '@/hooks/useWindowSize';
import { Drawer, Layout } from 'antd';
import React from 'react';
import SidebarContent from './SidebarContent';

const SideBar = ({
    collapsedMobile,
    handleCallbackCollapseMobile,
}: {
    collapsedMobile: boolean;
    handleCallbackCollapseMobile: () => void;
}) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const { width } = useWindowSize();

    const handleCallbackCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return width < TAB_SIZE ? (
        <Drawer placement="left" closable={false} onClose={handleCallbackCollapseMobile} open={collapsedMobile}>
            <SidebarContent />
        </Drawer>
    ) : (
        <Layout.Sider
            width="260px"
            style={{ padding: '10px' }}
            theme="light"
            trigger={null}
            collapsed={width < TAB_SIZE ? false : collapsed}
            collapsible
        >
            <SidebarContent handleCallbackCollapsed={handleCallbackCollapsed} collapsed={collapsed} />
        </Layout.Sider>
    );
};

export default React.memo(SideBar);

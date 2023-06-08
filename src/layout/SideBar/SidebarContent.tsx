import CustomScrollbars from '@/components/CustomScrollbars';
import IconAntd from '@/components/IconAntd';
import { Menu, Row } from 'antd';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { items } from './Sidebar.Menu';
import { ContainerSidebarContentStyled, MenuStyled } from '../style';

const SidebarContent = React.memo(
    ({ collapsed, handleCallbackCollapsed }: { collapsed?: boolean; handleCallbackCollapsed?: () => void }) => {
        const location = useLocation();
        const navigate = useNavigate();

        const selectedKeys = location.pathname.substr(1);
        const defaultOpenKeys = selectedKeys.split('/')[1] || 'dashboard';

        return (
            <ContainerSidebarContentStyled>
                <Row align="middle" justify={collapsed ? 'center' : 'space-between'} className="sidebar_header">
                    {!collapsed && (
                        <Link to="/">
                            <img
                                height="40px"
                                alt=""
                                src="https://winds.vn/wp-content/uploads/2021/07/logoWindSoftBlendNew-e1569232144947.png"
                            />
                        </Link>
                    )}
                </Row>
                {/* sidebar menu */}
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <MenuStyled
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[selectedKeys]}
                        mode="inline"
                        items={items}
                        onClick={(e) => navigate('/' + e.key)}
                    />
                </CustomScrollbars>
                <div className="sidebar_footer" onClick={handleCallbackCollapsed}>
                    {collapsed ? (
                        <IconAntd icon="MenuUnfoldOutlined" style={{ color: '#222' }} />
                    ) : (
                        <IconAntd style={{ color: '#222' }} icon="MenuFoldOutlined" />
                    )}
                </div>
            </ContainerSidebarContentStyled>
        );
    }
);

export default SidebarContent;

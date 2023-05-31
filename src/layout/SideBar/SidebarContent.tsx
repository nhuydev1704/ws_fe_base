import CustomScrollbars from '@/components/CustomScrollbars';
import UserInfo from '@/components/UserInfo';
import { MenuFoldOutlined, MenuUnfoldOutlined, NotificationOutlined } from '@ant-design/icons';
import { Menu, Row } from 'antd';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { items } from './Sidebar.Menu';
import IconAntd from '@/components/IconAntd';

const SidebarContent = ({
    collapsed,
    handleCallbackCollapsed,
}: {
    collapsed?: boolean;
    handleCallbackCollapsed?: () => void;
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectedKeys = location.pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1] || 'dashboard';

    return (
        <div>
            <Row
                align="middle"
                justify={collapsed ? 'center' : 'space-between'}
                style={{ padding: '10px', marginBottom: '10px' }}
            >
                {!collapsed && (
                    <Link to="/">
                        <img
                            height="40px"
                            alt=""
                            src="https://winds.vn/wp-content/uploads/2021/07/logoWindSoftBlendNew-e1569232144947.png"
                        />
                    </Link>
                )}
                {/* <div style={{ cursor: 'pointer' }} onClick={handleCallbackCollapsed}>
                    {collapsed ? (
                        <IconAntd icon="MenuUnfoldOutlined" style={{ color: '#222' }} />
                    ) : (
                        <IconAntd style={{ color: '#222' }} icon="MenuFoldOutlined" />
                    )}
                </div> */}
            </Row>
            <div>
                {/* sidebar menu */}
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <div>
                        <MenuStyled
                            defaultOpenKeys={[defaultOpenKeys]}
                            selectedKeys={[selectedKeys]}
                            mode="inline"
                            items={items}
                            onClick={(e) => navigate('/' + e.key)}
                        />
                    </div>
                </CustomScrollbars>
            </div>
        </div>
    );
};

const MenuStyled = styled(Menu)`
    border-inline-end: none !important;
    * {
        font-weight: 600;
    }
`;

export default React.memo(SidebarContent);

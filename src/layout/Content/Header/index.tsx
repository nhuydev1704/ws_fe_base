import React, { ReactNode } from 'react';
import { HeaderContainerStyled, HeaderTitleStyled } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Badge, Button, DropDownProps, Dropdown, MenuProps, Space, theme } from 'antd';
import IconAntd from '@/components/IconAntd';
import LocalStorage from '@/apis/LocalStorage';
import UserHeader from './User.Header';
import NotificationHeader from './Notification.Header';

interface IHeaderProps {
    title: any;
    extra?: ReactNode;
    style?: React.CSSProperties;
    back?: boolean;
    onBack?: () => void;
}

const HeaderComponent: React.FC<IHeaderProps> = React.memo(({ title, extra, style, back, onBack }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onHandleBack = React.useCallback(() => {
        if (onBack) return onBack();

        navigate(location?.state?.prevUrl || -1, { state: location.state });
    }, [location?.state]);

    return (
        <HeaderContainerStyled>
            {/* left */}
            <Space align="center">
                {back && (
                    <Button onClick={onHandleBack} shape="circle" ghost>
                        <IconAntd size="16px" icon="ArrowLeftOutlined" />
                    </Button>
                )}
                <HeaderTitleStyled>{title}</HeaderTitleStyled>
            </Space>

            {/* right */}
            <Space size="large" align="center">
                <Space style={{ cursor: 'pointer' }}>
                    {/* notification */}
                    <NotificationHeader />
                </Space>
                {/* user */}
                <UserHeader />
            </Space>
        </HeaderContainerStyled>
    );
});

export default HeaderComponent;

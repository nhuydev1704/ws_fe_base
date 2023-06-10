import IconMenuFold from '@/icons/IconMenuFold';
import IconMenuUnfold from '@/icons/IconMenuUnfold';
import styled from '@emotion/styled';
import React from 'react';

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    collapsed?: boolean;
    setCollapsed?: any;
}

const StyledSidebarFooter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
    /* background: #0098e5; */
`;

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ collapsed, setCollapsed }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '20px',
            }}
        >
            {collapsed ? (
                <StyledSidebarFooter onClick={() => setCollapsed(!collapsed)}>
                    <IconMenuUnfold />
                </StyledSidebarFooter>
            ) : (
                <StyledSidebarFooter onClick={() => setCollapsed(!collapsed)}>
                    <IconMenuFold />
                </StyledSidebarFooter>
            )}
        </div>
    );
};

import useWindowSize from '@/hooks/useWindowSize';
import IconBxCategory from '@/icons/IconBxCategory';
import React from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { SidebarFooter } from './Footer';
import { SidebarHeader } from './Header';
import { hexToRgba, menuItemStyles, themes } from './style';
import { menuSidebars } from './Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { SHADOW } from '@/config/theme';

const SideBar = React.memo(() => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);
    const [broken, setBroken] = React.useState(false);
    const { width } = useWindowSize();
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    const location = useLocation();
    const selectedKeys = location.pathname?.substr(1)?.includes('order') ? 'order' : location.pathname.substr(1) || '/';

    return (
        <Sidebar
            collapsed={collapsed}
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
            onBreakPoint={setBroken}
            // image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
            breakPoint="md"
            backgroundColor="#fff"
            rootStyles={{
                color: themes[theme].sidebar.color,
                boxShadow: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
                zIndex: 1000,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <SidebarHeader style={{ marginBottom: '10px', marginTop: '16px' }} />
                <div style={{ flex: 1, marginBottom: '20px' }}>
                    <Menu menuItemStyles={menuItemStyles(theme)}>
                        {menuSidebars.map((menu, index) => (
                            <MenuItem
                                onClick={() => {
                                    navigate(menu.key);
                                }}
                                key={index}
                                icon={menu.icon}
                                style={{
                                    fontWeight: selectedKeys === menu.key ? 'bold' : 'inherit',
                                    color: selectedKeys === menu.key ? '#0098e5' : 'inherit',
                                    backgroundColor:
                                        selectedKeys === menu.key
                                            ? hexToRgba(themes[theme].menu.hover.backgroundColor, 1)
                                            : 'inherit',
                                }}
                            >
                                {menu.title}
                            </MenuItem>
                        ))}
                        {/* <MenuItem icon={<IconBxCategory />}>Danh mục</MenuItem> */}
                    </Menu>
                </div>
                <SidebarFooter collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
        </Sidebar>
    );
});

export default SideBar;

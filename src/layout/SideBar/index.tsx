import { TAB_SIZE } from '@/config/theme';
import useWindowSize from '@/hooks/useWindowSize';
import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader } from './Header';
import { Typography } from './Typography';
import { Badge } from '@nextui-org/react';

const BarChart: React.FC<any> = ({ size = 18, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...rest}
        >
            <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"></path>
        </svg>
    );
};

const themes = {
    light: {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#0098e5',
            hover: {
                backgroundColor: '#c5e4ff',
                color: '#44596e',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    },
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

const SideBar = React.memo(
    ({
        collapsedMobile,
        handleCallbackCollapseMobile,
    }: {
        collapsedMobile: boolean;
        handleCallbackCollapseMobile: () => void;
    }) => {
        const [collapsed, setCollapsed] = React.useState(false);
        const [toggled, setToggled] = React.useState(false);
        const [broken, setBroken] = React.useState(false);
        const { width } = useWindowSize();
        const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
        const handleCallbackCollapsed = () => {
            setCollapsed(!collapsed);
        };

        const menuItemStyles: any = {
            root: {
                fontSize: '13px',
                fontWeight: 400,
            },
            // icon: {
            //     color: themes[theme].menu.icon,
            //     [`&.${menuClasses.disabled}`]: {
            //         color: themes[theme].menu.disabled.color,
            //     },
            // },
            // SubMenuExpandIcon: {
            //     color: '#b6b7b9',
            // },
            // subMenuContent: ({ level }) => ({
            //     backgroundColor:
            //         level === 0
            //             ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
            //             : 'transparent',
            // }),
            // button: {
            //     [`&.${menuClasses.disabled}`]: {
            //         color: themes[theme].menu.disabled.color,
            //     },
            //     '&:hover': {
            //         backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
            //         color: themes[theme].menu.hover.color,
            //     },
            // },
            // label: ({ open }) => ({
            //     fontWeight: open ? 600 : undefined,
            // }),
        };

        return (
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
                breakPoint="md"
                // backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
                rootStyles={{
                    color: themes[theme].sidebar.color,
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <SidebarHeader style={{ marginBottom: '24px', marginTop: '16px' }} />
                    <div style={{ flex: 1, marginBottom: '32px' }}>
                        <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                            >
                                General
                            </Typography>
                        </div>
                        <Menu menuItemStyles={menuItemStyles}>
                            <SubMenu
                                label="Charts"
                                icon={<BarChart />}
                                suffix={
                                    <Badge variant="danger" shape="circle">
                                        6
                                    </Badge>
                                }
                            >
                                <MenuItem> Pie charts</MenuItem>
                                <MenuItem> Line charts</MenuItem>
                                <MenuItem> Bar charts</MenuItem>
                            </SubMenu>
                            <SubMenu label="Maps" icon={<BarChart />}>
                                <MenuItem> Google maps</MenuItem>
                                <MenuItem> Open street maps</MenuItem>
                            </SubMenu>
                            <SubMenu label="Theme" icon={<BarChart />}>
                                <MenuItem> Dark</MenuItem>
                                <MenuItem> Light</MenuItem>
                            </SubMenu>
                            <SubMenu label="Components" icon={<BarChart />}>
                                <MenuItem> Grid</MenuItem>
                                <MenuItem> Layout</MenuItem>
                                <SubMenu label="Forms">
                                    <MenuItem> Input</MenuItem>
                                    <MenuItem> Select</MenuItem>
                                    <SubMenu label="More">
                                        <MenuItem> CheckBox</MenuItem>
                                        <MenuItem> Radio</MenuItem>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu label="E-commerce" icon={<BarChart />}>
                                <MenuItem> Product</MenuItem>
                                <MenuItem> Orders</MenuItem>
                                <MenuItem> Credit card</MenuItem>
                            </SubMenu>
                        </Menu>

                        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                            >
                                Extra
                            </Typography>
                        </div>

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem icon={<BarChart />} suffix={<Badge variant="success">New</Badge>}>
                                Calendar
                            </MenuItem>
                            <MenuItem icon={<BarChart />}>Documentation</MenuItem>
                            <MenuItem disabled icon={<BarChart />}>
                                Examples
                            </MenuItem>
                        </Menu>
                    </div>
                    {/* <SidebarFooter collapsed={collapsed} /> */}
                </div>
            </Sidebar>
        );

        // return width < TAB_SIZE ? (
        //     <Drawer placement="left" closable={false} onClose={handleCallbackCollapseMobile} open={collapsedMobile}>
        //         <SidebarContent />
        //     </Drawer>
        // ) : (
        //     <Layout.Sider
        //         width="260px"
        //         style={{ padding: '10px' }}
        //         theme="light"
        //         trigger={null}
        //         collapsed={width < TAB_SIZE ? false : collapsed}
        //         collapsible
        //     >
        //         {/* <SidebarContent handleCallbackCollapsed={handleCallbackCollapsed} collapsed={collapsed} /> */}
        //     </Layout.Sider>
        // );
    }
);

export default SideBar;

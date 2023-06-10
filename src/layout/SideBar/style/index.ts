import { menuClasses } from 'react-pro-sidebar';

// hex to rgba converter
export const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const themes = {
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

export const menuItemStyles = (theme: 'light' | 'dark') => ({
    root: {
        fontSize: '14px',
        fontWeight: 400,
        marginBottom: '5px',
    },
    icon: {
        color: themes[theme].menu.icon,
        [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
        },
    },
    SubMenuExpandIcon: {
        color: '#b6b7b9',
    },
    subMenuContent: ({ level }: any) => ({
        backgroundColor: level === 0 ? hexToRgba(themes[theme].menu.menuContent, 1) : 'transparent',
    }),
    button: {
        [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
        },
        '&:hover': {
            backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
            color: themes[theme].menu.hover.color,
        },
        height: '45px',
    },
    label: ({ open }: any) => ({
        fontWeight: open ? 600 : undefined,
    }),
});

import { AdminRoutes, AuthRoutes } from '@/config/routes';
import { ROUTER_PAGE } from '@/config/routes/contants';
import { ADMIN } from '@/contants';
import PageLayout from '@/layout';
import React from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
const switchRoute = (role: string) => {
    // 'group'
    switch (role) {
        case ADMIN.main:
            return AdminRoutes;

        case ADMIN.stall:
            return AdminRoutes;
        default:
            return AdminRoutes;
    }
};

// config routes
const MainPage = ({ role, token }: { role: string; token: string }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const element = useRoutes(token ? switchRoute(role) : AuthRoutes);
    console.log('🚀 ~ file: MainPage.tsx:48 ~ element:', element);

    const [logged, setLogged] = React.useState(false);

    React.useEffect(() => {
        if (logged || pathname === '/vn_pay') return;

        // nếu đăng nhập và domain không webview và domain không public
        // if (token && pathname.includes('webview') && pathname.includes('public')) {

        if (token) {
            setLogged(true);

            if (pathname === ROUTER_PAGE.register || pathname === ROUTER_PAGE.login) {
                // return switchSidebar(role)?.[0]?.key;
                return navigate('/');
            }
            // navigate(pathname);
        } else {
            switch (pathname) {
                case ROUTER_PAGE.register:
                    navigate(ROUTER_PAGE.register);
                    break;
                default:
                    navigate(ROUTER_PAGE.login);
                    break;
            }
        }
    }, [logged, pathname, role]);

    return element;
};

export default PageLayout(MainPage);

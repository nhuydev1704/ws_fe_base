import React from 'react';

const LoginPage = React.lazy(() => import('@/features/Auth/Login/pages'));

import RegisterPage from '@/features/Auth/Register';

// import AccountantRoutes from './Accountant.routes';
import AdminRoutes from './Admin.routes';
import { ROUTER_PAGE } from './contants';
import { PublicRoutes } from './Lazy.routes';
// import { routerPage } from './contants.routes';
// import EditorRoutes from './Editor.routes';
// import { PublicRoutes } from './Lazy.routes';

// todo: auth router khi chưa đăng nhập
const AuthRoutes = [
    {
        path: ROUTER_PAGE.login,
        element: <LoginPage />,
    },
    {
        path: ROUTER_PAGE.register,
        element: <RegisterPage />,
    },
    ...PublicRoutes,
];

export { AdminRoutes, AuthRoutes };

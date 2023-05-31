import React from 'react';
import Lazy, { PublicRoutes } from './Lazy.routes';
import { ROUTER_PAGE } from './contants';

const HomePage = React.lazy(() => import('@/features/App/home/page'));
const CustomerPage = React.lazy(() => import('@/features/App/customer/pages'));

// private router khi đã đăng nhập admin
const AdminRoutes = [
    {
        path: ROUTER_PAGE.home,
        element: (
            <Lazy>
                <HomePage />
            </Lazy>
        ),
    },

    // customer
    {
        path: ROUTER_PAGE.customer,
        element: (
            <Lazy>
                <CustomerPage />
            </Lazy>
        ),
    },

    ...PublicRoutes,
];

export default AdminRoutes;

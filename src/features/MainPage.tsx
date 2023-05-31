import LocalStorage from '@/apis/LocalStorage';
import { AuthRoutes, PrivateRoutes, routerPage } from '@/config/routes';
import PageLayout from '@/layout';
import React from 'react';
import { RouterProvider, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './App/home/page';
import NotFoundPage from './Notfound';

// khởi tạo router
const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'customer',
                // Single route in lazy file
                async lazy() {
                    // Multiple routes in lazy file
                    const { CustomerPage } = await import('@/features/App/customer/pages/index');
                    return { Component: PageLayout(CustomerPage) };
                },
            },
            // {
            //     path: 'dashboard',
            //     async lazy() {
            //         // Multiple routes in lazy file
            //         let { DashboardLayout } = await import('./pages/Dashboard');
            //         return { Component: DashboardLayout };
            //     },
            //     children: [
            //         {
            //             index: true,
            //             async lazy() {
            //                 let { DashboardIndex } = await import('./pages/Dashboard');
            //                 return { Component: DashboardIndex };
            //             },
            //         },
            //         {
            //             path: 'messages',
            //             async lazy() {
            //                 let { dashboardMessagesLoader, DashboardMessages } = await import('./pages/Dashboard');
            //                 return {
            //                     loader: dashboardMessagesLoader,
            //                     Component: DashboardMessages,
            //                 };
            //             },
            //         },
            //     ],
            // },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);

// config routes
const MainPage = () => {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default MainPage;

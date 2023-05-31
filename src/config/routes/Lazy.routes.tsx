import NotFoundPage from '@/features/Notfound';
import { Suspense } from 'react';
import { PulseLoader, RingLoader } from 'react-spinners';

// public chứa những router không cần đăng nhập hoặc web view
export const PublicRoutes = [
    { path: '*', element: <NotFoundPage /> },
    // {
    //     path: '/vn_pay',
    //     element: <VnPayPage />,
    // },
];

const Lazy = ({ children }: { children: any }) => {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        height: '100vh',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <PulseLoader />
                </div>
            }
        >
            {children}
        </Suspense>
    );
};

export default Lazy;

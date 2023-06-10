import SideBar from '@/layout/SideBar';

import React from 'react';

const PageLayout = (PageComponent: React.JSXElementConstructor<unknown>) => {
    return function WithPage({ ...props }) {
        return props.token ? (
            <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
                <SideBar />
                <main style={{ width: '100%' }}>
                    <div style={{ color: '#44596e' }}>
                        <PageComponent {...props} />
                    </div>
                </main>
            </div>
        ) : (
            <div>
                <PageComponent {...props} />
            </div>
        );
    };
};

export default PageLayout;

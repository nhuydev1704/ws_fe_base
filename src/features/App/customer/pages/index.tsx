import PageLayout from '@/layout';
import React from 'react';

const CustomerComponent: React.FC = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

const CustomerPage = PageLayout(CustomerComponent);

export default CustomerPage;

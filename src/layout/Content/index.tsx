import { Card, CardBody } from '@nextui-org/card';
import { Pagination } from '@nextui-org/pagination';
import React from 'react';
import { styled } from 'styled-components';

interface IContentContainerProps {
    filter: React.ReactNode;
    content?: React.ReactNode;
    children?: React.ReactNode;
}

const ContentContainer: React.FC<IContentContainerProps> = React.memo(({ filter, content, children }) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <Card shadow="sm" radius="lg">
            <CardBody className="p-3">
                <div>{filter}</div>
                <div>{content || children}</div>
            </CardBody>
        </Card>
    );
});

export default React.memo(ContentContainer);

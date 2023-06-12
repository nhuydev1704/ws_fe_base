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
            <CardBody>
                <div>{filter}</div>
                <div>{content || children}</div>
                <div className="flex justify-center pt-[20px]">
                    <Pagination
                        total={Math.ceil(100 / 12)}
                        showShadow
                        color="primary"
                        page={currentPage}
                        onChange={setCurrentPage}
                        showControls
                    />
                </div>
            </CardBody>
        </Card>
    );
});

export default React.memo(ContentContainer);

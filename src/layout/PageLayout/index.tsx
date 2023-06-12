import React from 'react';
import { styled } from 'styled-components';

const PageLayout = ({
    top,
    content,
    children,
}: {
    top: React.ReactNode;
    content?: React.ReactNode;
    children?: React.ReactNode;
}) => {
    return (
        <div>
            {top}
            <div className="p-2 flex justify-center">
                <ContainerStyled className="max-w-screen-xl w-full">{content || children}</ContainerStyled>
            </div>
        </div>
    );
};

const ContainerStyled = styled.div`
    font-size: 13px;
`;

export default PageLayout;

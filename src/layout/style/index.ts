import { styled } from 'styled-components';

export const ContainerSidebarContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    & .sidebar_header {
        padding: 0 10px 10px 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #f1f1f1;
    }

    & .sidebar_footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        background-color: #fafafa;
        cursor: pointer;
        border-radius: 12px;
    }

    & .sidebar_footer:hover {
        background-color: #f1f1f1;
    }
`;

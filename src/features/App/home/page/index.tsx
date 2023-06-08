import TableComponent from '@/components/TableComponent';
import PageLayout from '@/layout';
import ContentContainer from '@/layout/Content';
import CardContent from '@/layout/Content/Card';
import HeaderComponent from '@/layout/Content/Header';
import { Button, Input, Space } from 'antd';
import React from 'react';
import styled from 'styled-components';
const HomePage = () => {
    const [count, setCount] = React.useState(0);

    return (
        <ContentContainer
            header={<HeaderComponent title="demo title" />}
            content={
                <CardContent
                    title={
                        <Space>
                            <Input />
                            <Input />
                        </Space>
                    }
                    extra={<Button type="primary">Button</Button>}
                    children={
                        <div>
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                            <TableComponent page={1} onChangePage={() => {}} dataSource={[]} columns={[]} />
                        </div>
                    }
                />
            }
        />
    );
};

export default HomePage;

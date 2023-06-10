import TableComponent from '@/components/TableComponent';
import ContentContainer from '@/layout/Content';
import CardContent from '@/layout/Content/Card';
import HeaderComponent from '@/layout/Content/Header';
import { Button, Input, Space } from 'antd';
import React from 'react';

const CategoryPage = () => {
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
                        </div>
                    }
                />
            }
        />
    );
};

export default CategoryPage;

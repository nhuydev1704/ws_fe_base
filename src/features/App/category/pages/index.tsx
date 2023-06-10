import Topbar from '@/layout/Topbar';
import { Card, Container, Row, Text } from '@nextui-org/react';
import React from 'react';

const CategoryPage = () => {
    return (
        <div>
            <Topbar />
            <Container css={{ padding: '10px' }}>
                <Card css={{ $$cardColor: '$colors$white', boxShadow: '$xs', borderRadius: '$sm' }}>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Text size={15}>
                                NextUI gives you the best developer experience with all the features you need for
                                building beautiful and modern websites and applications.
                            </Text>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default CategoryPage;

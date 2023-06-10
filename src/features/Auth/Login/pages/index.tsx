import LocalStorage from '@/apis/LocalStorage';
import { wait } from '@/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import Wrapper from '../../Wrapper';
import InfoLogin from '../components/InfoLogin';
import { ROUTER_PAGE } from '@/config/routes/contants';
import { styled } from 'styled-components';
import { SHADOW } from '@/config/theme';

const Container = styled.div`
    height: auto;
    width: 500px;
    box-shadow: ${SHADOW};
    background-color: #fff;
    border-radius: 20px;
    padding: 30px 40px;
    display: flex;
    align-items: center;
`;

const LoginPage = () => {
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (value: { email: string; password: string }) => {
        setLoading(true);
        LocalStorage.setToken('kkkkkk');
        wait(1500).then(() => {
            setLoading(false);
            window.location.reload();
        });
    };

    return (
        <div
            style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Wrapper loading={loading}>
                <Container>
                    {/* <InfoLogin /> */}
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        {/* <Form
                            style={{ width: '100%' }}
                            initialValues={{ email: 'admin@gmail.com', password: 'admin' }}
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Vui lòng nhập đúng địa chỉ E-mail!',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập địa chỉ email" />
                            </Form.Item>
                            <Form.Item
                                className="gx-mb-1"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password type="password" placeholder="Nhập mật khẩu" />
                            </Form.Item>
                            <Row justify="end">
                                <Form.Item style={{ marginBottom: '10px' }} initialValue={true}>
                                    <Checkbox checked>Nhớ mật khẩu</Checkbox>
                                </Form.Item>
                            </Row>
                            <Form.Item style={{ marginBottom: 0 }}>
                                <div
                                    style={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Button type="primary" htmlType="submit" className="gx-mb-0">
                                        Đăng nhập
                                    </Button>
                                    <span>hoặc </span>
                                    <Link to={ROUTER_PAGE.register}>Đăng ký</Link>
                                </div>
                            </Form.Item>
                        </Form> */}
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default LoginPage;

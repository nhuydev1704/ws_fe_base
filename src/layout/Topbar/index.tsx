import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { styled } from 'styled-components';

const Topbar = () => {
    return (
        <Navbar
            height="60px"
            css={{
                boxShadow: '$sm',
            }}
            shouldHideOnScroll
            variant="sticky"
        >
            <Navbar.Brand
                css={{
                    '@xs': {
                        w: '12%',
                    },
                }}
            >
                <Text b color="inherit">
                    ACME
                </Text>
            </Navbar.Brand>

            <Navbar.Content
                css={{
                    '@xs': {
                        w: '12%',
                        jc: 'flex-end',
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="secondary"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="profile" css={{ height: '$18' }}>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
        </Navbar>
    );
};

export default Topbar;

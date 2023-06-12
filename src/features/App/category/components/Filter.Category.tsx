import LeftFilter from '@/components/FilterBase/Left.Filter';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React from 'react';

const menuItems = [
    { key: 'new', name: 'New File' },
    { key: 'copy', name: 'Copy Link' },
    { key: 'edit', name: 'Edit File' },
    { key: 'delete', name: 'Delete File' },
];

const FilterCategory = () => {
    return (
        <div>
            <Dropdown showArrow>
                <DropdownTrigger>
                    <Button variant="light">
                        <LeftFilter countFilter={2} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions" items={menuItems}>
                    {(item: any) => <DropdownItem key={item.key}>{item.name}</DropdownItem>}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default React.memo(FilterCategory);

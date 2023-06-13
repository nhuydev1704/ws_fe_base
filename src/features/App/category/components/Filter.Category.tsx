import LeftFilter from '@/components/FilterBase/Left.Filter';
import {
    Button,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from '@nextui-org/react';
import React from 'react';

const FilterCategory = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Dropdown onOpenChange={(open) => setIsOpen(open)} showArrow isOpen={isOpen}>
                <DropdownTrigger>
                    <Button variant="light">
                        <LeftFilter countFilter={2} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Actions"
                    closeOnSelect={false}
                    color="default"
                    variant="shadow"

                    // onAction={alert}
                >
                    <DropdownSection title="Chọn bộ lọc áp dụng">
                        <DropdownItem
                            classNames={{
                                base: 'mt-3',
                            }}
                            color="default"
                            variant="light"
                        >
                            <Checkbox size="md">Trạng thái</Checkbox>
                        </DropdownItem>
                        <DropdownItem
                            classNames={{
                                base: 'mt-3',
                            }}
                            color="default"
                            variant="light"
                        >
                            <Checkbox size="md">Danh mục</Checkbox>
                        </DropdownItem>
                        <DropdownItem
                            classNames={{
                                base: 'mt-3',
                            }}
                            color="default"
                            variant="light"
                        >
                            <Checkbox size="md">Kho hàng</Checkbox>
                        </DropdownItem>

                        <DropdownItem
                            classNames={{
                                base: 'mt-3',
                            }}
                            color="default"
                            variant="light"
                        >
                            <Checkbox size="md">Ngày tạo</Checkbox>
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownItem showDivider color="default" variant="light">
                        <div className="flex gap-2">
                            <Button onPress={() => setIsOpen(false)} size="sm" variant="flat">
                                Quay lại
                            </Button>
                            <Button onPress={() => setIsOpen(false)} size="sm" color="primary">
                                Áp dụng
                            </Button>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default React.memo(FilterCategory);

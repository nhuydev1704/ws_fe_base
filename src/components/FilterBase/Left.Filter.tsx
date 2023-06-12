import React from 'react';
import TooltipBase from '../TooltipBase';
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import IconBxPlus from '@/icons/IconBxPlus';
const menuItems = [
    { key: 'new', name: 'New File' },
    { key: 'copy', name: 'Copy Link' },
    { key: 'edit', name: 'Edit File' },
    { key: 'delete', name: 'Delete File' },
];
const LeftFilter = ({ countFilter, onClick }: { countFilter: number; onClick: () => void }) => {
    const [openFilter, setOpenFilter] = React.useState(false);

    return (
        <div>
            <Dropdown isOpen={openFilter}>
                <div className="flex items-center gap-2">
                    <TooltipBase title="Bộ lọc">
                        <Button onPress={() => setOpenFilter(true)} className="p-0 h-fit" variant="flat">
                            <Chip
                                variant="flat"
                                classNames={{
                                    base: 'px-[15px] py-4',
                                    content: 'px-0 pr-2',
                                }}
                                size="md"
                                endContent={
                                    <span className="text-white font-bold bg-red-500 rounded-full px-[6px] text-[12px] h-fit">
                                        {countFilter || 0}
                                    </span>
                                }
                            >
                                Bộ lọc
                            </Chip>
                        </Button>
                    </TooltipBase>

                    <TooltipBase title="Thêm bộ lọc">
                        <Button
                            size="xs"
                            className="border-[1px]"
                            radius="md"
                            isIconOnly
                            color="warning"
                            variant="faded"
                            aria-label="Add a filter"
                            onPress={() => setOpenFilter(true)}
                        >
                            <IconBxPlus />
                        </Button>
                    </TooltipBase>
                </div>
                <DropdownMenu aria-label="Dynamic Actions" items={menuItems}>
                    {(item: any) => <DropdownItem key={item.key}>{item.name}</DropdownItem>}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default React.memo(LeftFilter);

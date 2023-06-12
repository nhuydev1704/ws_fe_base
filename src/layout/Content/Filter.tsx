import IconSearch from '@/icons/IconSearch';
import { Input } from '@nextui-org/input';
import React from 'react';

interface IProps {
    left: React.ReactNode;
    right?: {
        hiddenSearch?: boolean;
        onChangeSeach?: any;
    };
}

const Filter = ({ left, right }: IProps) => {
    return (
        <div className="flex items-center justify-between pb-3">
            {left}
            {!right?.hiddenSearch && (
                <div className="w-[300px]">
                    <Input
                        color="default"
                        placeholder="Nhập để tìm kiếm ..."
                        size="xs"
                        classNames={{
                            input: 'text-[14px]',
                        }}
                        startContent={<IconSearch className="text-base pointer-events-none flex-shrink-0" />}
                        onClear={() => {
                            console.log('clear');
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default React.memo(Filter);

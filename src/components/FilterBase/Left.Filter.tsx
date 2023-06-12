import IconBxPlus from '@/icons/IconBxPlus';
import { Chip } from '@nextui-org/react';
import React from 'react';

const LeftFilter = ({ countFilter }: { countFilter: number }) => {
    return (
        <div className="flex items-center gap-2">
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
            <IconBxPlus />
        </div>
    );
};

export default React.memo(LeftFilter);

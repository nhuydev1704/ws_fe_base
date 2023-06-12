import { Tooltip } from '@nextui-org/tooltip';
import React from 'react';

const TooltipBase = ({ title, children }: { title: React.ReactNode | string; children: React.ReactNode }) => {
    return (
        <Tooltip
            color="primary"
            classNames={{
                arrow: 'bg-primary',
            }}
            showArrow
            content={title}
        >
            {children}
        </Tooltip>
    );
};

export default React.memo(TooltipBase);

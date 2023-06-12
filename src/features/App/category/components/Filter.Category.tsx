import LeftFilter from '@/components/FilterBase/Left.Filter';
import React from 'react';

const FilterCategory = () => {
    return (
        <div>
            <LeftFilter countFilter={2} onClick={() => {}} />
        </div>
    );
};

export default React.memo(FilterCategory);

import { RECORD_SIZE } from '@/config/theme';
import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React from 'react';

interface IColumnProps {
    name: string;
    uid: string;
    hideHeader?: boolean;
    align?: 'start' | 'center' | 'end';
}

interface IPropTableBase {
    columns: any;
    dataSource: any;
    selectionMode?: 'single' | 'multiple';
    onSelectionChange?: (selected: any) => void;
    recordSize?: number;
    total: number;
    page: number;
    onChangePage: (page: number) => void;
    isPaging?: boolean;
}

const handleCountPaging = (dataSource: any, row: any, page: any) => {
    return dataSource.findIndex((data: any) => row.id === data.id) + (page === 1 ? 1 : (page - 1) * RECORD_SIZE);
};

const TableBase = ({
    columns,
    dataSource,
    selectionMode = 'single',
    onSelectionChange,
    recordSize = 12,
    total,
    page = 1,
    onChangePage,
    isPaging = true,
}: IPropTableBase) => {
    return (
        <>
            <Table removeWrapper onSelectionChange={onSelectionChange} selectionMode={selectionMode} shadow="sm">
                <TableHeader columns={[{ uid: 'id', name: 'STT' }, ...columns]}>
                    {(column: any) => (
                        <TableColumn key={column.uid} hideHeader={column?.hideHeader} align={column?.align}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent="Danh sách trống!" items={dataSource}>
                    {(item: any) => {
                        return (
                            <TableRow key={item.id}>
                                {(columnKey) => (
                                    <TableCell>
                                        {columnKey === 'id'
                                            ? handleCountPaging(dataSource, item, page)
                                            : item[columnKey]}
                                    </TableCell>
                                )}
                            </TableRow>
                        );
                    }}
                </TableBody>
            </Table>
            {total > 12 && isPaging && (
                <div className="flex justify-center pt-[20px]">
                    <Pagination
                        total={Math.ceil(total / recordSize)}
                        showShadow
                        color="primary"
                        page={page}
                        onChange={onChangePage}
                        showControls
                    />
                </div>
            )}
        </>
    );
};

export default React.memo(TableBase);

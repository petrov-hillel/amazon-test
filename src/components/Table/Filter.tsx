import React from "react";
import {Column, RowData, RowModel} from "@tanstack/react-table";

export default function Filter({
    column,
    getPreFilteredRowModel,
}: {
    column: Column<RowData>
    getPreFilteredRowModel: () => RowModel<RowData>
}) {
    const firstValue = getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === 'number' ? (
        <div className="flex space-x-2 justify-center">
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={e =>
                column.setFilterValue((old: [number, number]) => [
                    e.target.value,
                    old?.[1],
                    ])
                }
                placeholder={`Min`}
                className="w-14 filter-input"
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={e =>
                column.setFilterValue((old: [number, number]) => [
                    old?.[0],
                    e.target.value,
                    ])
                }
                placeholder={`Max`}
                className="w-14 filter-input"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={e => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 filter-input"
        />
    )
}
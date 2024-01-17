import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel, getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    SortingState
} from "@tanstack/react-table";
import getShowPagesCount from '../../utils/getShowPagesCount'

import Filter from "./Filter";
import Pagination from "./Pagination";

export default function Table(
{
   data,
   columns,
   navigateParams = {},
}) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState('')

    const { url, link } = navigateParams
    const navigate = useNavigate()

    const {
        setPageIndex,
        setPageSize,
        getPageCount,
        getState,
        getHeaderGroups,
        getRowModel,
        getPreFilteredRowModel,
    } = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
    })

    const totalPages = getPageCount()
    const currentPage = getState().pagination.pageIndex + 1
    const showPageCount = getState().pagination.pageSize

    return (
        <div className="p-10 mx-auto mt-[100px] w-2/4">
            <div className="flex justify-between">
                <div>
                    <input
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(String(e.target.value))}
                        className="p-2 border shadow rounded"
                        placeholder="Search all columns..."
                    />
                </div>
                <select
                    className="p-1 rounded-xl cursor-pointer"
                    value={showPageCount}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {getShowPagesCount(data.length).map(pageSize => (
                        <option className="cursor-pointer" key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <table className="mx-auto mt-8" border={1}>
                <thead>
                {getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="p-2 pb-4 border-r last:border-none">
                                {header.isPlaceholder ? null : (
                                    <>
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? 'text-white pb-2 cursor-pointer select-none'
                                                    : 'text-white pb-2',
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: ' 🔼',
                                                desc: ' 🔽',
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                        {header.column.getCanFilter() ? (
                                            <div>
                                                <Filter column={header.column} getPreFilteredRowModel={getPreFilteredRowModel} />
                                            </div>
                                        ) : null}
                                    </>
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className="border-t">
                {getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {url && link ? (
                            <Link to={`/${url}/${row.original[link]}/`}
                                  state={{ entity: row.original[url] }} // data transfer to the next table
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="p-2 border-r last:border-none">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </Link>
                        ) : (
                            row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="p-2 border-r last:border-none">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))
                        )}
                    </tr>
                    )
                )}
                </tbody>
            </table>
            {totalPages > 1 && (
                <Pagination totalPages={totalPages}
                            currentPage={currentPage}
                            onPage={setPageIndex}
                />
            )}
            {link !== '/' && (
                <div className="flex gap-4 items-center justify-center py-6">
                    <button className="btn-small" onClick={() => navigate(-1)}>back</button>
                    <button className="btn-small" onClick={() => navigate('/')}>home</button>
                </div>
            )}
        </div>
    )
}
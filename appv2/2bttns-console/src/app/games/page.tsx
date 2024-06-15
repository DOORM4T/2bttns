"use client";

import {
  GameCountSubscriptionDocument,
  GameCountSubscriptionSubscription,
  GameCountSubscriptionSubscriptionVariables,
  GetGamesQuery,
  OnGamesChangedDocument,
  OnGamesChangedSubscription,
  OnGamesChangedSubscriptionVariables,
  Order_By,
} from "@/gql/generated/graphql";
import { useSubscription } from "@apollo/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Game = OnGamesChangedSubscription["game"][0];

const Games = () => {
  //...
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const gameCountSubscripton = useSubscription<
    GameCountSubscriptionSubscription,
    GameCountSubscriptionSubscriptionVariables
  >(GameCountSubscriptionDocument);

  const gamesSubscription = useSubscription<
    OnGamesChangedSubscription,
    OnGamesChangedSubscriptionVariables
  >(OnGamesChangedDocument, {
    variables: {
      id_order_by: Order_By.DescNullsLast,
      name_order_by: Order_By.DescNullsLast,
      created_at_order_by: Order_By.DescNullsLast,
      updated_at_order_by: Order_By.DescNullsFirst,
      limit: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
    },
  });

  const columns: ColumnDef<Game>[] = [
    {
      header: "id",
      accessorKey: "game.id",
      accessorFn: (row: Game) => row.id,
      cell: (info) => info.getValue(),
    },
    {
      header: "name",
      accessorKey: "game.name",
      accessorFn: (row) => row.name,
      cell: (info) => info.getValue(),
    },
    {
      header: "created_at",
      accessorKey: "game.created_at",
      accessorFn: (row) => row.created_at,
      cell: (info) => new Date(String(info.getValue())).toLocaleString(),
    },
    {
      header: "updated_at",
      accessorKey: "game.updated_at",
      accessorFn: (row) => row.updated_at,
      cell: (info) => new Date(String(info.getValue())).toLocaleString(),
    },
  ];

  const table = useReactTable({
    columns,
    data: gamesSubscription.data?.game || [],
    rowCount: gameCountSubscripton.data?.game_aggregate?.aggregate?.count || 0,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    state: {
      //...
      pagination,
    },
    debugTable: true,
  });

  return (
    <div>
      <div className="relative p-2 bg-primary-content text-primary min-w-full min-h-full">
        <table className="table h-96">
          <thead className="sticky top-0 bg-primary-content">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="overflow-scroll max-h-2 h-2 bg-red-50">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="divider" />
        <div className="w-full flex flex-row justify-between">
          <div className="join rounded-sm">
            <button
              className="btn btn-sm join-item"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="btn btn-sm join-item"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              style={{ cursor: "pointer" }}
            >
              {"<"}
            </button>
            <span className="flex items-center px-4">
              <div>Page&nbsp;</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of&nbsp;
                {table.getPageCount().toLocaleString()}
              </strong>
            </span>
            <button
              className="btn btn-sm join-item"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              style={{ cursor: "pointer" }}
            >
              {">"}
            </button>
            <button
              className="btn btn-sm join-item"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          {gamesSubscription.loading ? "Loading..." : null}
          <div>
            Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
            {gamesSubscription.data?.game.length.toLocaleString()} Rows
          </div>
          <div className="flex flex-row gap-5 items-center">
            <span className="flex items-center gap-1">
              Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;

import React from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';

const DataTable = ({ data, columns, loading, error }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && data.length === 0 && (
        <p>No hay datos disponibles para la fecha seleccionada.</p>
      )}
      <table
        style={{ marginTop: '20px', width: '50%', borderCollapse: 'collapse' }}
      >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr
              key={headerGroup.id}
              style={{ borderBottom: '1px solid black' }}
            >
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{ padding: '10px', textAlign: 'left' }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} style={{ borderBottom: '1px solid black' }}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{ padding: '10px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

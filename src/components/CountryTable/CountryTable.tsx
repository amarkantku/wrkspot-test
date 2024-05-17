import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './CountryTable.css';
import Loader from '../../ui-kits/Loader/Loader';
import { Country } from '../../types/Country';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

interface CountryTableProps {
  countries: Country[];
  loading: boolean;
}

const clsx = classNames.bind(styles);
const columnHelper = createColumnHelper<Country>();
const CountryTable: React.FC<CountryTableProps> = ({
  countries,
  loading
}): JSX.Element => {
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('name', {
        header: 'Country Name',
        cell: (country) => country.getValue()
      }),
      columnHelper.accessor('abbreviation', {
        header: 'Code',
        cell: (country) => country.getValue()
      }),
      columnHelper.accessor('capital', {
        header: 'Capital',
        cell: (country) => country.getValue()
      }),
      columnHelper.accessor('phone', {
        header: 'Ph Code',
        cell: (country) => country.getValue()
      }),
      columnHelper.accessor('population', {
        header: 'Population',
        cell: (country) => country.getValue()?.toLocaleString()
      }),
      columnHelper.accessor('media.flag', {
        header: 'Flag',
        cell: (country) => (
          <img src={country.getValue()} alt='flag' width={50} height={30} />
        )
      }),
      columnHelper.accessor('media.emblem', {
        header: 'Emblem',
        cell: (country) => (
          <img src={country.getValue()} alt='flag' width={50} height={30} />
        )
      })
    ];
  }, []);

  const table = useReactTable({
    data: countries,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div>
      <ErrorBoundary>
        <table className={clsx('table')}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <th colSpan={columns.length}>
                  <Loader />
                </th>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </ErrorBoundary>
    </div>
  );
};

export default CountryTable;

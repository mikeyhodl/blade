/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line @typescript-eslint/no-empty-function
import React from 'react';
import type { TableNode } from '@table-library/react-table-library/table';
import type {
  TableBackgroundColors,
  TableProps,
  TablePaginationType,
  TableHeaderRowProps,
  TableNode as LocalTableNode,
} from './types';

export type TableContextType<Item> = {
  selectionType?: TableProps<unknown>['selectionType'];
  selectedRows?: TableNode['id'][];
  totalItems: number;
  toggleRowSelectionById: (id: TableNode['id']) => void;
  toggleAllRowsSelection: () => void;
  deselectAllRows: () => void;
  rowDensity: NonNullable<TableProps<unknown>['rowDensity']>;
  toggleSort: (sortKey: string) => void;
  currentSortedState: {
    sortKey: string;
    isSortReversed: boolean;
    sortableColumns?: string[];
  };
  setPaginationPage: (page: number) => void;
  setPaginationRowSize: (size: number) => void;
  currentPaginationState?: {
    page: number;
    size: number;
  };
  showStripedRows?: boolean;
  disabledRows: TableNode['id'][];
  setDisabledRows: React.Dispatch<React.SetStateAction<TableNode['id'][]>>;
  paginationType: NonNullable<TablePaginationType>;
  setPaginationType: React.Dispatch<React.SetStateAction<NonNullable<TablePaginationType>>>;
  backgroundColor: TableBackgroundColors | 'transparent';
  headerRowDensity?: TableHeaderRowProps['rowDensity'];
  setHeaderRowDensity: React.Dispatch<React.SetStateAction<TableHeaderRowProps['rowDensity']>>;
  showBorderedCells: NonNullable<TableProps<unknown>['showBorderedCells']>;
  hasHoverActions: boolean;
  setHasHoverActions: (hasHoverActions: boolean) => void;
  columnCount: number;
  gridTemplateColumns: string | undefined;
  isVirtualized?: boolean;
  tableData: LocalTableNode<Item>[];
  isGrouped: boolean;
};

const TableContext = React.createContext<TableContextType<unknown>>({
  selectionType: 'none',
  selectedRows: undefined,
  totalItems: 0,
  toggleRowSelectionById: () => {},
  toggleAllRowsSelection: () => {},
  deselectAllRows: () => {},
  rowDensity: 'normal',
  toggleSort: () => {},
  currentSortedState: {
    sortKey: '',
    isSortReversed: false,
  },
  setPaginationPage: () => {},
  setPaginationRowSize: () => {},
  disabledRows: [],
  setDisabledRows: () => {},
  paginationType: 'client',
  setPaginationType: () => {},
  backgroundColor: 'surface.background.gray.intense',
  setHeaderRowDensity: () => {},
  showBorderedCells: false,
  hasHoverActions: false,
  setHasHoverActions: () => {},
  columnCount: 0,
  gridTemplateColumns: undefined,
  isVirtualized: false,
  tableData: [],
  isGrouped: false,
});

const useTableContext = <Item,>(): TableContextType<Item> => {
  const context = React.useContext(TableContext as React.Context<TableContextType<Item>>);
  return context;
};

export { useTableContext, TableContext };

import type { TicketData } from "@/sharedTypes";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { ReactNode } from "react";

export type TableColumnName = Extract<
  keyof TicketData,
  "health" | "title" | "createdAt" | "ownerId" | "progress"
>;

export type TableColumn = Omit<GridColDef<TicketData>, "field"> & {
  field: TableColumnName;
};

export type TableRow = TicketData;

export type TableCellRenderMap = Record<
  TableColumnName,
  (params: GridRenderCellParams<TicketData>) => ReactNode
>;

export type TableData = {
  columns: TableColumn[];
  rows: TableRow[];
};

export type { TableData as TopRemediationsTableProps };

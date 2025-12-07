import HealthCellContent from "../HealthCellContent/HealthCellContent";
import ProgressCellContent from "../ProgressCellContent/ProgressCellContent";
import { TABLE_COLUMNS_STATIC_DATA } from "./TopRemediationsTable.constants";
import type {
  TableCellRenderMap,
  TableData,
} from "./TopRemediationsTable.types";
import TitleCellContent from "../TitleCellContent/TitleCellContent";
import type { TicketData } from "@/sharedTypes";
import CreatedAtCellContent from "../CreatedAtCellContent/CreatedAtCellContent";
import OwnerCellContent from "../OwnerCellContent/OwnerCellContent";

export const tableCellRenderMap: TableCellRenderMap = {
  health: ({ row }) => <HealthCellContent value={row.health} />,
  title: ({ row }) => <TitleCellContent title={row.title} />,
  createdAt: ({ row }) => <CreatedAtCellContent createdAt={row.createdAt} />,
  ownerId: ({ row }) => <OwnerCellContent ownerId={row.ownerId} />,
  progress: ({ row }) => <ProgressCellContent progress={row.progress} />,
};

export const parseTableData = (tickets: TicketData[]): TableData => {
  const columns = TABLE_COLUMNS_STATIC_DATA.map((column) => ({
    ...column,
    headerName: column.headerName?.toUpperCase(),
    renderCell: tableCellRenderMap[column.field],
  }));

  return { columns, rows: tickets };
};

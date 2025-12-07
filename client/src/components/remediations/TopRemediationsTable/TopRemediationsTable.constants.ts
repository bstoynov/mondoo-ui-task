import type { TableColumn } from "./TopRemediationsTable.types";

// TODO: check width
export const TABLE_COLUMNS_STATIC_DATA: TableColumn[] = [
  {
    field: "health",
    headerName: "Health",
    width: 110,
    sortable: true,
  },
  {
    field: "title",
    headerName: "Ticket",
    flex: 1,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created",
    width: 120,
    sortable: false,
  },
  {
    field: "ownerId",
    headerName: "Owner",
    width: 120,
    sortable: false,
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 140,
    sortable: false,
  },
];

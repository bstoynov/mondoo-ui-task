import { DataGrid } from "@mui/x-data-grid";
import type { TopRemediationsTableProps } from "./TopRemediationsTable.types";

// TODO: remove row border separator
function TopRemediationsTable({ rows, columns }: TopRemediationsTableProps) {
  return (
    // TODO: check sizing here
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "row even" : "row odd"
        }
        sx={(theme) => ({
          backgroundColor: "transparent",
          border: "none",
          ".even": {
            backgroundColor: theme.palette.background.primaryHighlightSubtle,
          },
          ".odd": {
            backgroundColor: "transparent",
          },
          ".row:hover": {
            backgroundColor: theme.palette.background.primaryHoverSubtle,
          },
          ".MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "space-between",
          },
        })}
      />
    </div>
  );
}

export default TopRemediationsTable;

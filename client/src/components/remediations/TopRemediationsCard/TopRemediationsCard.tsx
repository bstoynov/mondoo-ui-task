import { Stack } from "@mui/material";
import TopRemediationsHeader from "../TopRemediationsHeader/TopRemediationsHeader";
import TopRemediationsTable from "../TopRemediationsTable/TopRemediationsTable";
import useTickets from "@/hooks/useTickets";
import Shimmer from "@/components/Shimmer/Shimmer";
import { parseTableData } from "../TopRemediationsTable/TopRemediationsTable.utils";

function TopRemediationsCard() {
  const { data, loading } = useTickets();

  if (loading) return <Shimmer height={400} borderRadius={6} />;
  if (!data) return null;

  const { rows, columns } = parseTableData(data);

  return (
    <Stack
      padding={6}
      borderRadius={6}
      gap={4}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.primary,
      })}
    >
      <TopRemediationsHeader ticketCount={data.length} />
      <TopRemediationsTable rows={rows} columns={columns} />
    </Stack>
  );
}

export default TopRemediationsCard;

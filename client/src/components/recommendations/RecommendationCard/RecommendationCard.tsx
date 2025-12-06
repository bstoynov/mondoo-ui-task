import { Stack, Typography } from "@mui/material";
import RecommendationList from "../RecommendationList/RecommendationList";
import { useRecommendations } from "@/hooks";

function RecommendationCard() {
  // TODO: real spaceid
  const { data, loading, error } = useRecommendations("nasa-1");

  // TODO: handle loading
  if (loading) return null;
  if (!data) return null;

  return (
    <Stack
      direction="row"
      padding={8}
      borderRadius={6}
      gap={16}
      sx={(theme) => ({
        background: theme.palette.background.primary,
      })}
    >
      <Stack>
        <Typography
          fontSize={16}
          fontWeight={600}
          color="textPrimary"
          textTransform="uppercase"
        >
          Recommendations
        </Typography>
        <Typography fontSize={12} lineHeight={1.5} color="textSecondary">
          Steps to improve your system health
        </Typography>
      </Stack>

      <RecommendationList data={data} />
    </Stack>
  );
}

export default RecommendationCard;

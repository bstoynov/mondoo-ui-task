import { Stack, Typography } from "@mui/material";
import RecommendationList from "../RecommendationList/RecommendationList";
import { useRecommendations } from "@/hooks";
import Shimmer from "@/components/Shimmer/Shimmer";

function RecommendationCard() {
  const { data, loading } = useRecommendations();

  if (loading) {
    return <Shimmer height={106} borderRadius={6} />;
  }

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

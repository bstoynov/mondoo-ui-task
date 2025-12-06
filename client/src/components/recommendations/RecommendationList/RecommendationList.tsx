import { Stack } from "@mui/material";
import type { RecommendationListProps } from "./RecommendationList.types";
import RecommendationItem from "../RecommendationItem/RecommendationItem";
import { useState } from "react";

function RecommendationList({ data }: RecommendationListProps) {
  const [activeRecommendationId, setActiveRecommendationId] = useState(
    data[0].id
  );

  return (
    <Stack direction="row" gap={2}>
      {data.map(({ id, name, type }) => (
        <RecommendationItem
          key={`${id}-${type}`}
          id={id}
          name={name}
          type={type}
          active={id === activeRecommendationId}
          onClick={() => setActiveRecommendationId(id)}
        />
      ))}
    </Stack>
  );
}

export default RecommendationList;

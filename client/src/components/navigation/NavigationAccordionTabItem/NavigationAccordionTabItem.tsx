import { ButtonBase, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import type { NavigationAccordionTabItemProps } from "./NavigationAccordionTabItem.types";
import { ACCORDION_TRANSITION_PROPS } from "@/constants";

const MotionStack = motion.create(Stack);

function NavigationAccordionTabItem({
  name,
  tabs,
  renderTab,
}: NavigationAccordionTabItemProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Stack>
      <ButtonBase
        disableRipple
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1.5,
          paddingBottom: 1.5,
          position: "relative",
          color: theme.palette.text.primary,
          borderRadius: 2,
          ":hover": {
            background: theme.palette.background.primaryHover,
          },
        })}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <Typography
          fontSize={15}
          lineHeight={2}
          textTransform="uppercase"
          fontWeight={600}
          letterSpacing="0.06em"
        >
          {name}
        </Typography>

        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ButtonBase>

      <AnimatePresence>
        {expanded && (
          <MotionStack
            key="accordion-content"
            {...ACCORDION_TRANSITION_PROPS}
            gap={2}
          >
            {tabs.map(renderTab)}
          </MotionStack>
        )}
      </AnimatePresence>
    </Stack>
  );
}

export default NavigationAccordionTabItem;

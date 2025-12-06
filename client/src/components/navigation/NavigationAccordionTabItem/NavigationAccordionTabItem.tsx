import { ButtonBase, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import type { NavigationAccordionTabItemProps } from "./NavigationAccordionTabItem.types";

const MotionStack = motion(Stack);

function NavigationAccordionTabItem<T>({
  name,
  tabs,
  renderTab,
}: NavigationAccordionTabItemProps<T>) {
  const [expanded, setExpanded] = useState(false);

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
          ":hover": {
            color: theme.palette.text.primaryHover,
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
            // TODO: move animation to constants
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
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

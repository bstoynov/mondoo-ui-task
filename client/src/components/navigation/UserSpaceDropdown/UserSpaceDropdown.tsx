import { useState } from "react";
import UserSpaceDropdownItemBase from "../UserSpaceDropdownItemBase/UserSpaceDropdownItemBase";
import { Stack } from "@mui/material";
import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useReactiveVar } from "@apollo/client/react";
import { spaceIdVar } from "@/apollo/reactiveVars";
import { AnimatePresence, motion } from "motion/react";
import { useClickAway, useUser } from "@/hooks";
import { NAVIGATION_CARD_SIZE } from "../NavigationCard/NavigationCard.constants";
import { ACCORDION_TRANSITION_PROPS } from "@/constants";

const MotionStack = motion.create(Stack);

// TODO: on smaller macbook screen its cutoff (it opens down instead of up)
function UserSpaceDropdown() {
  const [expanded, setExpanded] = useState(false);
  const selectedSpaceId = useReactiveVar(spaceIdVar);
  const { spaces } = useUser();
  const selectedSpace = spaces?.find((space) => space.id === selectedSpaceId);
  const dropdownRef = useClickAway(() => setExpanded(false));

  if (!spaces || !selectedSpace) return;

  return (
    <Stack
      width={NAVIGATION_CARD_SIZE.width}
      position="relative"
      ref={dropdownRef}
    >
      <UserSpaceDropdownItemBase
        id={selectedSpace.id}
        name={selectedSpace.name}
        avatar={selectedSpace.avatar}
        onClick={() => setExpanded((prev) => !prev)}
        sx={{ borderRadius: 6, marginBottom: 3 }}
      >
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </UserSpaceDropdownItemBase>

      <AnimatePresence>
        {expanded ? (
          <MotionStack
            key="dropdown-content"
            {...ACCORDION_TRANSITION_PROPS}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            sx={{ transform: "translateY(100%)" }}
            borderRadius={6}
            overflow="hidden"
          >
            {spaces.map((space) => (
              <UserSpaceDropdownItemBase
                key={space.id}
                id={space.id}
                name={space.name}
                avatar={space.avatar}
                onClick={() => {
                  spaceIdVar(space.id);
                  setExpanded(false);
                }}
              >
                <Check sx={{ opacity: Number(selectedSpaceId === space.id) }} />
              </UserSpaceDropdownItemBase>
            ))}
          </MotionStack>
        ) : null}
      </AnimatePresence>
    </Stack>
  );
}

export default UserSpaceDropdown;

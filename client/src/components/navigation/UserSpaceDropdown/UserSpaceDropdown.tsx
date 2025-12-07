import { useState } from "react";
import UserSpaceDropdownItemBase from "../UserSpaceDropdownItemBase/UserSpaceDropdownItemBase";
import { Stack } from "@mui/material";
import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useReactiveVar } from "@apollo/client/react";
import { spaceIdVar } from "@/apollo/reactiveVars";
import { AnimatePresence, motion } from "motion/react";
import { useUser } from "@/hooks";

const MotionStack = motion.create(Stack);

function UserSpaceDropdown() {
  const [expanded, setExpanded] = useState(false);
  const selectedSpaceId = useReactiveVar(spaceIdVar);
  const { spaces } = useUser();
  const selectedSpace = spaces?.find((space) => space.id === selectedSpaceId);

  if (!spaces || !selectedSpace) return;

  return (
    // TODO: move width to constants
    <Stack width={240} position="relative">
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
            // TODO: move animation to constants
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
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

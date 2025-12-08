import { Box, ButtonBase, TextField, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTROL_SIZE } from "../Header/Header.constants";

const MotionBox = motion.create(Box);
const MotionTextField = motion.create(TextField);

function Search() {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`[Search]: ${text}`);
      }}
    >
      <MotionBox
        layout
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          setActive(false);
          setText("");
        }}
        position="relative"
        height={CONTROL_SIZE}
        marginLeft={active ? 53 : 0}
      >
        <ButtonBase
          type="submit"
          disableRipple
          sx={(theme) => ({
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: active ? 4 : 6,
            paddingRight: active ? 4 : 6,
            borderRadius: 999,
            background: theme.palette.background.primaryGradient,
            height: "100%",
            zIndex: 10,
          })}
        >
          {active ? (
            <SearchIcon fontSize="medium" />
          ) : (
            <Typography fontSize={13} color="textPrimary">
              Search
            </Typography>
          )}
        </ButtonBase>

        <AnimatePresence>
          {active && (
            <MotionTextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              key="search-field"
              placeholder="Search"
              initial={{ width: 0 }}
              animate={{ width: 240 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              sx={{
                position: "absolute",
                right: "50%",
                top: 0,
                bottom: 0,
                "& .MuiOutlinedInput-root": {
                  borderTopLeftRadius: 999,
                  borderBottomLeftRadius: 999,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            />
          )}
        </AnimatePresence>
      </MotionBox>
    </Box>
  );
}

export default Search;

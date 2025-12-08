import { useRef, useState } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangePicker, type DateRange } from "@mui/x-date-pickers-pro";
import { formatDateRange } from "./DateField.utils";
import { CONTROL_SIZE } from "../Header/Header.constants";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

function DateField() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MotionBox layout>
        <ButtonBase
          disableRipple
          ref={buttonRef}
          onClick={() => setOpen(true)}
          sx={(theme) => ({
            display: "flex",
            gap: 1,
            height: CONTROL_SIZE,
            background: theme.palette.background.secondary,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: CONTROL_SIZE,
          })}
        >
          <Typography fontSize={12} lineHeight={1.2} color="textAccent">
            {formatDateRange(value)}
          </Typography>
          <FilterList
            fontSize="small"
            sx={(theme) => ({ color: theme.palette.text.accent })}
          />
        </ButtonBase>
        <DateRangePicker
          open={open}
          onClose={() => setOpen(false)}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{
            field: () => null,
          }}
          slotProps={{
            popper: {
              anchorEl: () => buttonRef.current!,
            },
          }}
        />
      </MotionBox>
    </LocalizationProvider>
  );
}

export default DateField;

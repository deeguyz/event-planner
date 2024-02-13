import { styled, alpha } from "@mui/material/styles";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import { classes } from "../constants/classes";

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(
  ({ theme }) => ({
    [`&.${classes.today}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
  })
);

export default StyledWeekViewDayScaleCell;

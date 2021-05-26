import { FunctionComponent, Props } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StarIcon from "@material-ui/icons/Star";

import { cardColors } from "../../config/constant";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: "16px",
    backgroundColor: "#ee6688",
    padding: "16px",
    color: "white",
    margin: "16px",
    height: "calc(100% - 40px)",
  },
  starIcon: {
    color: "yellow",
    padding: "8px",
    borderRadius: "50%",
    background: "#222",
  },
}));

type ContentProps = {
  className?: string;
  isStar?: Boolean;
  content: string;
  color: number;
};

const Cards: FunctionComponent<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item lg={2} md={3} sm={6} xs={12}>
      <Paper className={classes.container} style={{background: cardColors[props.color]}}>
        <Grid hidden={!props.isStar}>
          <StarIcon fontSize="small" className={classes.starIcon} />
        </Grid>
        <Typography variant="body1">{props.content}</Typography>
      </Paper>
    </Grid>
  );
};

export default Cards;

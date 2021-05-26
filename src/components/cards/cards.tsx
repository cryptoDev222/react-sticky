import { FunctionComponent } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: "16px",
    backgroundColor: "#ee6688",
    padding: "16px",
    color: "white",
    margin: '16px',
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
};

const Cards: FunctionComponent<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item lg={2} md={3} sm={6} xs={12}>
      <Paper className={classes.container}>
        <Grid>
          <StarIcon fontSize="small" className={classes.starIcon} />
        </Grid>
        <Typography variant="body1">{props.content}</Typography>
      </Paper>
    </Grid>
  );
};

export default Cards;

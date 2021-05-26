import { FunctionComponent } from "react";
import { Grid, Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import FirstPageIcon from "@material-ui/icons/FirstPage";

import { cardColors } from "../../config/constant";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: "16px",
    backgroundColor: "#ee6688",
    padding: "16px 12px",
    color: "white",
    margin: "16px",
    height: "calc(100% - 40px)",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  starIcon: {
    color: "yellow",
    padding: "4px",
    borderRadius: "50%",
    background: "#222",
    position: "absolute",
    right: "12px",
    top: "12px",
  },
  content: {
    paddingInlineEnd: "24px",
  },
  iconBtn: {
    color: "white",
    background: "#333",
    width: "30px",
    height: "30px",
    margin: "0px 4px",
    "&:hover": {
      background: "#555",
    },
  },
  buttonContainer: {
    width: "fit-content",
  },
}));

type ContentProps = {
  className?: string;
  isStar?: Boolean;
  content: string;
  color: number;
  date: string;
  editCard: Function;
  toFirst: Function;
};

const Cards: FunctionComponent<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item lg={2} md={3} sm={6} xs={12}>
      <Paper
        className={classes.container}
        style={{ background: cardColors[props.color] }}
      >
        <Grid item>
          <Grid hidden={!props.isStar}>
            <StarIcon fontSize="small" className={classes.starIcon} />
          </Grid>
          <Typography
            className={props.isStar ? classes.content : ""}
            variant="body1"
          >
            {props.content}
          </Typography>
        </Grid>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="body1">{props.date}</Typography>
          <Grid container className={classes.buttonContainer}>
            <IconButton
              onClick={() => props.toFirst()}
              className={classes.iconBtn}
            >
              <FirstPageIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => props.editCard()}
              className={classes.iconBtn}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Cards;

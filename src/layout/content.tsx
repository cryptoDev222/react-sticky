import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "16px",
    paddingTop: "80px",
    "&>*:last-child": {
      marginRight: "auto",
    },
  },
}));

type ContentProps = {
  className?: string;
};

const Content: FunctionComponent<ContentProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="space-evenly" className={classes.container}>
      {props.children}
    </Grid>
  );
};

export default Content;

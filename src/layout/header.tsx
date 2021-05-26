import { Typography, AppBar, IconButton, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    padding: "8px",
  },
  iconBtn: {
    color: "white",
  }
}));

type HeaderProps = {
  addCards: Function;
}

const Header = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Grid container justify="space-between" alignItems="center">
      <Typography variant="h5">Sticky Notes</Typography>
      <IconButton onClick={() => props.addCards()} className={classes.iconBtn}>
        <AddIcon />
      </IconButton>
      </Grid>
    </AppBar>
  );
};

export default Header;

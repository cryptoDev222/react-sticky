import {
  Typography,
  AppBar,
  IconButton,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    padding: "8px",
  },
  iconBtn: {
    color: "white",
  },
  controllers: {
    width: "fit-content",
  },
}));

type HeaderProps = {
  addCards: Function;
  handleStar: Function;
  star: boolean;
};

const Header = (props: HeaderProps) => {
  const classes = useStyles();

  const handleChange = () => {
    props.handleStar();
  };

  return (
    <AppBar className={classes.appBar}>
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="h4">Sticky Notes</Typography>
        <Grid container className={classes.controllers}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.star}
                onChange={handleChange}
                name="checkedB"
                color="secondary"
              />
            }
            label="Star only"
          />
          <IconButton
            onClick={() => props.addCards()}
            className={classes.iconBtn}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

import { FunctionComponent, forwardRef, useState } from "react";
import {
  Grid,
  Typography,
  Dialog,
  Slide,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TransitionProps } from "@material-ui/core/transitions";

import { cardColors } from "../../config/constant";

const useStyles = makeStyles(() => ({
  colorCard: {
    height: "40px",
    width: "40px",
    cursor: "pointer",
    "&:hover, &.active": {
      border: "1px solid #333",
    },
  },
  modalContainer: {
    width: "100vw",
  },
  modalPaper: {
    width: "100%",
  },
}));

type CardModalProps = {
  isOpen: boolean;
  handleClose: Function;
  addCard: Function;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardModal: FunctionComponent<CardModalProps> = (props) => {
  const classes = useStyles();

  const [selectedColor, setColor] = useState(0);

  return (
    <Dialog
      classes={{ container: classes.modalContainer, paper: classes.modalPaper }}
      TransitionComponent={Transition}
      keepMounted
      open={props.isOpen}
      onClose={() => props.handleClose()}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Add Card</DialogTitle>
      <DialogContent>
        <Grid container>
          {cardColors.map((color, index) => (
            <Grid
              item
              key={index}
              lg={2}
              md={2}
              sm={2}
              className={
                selectedColor === index
                  ? `${classes.colorCard} active`
                  : classes.colorCard
              }
              onClick={() => setColor(index)}
              style={{ background: color }}
            ></Grid>
          ))}
        </Grid>
        <TextareaAutosize
          rowsMax={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
        />
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;

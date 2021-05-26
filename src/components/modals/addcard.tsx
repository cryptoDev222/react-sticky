import { FunctionComponent, forwardRef, useState, ChangeEvent } from "react";
import {
  Grid,
  Dialog,
  Slide,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TransitionProps } from "@material-ui/core/transitions";

import { cardColors } from "../../config/constant";

const useStyles = makeStyles(() => ({
  colorCard: {
    height: "40px",
    cursor: "pointer",
    "&:hover, &.active": {
      border: "1px solid #333",
    },
  },
  textField: {
    width: "100%",
    maxWidth: "100%",
    margin: "12px 0px",
  },
  modalContainer: {
    width: "100vw",
  },
  modalPaper: {
    width: "100%",
  },
  checkBoxWrapper: {
    width: "100%",
    marginTop: "8px",
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

  const [isStar, setStar] = useState(false);

  const [content, setContent] = useState("");

  const handleChange = () => {
    setStar((star) => !star);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const reset = () => {
    setColor(0);
    setStar(false);
    setContent("");
  };

  const addCard = () => {
    props.addCard(content, selectedColor, isStar);
    reset();
  };

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
        <Grid container justify="center">
          <Grid container>
            {cardColors.map((color, index) => (
              <Grid
                item
                key={index}
                lg={2}
                md={2}
                sm={2}
                xs={2}
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
          <Grid item className={classes.checkBoxWrapper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isStar}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Star"
            />
          </Grid>
          <TextareaAutosize
            value={content}
            onChange={handleContentChange}
            className={classes.textField}
            rowsMax={4}
            rows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
          />
          <Button variant="outlined" color="primary" onClick={addCard}>
            Add Card
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;

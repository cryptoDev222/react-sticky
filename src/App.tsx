import React from "react";
import "./App.css";
import Header from "./layout/header";
import Content from "./layout/content";
import Card from "./components/cards/cards";
import CardModal from "./components/modals/addcard"

import { cardColors } from "./config/constant";
import { ThemeProvider, colors, Grid } from "@material-ui/core";
import theme from "./theme";

function App() {
  const [cards, setCards] = React.useState([]);

  const [cardModal, setCardModal] = React.useState(false);

  const handleOpen = () => {
    setCardModal(true)
  }

  const handleClose = () => {
    setCardModal(false);
  };

  const addCards = () => {
    console.log("Hello!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CardModal isOpen={cardModal} handleClose={handleClose} addCard={addCards} />
      <Header addCards={handleOpen} />
      <Content>
        <Card content="This is test card! asdfsa dfasdfas dfasdfasd fasdfsd fasdfasdf \n\n\n\n\n \nsdfasdf asdf" />
        <Card content="This is test card! asdfsa dfasdfas dfasdfasd fasdfsd fasdfasdf \n\n\n\n\n \nsdfasdf asdf" />
        <Card content="This is test card! asdfsa dfasdfas dfasdfasd fasdfsd fasdfasdf \n\n\n\n\n \nsdfasdf asdf" />
        <Card content="This is test card! asdfsa dfasdfas dfasdfasd fasdfsd fasdfasdf \n\n\n\n\n \nsdfasdf asdf" />
        <Card content="This is test card! asdfsa dfasdfas dfasdfasd fasdfsd fasdfasdf \n\n\n\n\n \nsdfasdf asdf" />
      </Content>
    </ThemeProvider>
  );
}

export default App;

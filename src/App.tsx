import React from "react";
import "./App.css";
import Header from "./layout/header";
import Content from "./layout/content";
import Card from "./components/cards/cards";
import CardModal from "./components/modals/addcard";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  const [cards, setCards] = React.useState<
    Array<{ content: string; color: number; isStar: boolean }>
  >([]);

  const [cardModal, setCardModal] = React.useState(false);

  const handleOpen = () => {
    setCardModal(true);
  };

  const handleClose = () => {
    setCardModal(false);
  };

  const addCards = (content: string, color: number, isStar: boolean) => {
    setCards((cards) => [...cards, { content, color, isStar }]);

    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <CardModal
        isOpen={cardModal}
        handleClose={handleClose}
        addCard={addCards}
      />
      <Header addCards={handleOpen} />
      <Content>
        {cards.map((card, index) => (
          <Card key={index} color={card.color} isStar={card.isStar} content={card.content} />
        ))}
      </Content>
    </ThemeProvider>
  );
}

export default App;

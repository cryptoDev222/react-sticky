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
    Array<{ content: string; color: number; isStar: boolean; date: string }>
  >([]);

  const [cardModal, setCardModal] = React.useState(false);

  const [isEdit, setEdit] = React.useState(-1);

  const [starOnly, setStarOnly] = React.useState(true);

  const handleOpen = () => {
    setEdit(-1);
    setCardModal(true);
  };

  const handleClose = () => {
    setCardModal(false);
  };

  const handleStar = () => {
    setStarOnly((star) => !star);
  };

  const addCards = (
    content: string,
    color: number,
    isStar: boolean,
    date: string
  ) => {
    setCards((cards) => [...cards, { content, color, isStar, date }]);

    handleClose();
  };

  const saveCard = (
    content: string,
    color: number,
    isStar: boolean,
    date: string
  ) => {
    const card = { content, color, isStar, date };

    setCards((cards) => {
      cards[isEdit] = card;
      return cards;
    });

    handleClose();
  };

  const cardToFirst = (index: number) => {
    setCards((temp) => {
      const card = temp.splice(index, 1)[0];
      cards.unshift(card);

      return [...cards];
    });
  };

  const editCard = (index: number) => {
    setEdit(index);
    setCardModal(true);
  };

  const displayData = starOnly
    ? cards.filter((card) => card.isStar === true)
    : cards;

  return (
    <ThemeProvider theme={theme}>
      <CardModal
        isOpen={cardModal}
        editData={cards[isEdit]}
        isEdit={isEdit !== -1}
        handleClose={handleClose}
        addCard={addCards}
        saveCard={saveCard}
      />
      <Header star={starOnly} handleStar={handleStar} addCards={handleOpen} />
      <Content>
        {displayData.map((card, index) => (
          <Card
            key={index}
            color={card.color}
            isStar={card.isStar}
            content={card.content}
            date={card.date}
            editCard={() => editCard(index)}
            toFirst={() => cardToFirst(index)}
          />
        ))}
      </Content>
    </ThemeProvider>
  );
}

export default App;

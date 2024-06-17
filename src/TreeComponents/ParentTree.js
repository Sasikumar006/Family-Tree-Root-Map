import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Card, Button, CardBody } from "reactstrap";

const MainCard = (props) => {
  const { onRemove, number } = props

  return (
    <Card>
      <Button
        className="ui mini red basic icon button"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
        }}
        onClick={() => onRemove()}
      >
        <i
          className="red x icon"
          style={{
            position: "relative",
            top: "0",
            right: "0",
          }}
        ></i>
      </Button>
      <CardBody>{number}</CardBody>
    </Card>
  );
};

export {MainCard}



export default function ParentTree() {
  return (
    <div>
      ParentTree
      
    </div>
  )
}

export const CardApp = () => {
  const [cards, setCards] = useState([]); // instantiate cards as a empty Array

  const addCard = () => {
    // create a new array with the old values and the new random one
    const newCards = [...cards, Math.floor(Math.random() * 100)];

    setCards(newCards);
  };

  const removeCard = (cardIndex) => {
    // create a new array without the item that you are removing
    const newCards = cards.filter((card, index) => index !== cardIndex);

    setCards(newCards);
  };

  return (
    <body>
      <header>
        <div className="ui buttons">
          <button className="ui button mb-1 mt-1" onClick={() => addCard()}>
            <i className="plus icon"></i>
            Add Card
          </button>
          <div className="or mb-1 mt-1"></div>
          <button
            className="ui positive button mb-1 mt-1"
            onClick={() => addCard()}
          >
            <i className="sort numeric down icon"></i>
            Sort All
          </button>
        </div>
      </header>
      <main>
        {cards.map((cardNumber, index) => (
          <MainCard number={cardNumber} onRemove={() => removeCard(index)} />
        ))}
      </main>
    </body>
  );
};
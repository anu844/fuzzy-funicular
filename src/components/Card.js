import React, { useState } from 'react';

const Card = ({ color, number, image, description }) => {
  const [cardColor, setCardColor] = useState(color);
  const [cardNumber, setCardNumber] = useState(number);
  const [cardImage, setCardImage] = useState(image);
  const [cardDescription, setCardDescription] = useState(description);

  return (
    <div style={{ backgroundColor: cardColor }}>
      <img src={cardImage} alt={cardDescription} />
      <p style={{ color: 'green'}}>{cardNumber}</p>
      <button onClick={() => setCardColor('red')}>Muuda värvi</button>
      <button onClick={() => setCardNumber(cardNumber + 1)}>Suurenda numbrit</button>
    </div>
  );
};

export default Card;

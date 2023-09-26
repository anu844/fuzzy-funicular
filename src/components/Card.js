import React, { useState } from 'react';

const Card = ({ color, number, image, description }) => {
  const [cardColor, setCardColor] = useState(color);
  const [cardNumber, setCardNumber] = useState(number);
  const [cardImage, setCardImage] = useState(image);
  const [cardDescription, setCardDescription] = useState(description);
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    if (isRed) {
      setCardColor(color); // Taasta algne värv
    } else {
      setCardColor('rgb(161, 19, 19)'); // Muuda värv punaseks
    }
    setIsRed(!isRed); // Vaheta värvi olekut
  };

  const changeDescription = () => {
    const newDescription = prompt('Sisesta uus kirjeldus:'); // prompt kuvab dialoogakna tekstisisestusväljaga ja küsib sisendit
    if (newDescription !== null) {
      setCardDescription(newDescription);
    }
  };

  return (
    <div style={{ backgroundColor: cardColor }}>
      <img src={cardImage} alt={cardDescription} />
      <p style={{ color: 'white', fontSize: '50px', fontWeight: 'bold' }}>{cardDescription}</p>
      <p style={{ color: 'white', fontSize: '100px', fontWeight: 'bold' }}>{cardNumber}</p>
      <button onClick={toggleColor}>Muuda kaardi värvi</button>
      <button onClick={() => setCardNumber(cardNumber + 1)}>Suurenda numbrit</button>
      <button onClick={() => setCardNumber(cardNumber - 1)}>Vähenda numbrit</button>
      <button onClick={changeDescription}>Muuda kirjeldust</button>
    </div>
  );
};

export default Card;

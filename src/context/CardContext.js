import { createContext, useContext, useState } from 'react';
import CardData from '../constants/CardData.js';

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(CardData);

  return (
    <CardContext.Provider value={{ cards }}>
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider;

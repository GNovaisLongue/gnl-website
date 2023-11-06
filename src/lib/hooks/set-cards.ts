import { useEffect, useRef, useState } from "react";
import { shuffleCards } from "../utils/shuffle-cards";

interface cardProp {
  symbol: string;
  status: string;
}

export default function setCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<cardProp[]>([]);
  const disabledClick = useRef(true);
  const prevIndex = useRef(-1);

  useEffect(() => {
    loadCardsData();
  }, []);

  //begins face-up and then face every card down
  const loadCardsData = () => {
    const data = shuffleCards("faceup"); //faceup, facedown
    setCards(data);
    setIsLoading(false);
    disabledClick.current = true;

    setTimeout(() => {
      setCards((prevCards) =>
        [...prevCards].map((card) => ({ ...card, status: "facedown" }))
      );
      disabledClick.current = false;
    }, 1500);
  };

  const updateStatus = (cardArr: cardProp[], status: string) => {
    cardArr.forEach((card) => (card.status = status));
    setCards([...cards]);
  };

  const handleClick = (i: number) => {
    if (disabledClick.current) return;

    const currentCard = cards[i];
    const prevCard = cards[prevIndex.current];

    if (currentCard.status === "matched") return;

    updateStatus([currentCard], "faceup");

    if (!prevCard || prevIndex.current === i) {
      prevIndex.current = i;
      return;
    }
    if (currentCard.symbol === prevCard.symbol) {
      updateStatus([currentCard, prevCard], "matched");
    } else {
      disabledClick.current = true;
      setTimeout(() => {
        updateStatus([currentCard, prevCard], "facedown");
        disabledClick.current = false;
      }, 800);
    }
    prevIndex.current = -1;
  };

  return { cards, handleClick, loadCardsData, disabledClick, isLoading };
}

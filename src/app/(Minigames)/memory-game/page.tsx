"use client";

import * as S from "@/styles/memory-game";
import Card from "@/components/memory-game/Card";
import setCards from "@/lib/hooks/set-cards";

export default function MemoryGame() {
  const { isLoading, cards, handleClick, loadCardsData, disabledClick } =
    setCards();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* <S.Logo /> */}
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col items-center space-y-4 bg-blue-400">
          <S.CardContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleClick(index)}
                symbol={card.symbol}
                status={card.status}
              />
            ))}
          </S.CardContainer>
          <S.RestartButton
            onClick={loadCardsData}
            disabled={disabledClick.current}
          >
            RESTART ✔
          </S.RestartButton>
        </div>
      )}
    </div>
  );
}

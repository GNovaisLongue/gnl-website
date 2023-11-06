"use client";

import * as S from "@/styles/guess-color-game";
import React, { useEffect, useRef, useState } from "react";

export default function ColorGuess() {
  const [color, setColor] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState<string[]>([]);

  const loadColors = () => {
    setIsLoading(false);
    setColor(getRandomColor());
  };

  const getRandomColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  useEffect(() => {
    loadColors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col items-center space-y-4 bg-blue-400">
          <S.CardContainer style={{ background: color }}></S.CardContainer>

          <S.RestartButton onClick={loadColors}>RESTART ✔</S.RestartButton>
        </div>
      )}
    </div>
  );
}

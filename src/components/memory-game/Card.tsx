"use client";

import React from "react";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import { cardstyling } from "@/styles/memory-game";

import "animate.css";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  status: string;
  symbol: string;
}

export default function Card({ onClick, status, symbol }: Props) {
  return (
    <style.Card key={`card-${status}`} onClick={onClick} status={status}>
      {status === "facedown" ? " " : symbol}
    </style.Card>
  );
}

const style = {
  Card: styled.button<{ status: string }>`
    ${cardstyling}
    border-color: ${(p) => (p.status === "matched" ? "#FF9900" : "violet")};
    background-color: ${(p) => (p.status === "facedown" ? "#AA0197" : "#FFF")};
    animation: ${(p) => (p.status === "matched" ? "tada" : "flipInY")};
    animation-duration: 1s;
  `,
};

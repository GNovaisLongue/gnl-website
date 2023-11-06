export const symbols = [
  "👑",
  "⭐",
  "🎃",
  "🍀",
  "🦄",
  "🎈",
  "👹",
  "☂",
  "🤖",
  "👻",
];

export function shuffleCards(status: string) {
  return [...symbols, ...symbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol) => ({ symbol, status: status }));
}

export type CardType = {
  id: string;
  image: string;
  isVisible: boolean;
};

export type Difficulty = "Easy" | "Normal" | "Hard" | "Very Hard" | "Expert";

export type GameTimer = {
  start: () => void;
  pause: () => void;
};

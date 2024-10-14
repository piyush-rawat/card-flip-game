"use client";
import Button from "@/components/Button";
import DifficultySelector from "@/components/DifficultySelector";
import Game from "@/components/Game";
import { useGameStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { difficulty, setDifficulty } = useGameStore();

  const [showDifficultyModal, setShowDifficultyModal] = useState(false);

  const [showGameScreen, setShowGameScreen] = useState(false);

  const handleStartGame = () => {
    setShowGameScreen(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-12 justify-center items-center">
      <motion.h1
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 0 }}
        className="text-5xl text-orange-950 drop-shadow-2xl text-center font-nable"
      >
        Welcome to CardFlip Game
      </motion.h1>

      <div className="text-center space-y-3">
        <p className="text-3xl text-orange-950">Select difficulty</p>

        <Button
          label={difficulty.toUpperCase()}
          onClick={() => setShowDifficultyModal(true)}
        />
      </div>

      <Button label="Start" onClick={handleStartGame} />

      <AnimatePresence>
        {showDifficultyModal && (
          <DifficultySelector
            onSelect={(difficulty) => setDifficulty(difficulty)}
            onDismiss={() => setShowDifficultyModal(false)}
          />
        )}
      </AnimatePresence>

      {showGameScreen && <Game onQuit={() => setShowGameScreen(false)} />}
    </div>
  );
}

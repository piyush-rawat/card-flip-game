import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import _ from "lodash";
import CardItem from "./Card";
import { CardType, GameTimer } from "@/types";
import { imageNames } from "@/utils/data";
import { v4 as uuid } from "uuid";
import QuitConfirmationModal from "./QuitConfirmationModal";
import Button from "./Button";
import TimeUpModal from "./TimeUpModal";
import { useGameStore } from "@/store";
import clsx from "clsx";
import Countdown from "./Countdown";
import ReadyModal from "./ReadyModal";
import CongratsModal from "./CongratsModal";
import Confetti from "./Confetti";

const Game = ({ onQuit }: { onQuit: () => void }) => {
  const { difficulty } = useGameStore();

  const [showReadyModal, setShowReadyModal] = useState(true);

  const [showTimeOutModal, setShowTimeOutModal] = useState(false);

  const [showQuitConfirmationModal, setShowQuitConfirmationModal] =
    useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  const currentCard = useRef<CardType | null>(null);
  const prevCard = useRef<CardType | null>(null);

  const getUniqueCardsCount = (): number => {
    switch (difficulty) {
      case "Easy":
        return 8;
      case "Normal":
        return 18;
      case "Hard":
        return 32;
      case "Very Hard":
        return 50;
      case "Expert":
        return 72;
      default:
        return 0;
    }
  };

  const random = _.sampleSize(imageNames, getUniqueCardsCount());

  const cards: CardType[] = [...random, ...random].map((item) => ({
    id: uuid(),
    image: item,
    isVisible: false,
  }));

  const [shuffledCards, setShuffledCards] = useState<CardType[]>(
    _.shuffle(_.shuffle(cards))
  );

  const openCard = (id: string) => {
    setShuffledCards((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, isVisible: true } : { ...card }
      )
    );
  };
  const closeCard = (id: string) => {
    setShuffledCards((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, isVisible: false } : { ...card }
      )
    );
  };

  const checkAllCardsMatched = () => {
    let count = 0;
    shuffledCards.map((card) => {
      if (card.isVisible === false) {
        count += 1;
      }
    });
    console.log(count);
    if (count === 0) {
      // alert("Game Completed");
      // Party Animation
      pauseGameTimer();
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    checkAllCardsMatched();
  }, [shuffledCards]);

  const handleCardClick = (card: CardType) => {
    if (card.isVisible) return;

    openCard(card.id);

    if (currentCard.current) {
      prevCard.current = currentCard.current;
      currentCard.current = card;

      if (prevCard.current.image === currentCard.current.image) {
        prevCard.current = null;
        currentCard.current = null;
      } else {
        closeCard(prevCard.current.id);
      }
    } else {
      currentCard.current = card;
    }
  };

  const gameTimerRef = useRef<GameTimer | null>(null);

  const startGameTimer = () => {
    gameTimerRef.current && gameTimerRef.current.start();
  };

  const pauseGameTimer = () => {
    gameTimerRef.current && gameTimerRef.current.pause();
  };

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{
          x: 0,
        }}
        className="fixed w-screen h-screen bg-custom flex flex-col justify-center items-center"
      >
        <div className="absolute top-10 right-10">
          <Button
            label="Quit"
            onClick={() => {
              pauseGameTimer();
              setShowQuitConfirmationModal(true);
            }}
          />
        </div>
        <div className="flex gap-4 mb-10 text-2xl">
          Time Left:
          <Countdown
            showMinute={true}
            autoStart={false}
            ref={gameTimerRef}
            // time={59000}
            time={
              difficulty === "Easy"
                ? 59000
                : difficulty === "Normal"
                ? 120000
                : difficulty === "Hard"
                ? 180000
                : difficulty === "Very Hard"
                ? 240000
                : 300000
            }
            onComplete={() => setShowTimeOutModal(true)}
          />
        </div>

        {/* <div>
          <p>Prev {prevCard?.current?.image}</p>
          <p>Current {currentCard?.current?.image}</p>
        </div> */}

        <div
          className={clsx(
            "inline-grid gap-2",
            difficulty === "Easy"
              ? "grid-cols-4"
              : difficulty === "Normal"
              ? "grid-cols-6"
              : difficulty === "Hard"
              ? "grid-cols-8"
              : difficulty === "Very Hard"
              ? "grid-cols-10"
              : difficulty === "Expert"
              ? "grid-cols-12"
              : ""
          )}
        >
          {shuffledCards.map((card) => (
            <CardItem
              key={card.id}
              difficulty={difficulty}
              card={card}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showReadyModal && (
          <ReadyModal
            onDismiss={() => {
              setShowReadyModal(false);
              startGameTimer();
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuitConfirmationModal && (
          <QuitConfirmationModal
            onQuit={() => {
              setShowQuitConfirmationModal(false);
              onQuit();
            }}
            onDismiss={() => {
              setShowQuitConfirmationModal(false);
              startGameTimer();
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>{showTimeOutModal && <TimeUpModal />}</AnimatePresence>

      {showConfetti && <CongratsModal />}

      <Confetti trigger={showConfetti} />
    </>
  );
};

export default Game;

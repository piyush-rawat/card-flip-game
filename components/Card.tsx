import { motion } from "framer-motion";
import { CardType, Difficulty } from "@/types";
import StackIcon from "tech-stack-icons";
import clsx from "clsx";

const Card = ({
  difficulty,
  card,
  onClick,
}: {
  difficulty: Difficulty;
  card: CardType;
  onClick: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={clsx(
        "relative w-[100px] h-[100px] cursor-pointer",
        (difficulty === "Hard" ||
          difficulty === "Very Hard" ||
          difficulty === "Expert") &&
          "w-[50px] h-[50px]"
      )}
    >
      <motion.div
        animate={{ rotateY: !card.isVisible ? 0 : 180 }}
        className="w-full h-full absolute bg-orange-600 rounded-lg"
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={clsx(
          "w-full h-full p-4 absolute rounded-lg bg-orange-200",
          (difficulty === "Hard" ||
            difficulty === "Very Hard" ||
            difficulty === "Expert") &&
            "p-[4px]"
        )}
        animate={{ rotateY: card.isVisible ? 0 : 180 }}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        transition={{ duration: 0.2 }}
      >
        <StackIcon
          name={card.image}
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;

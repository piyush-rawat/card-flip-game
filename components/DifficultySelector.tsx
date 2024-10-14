import { motion } from "framer-motion";
import { Difficulty } from "../types";

const DifficultySelector = ({
  onSelect,
  onDismiss,
}: {
  onSelect: (difficulty: Difficulty) => void;
  onDismiss: () => void;
}) => {
  const difficulty: Difficulty[] = [
    "Easy",
    "Normal",
    "Hard",
    "Very Hard",
    "Expert",
  ];

  const handleClick = (diff: Difficulty) => {
    onSelect(diff);
    onDismiss();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="bg-gradient-to-r from-orange-300 to-yellow-500 p-10 rounded-xl"
      >
        <h1 className="text-5xl">Select Difficulty</h1>
        <div className="flex flex-col gap-2">
          {difficulty.map((diff) => (
            <button
              key={diff}
              onClick={() => handleClick(diff)}
              className="border-2 border-orange-950 px-4 py-2 rounded-lg outline-none bg-orange-300"
            >
              {diff}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DifficultySelector;

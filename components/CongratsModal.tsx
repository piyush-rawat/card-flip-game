import { motion } from "framer-motion";
import Button from "./Button";

const CongratsModal = () => {
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
        className="bg-gradient-to-r from-orange-300 to-yellow-500 p-10 rounded-xl text-center"
      >
        <h1 className="text-2xl">Congrats 🎉</h1>
        <h1 className="text-2xl mb-3">You won the game</h1>
        <div className="flex justify-around">
          {/* <Button label="Yes" onClick={onQuit} /> */}
          <Button
            label="Home"
            onClick={() => {
              location.reload();
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CongratsModal;

import { motion } from "framer-motion";
import Countdown from "./Countdown";

const ReadyModal = ({ onDismiss }: { onDismiss: () => void }) => {
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
        <h1 className="text-2xl mb-3">Get Ready</h1>
        <h1 className="text-2xl mb-3">Game starts in</h1>
        <div className="flex justify-around">
          <Countdown
            time={3000}
            onComplete={onDismiss}
            autoStart={true}
            showMinute={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReadyModal;

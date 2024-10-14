import { motion } from "framer-motion";
import Button from "./Button";

const QuitConfirmationModal = ({
  onQuit,
  onDismiss,
}: {
  onQuit: () => void;
  onDismiss: () => void;
}) => {
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
        <h1 className="text-2xl mb-3">Are you sure you want to quit ?</h1>
        <div className="flex justify-around">
          <Button label="Yes" onClick={onQuit} />
          <Button label="No" onClick={onDismiss} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuitConfirmationModal;

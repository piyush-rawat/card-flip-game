import { motion } from "framer-motion";

const Button = ({ onClick, label }: { label: string; onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      className="border-2 border-orange-950 px-4 py-2 rounded-lg bg-orange-300 drop-shadow-md text-orange-950"
    >
      {label}
    </motion.button>
  );
};

export default Button;

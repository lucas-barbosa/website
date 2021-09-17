import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/modal/backdrop.module.scss";

interface BackdropProps {
  handleClose: () => void;
  children: ReactNode;
}
const Backdrop: React.FC<BackdropProps> = ({ children, handleClose }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;

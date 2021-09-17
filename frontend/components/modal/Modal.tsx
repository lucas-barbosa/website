import React from "react";
import styles from "../../styles/modal/modal.module.scss";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

interface ModalProps {
  handleClose: () => void;
  text: string;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "50vh",
    opacity: 0,
  },
};
const Modal: React.FC<ModalProps> = ({ handleClose, text }) => {
  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ><button onClick={handleClose}>close</button></motion.div>
      
    </Backdrop>
  );
};

export default Modal;

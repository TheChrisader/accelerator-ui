import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export interface IModalBackdrop {
  closeModal: () => void;
}

const Backdrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 49;
`;

const animation = {
  hidden: {
    opacity: 0,
    transtion: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ModalBackdrop: React.FC<IModalBackdrop> = ({ closeModal }) => {
  return (
    <Backdrop
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="background"
      onClick={closeModal}
    />
  );
};

export default ModalBackdrop;

import React, { Children } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import ModalBackdrop from "./ModalBackdrop";
import ModalPopup from "./ModalPopup";

export interface IModal {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}

const ModalWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  pointer-events: none;
`;

const animation = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.25,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const Modal: React.FC<IModal> = ({ open, setOpen, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <ModalWrapper
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="modal"
          >
            <ModalPopup closeModal={setOpen}>
              <>{children}</>
            </ModalPopup>
          </ModalWrapper>
          <ModalBackdrop closeModal={setOpen} />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

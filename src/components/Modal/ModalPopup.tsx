import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { getStyle } from "../../../util/getStyle";
import ThemeContext from "../../context/ThemeContext";

interface IPopup {
  closeModal: () => void;
  children: JSX.Element;
}

const Popup = styled.div<{ background: string; color: string }>`
  position: relative;
  padding: 30px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 10px;
  z-index: 51;
  width: 40%;
  max-height: 100%;
  overflow-y: auto;
  pointer-events: auto;
  transition: width 0.5s ease;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
  }
`;

const CloseModal = styled.button<{ main: any }>`
  position: absolute;
  top: 12px;
  right: 15px;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 25px;
  color: ${(props) => props.main.primary.default};
  cursor: pointer;
  transform-origin: center;
  transition: transform 0.25s;
  &:hover {
    color: ${(props) => props.main.primary.light};
    transform: scale(1.25);
  }
`;

const ModalPopup: React.FC<IPopup> = ({ closeModal, children }) => {
  const currentTheme = React.useContext(ThemeContext);

  const [color, text] = getStyle(currentTheme);

  return (
    <Popup background={color.white} color={text.primary}>
      <CloseModal main={color} onClick={closeModal}>
        <FaTimes />
      </CloseModal>
      {children}
    </Popup>
  );
};

export default ModalPopup;

import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";

import ThemeContext from "../../context/ThemeContext";
import useOnClickOutside from "../../../util/hooks/useOnClickOutside";
import { getStyle } from "../../../util/getStyle";

export interface IDropDown {
  options: {
    option: string;
    action?: () => void;
  }[];
}

interface IOption {
  $alt?: boolean;
}

const DropDownWrapper = styled.div`
  z-index: 52;
  display: flex;
  position: relative;
  height: fit-content;
  width: fit-content;
`;

const DropButton = styled.button<{ color: string; background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 22px;
  opacity: 1;
  color: ${(props) => props.color};
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  border-radius: 50px;
  padding: 5px;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.background};
  }
`;

const DropIcon = styled(FaEllipsisV)`
  font-size: 20px;
`;

const OptionsWrapper = styled.div<{ background: string }>`
  position: absolute;
  top: 120%;
  /* left: -400%; */
  display: flex;
  gap: 5px;
  align-items: flex-start;
  flex-direction: column;
  width: 200px;
  background-color: ${(props) => props.background};
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 5px rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`;

const Option = styled.button<{ color: string; background: string }>`
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 10px;
  margin-left: 0;
  padding: 10px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s ease;
  &:hover {
    background-color: ${(props) => props.background};
  }
`;

const DropDown: React.FC<IDropDown> = ({ options }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTheme = React.useContext(ThemeContext);

  const [color, text] = getStyle(currentTheme);

  const handleClick = (callback: Function) => {
    if (callback) callback();
    setOpenDropDown(false);
  };

  const handleOutsideClick = useCallback(() => {
    setOpenDropDown(false);
  }, []);

  useOnClickOutside(
    dropdownRef as React.MutableRefObject<HTMLDivElement>,
    handleOutsideClick
  );

  return (
    <DropDownWrapper ref={dropdownRef}>
      <DropButton
        type="button"
        color={text.secondary}
        background={color.background}
        onClick={() => setOpenDropDown((prev) => !prev)}
      >
        <DropIcon />
      </DropButton>
      {openDropDown && (
        <OptionsWrapper background={color.white}>
          {options.map((item: any, i: number) => (
            <Option
              color={text.secondary}
              background={color.background}
              type="button"
              onClick={() => handleClick(item.action)}
              key={i}
            >
              {item.option}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;

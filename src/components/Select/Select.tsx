import React, { useState, useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";
import { FaChevronDown } from "react-icons/fa";

import useOnClickOutside from "../../../util/hooks/useOnClickOutside";
import ThemeContext from "../../context/ThemeContext";
import { getStyle } from "../../../util/getStyle";

export interface ISelect extends React.ComponentPropsWithoutRef<"div"> {
  options: string[];
  status: string;
  name?: string;
  bottom?: boolean;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
}

interface ITrigger {
  open: boolean;
  main: any;
  text?: any;
}

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-height: fit-content;
  box-sizing: border-box;
`;

const Trigger = styled.button<ITrigger>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-height: fit-content;
  color: ${(props) => props.text.secondary};
  font-size: inherit;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.open ? props.main.primary.background : props.main.background};
  padding: 8px 15px;
  text-transform: capitalize;
  transition: border 0.25s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
    border-color: ${(props) => props.main.primary.default};
  }
`;

const TriggerText = styled.span<ITrigger>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 10px;
  color: ${(props) => (props.open ? props.main.primary.default : "inherit")};
`;

const TriggerIcon = styled(FaChevronDown)<ITrigger>`
  color: ${(props) => props.main.primary.default};
  transform: ${(props) => (props.open ? "rotate(180deg)" : "none")};
  transition: transform 0.35s, color 0.5s;
`;

const OptionsWrapper = styled.div<{ main: any; bottom?: boolean }>`
  position: absolute;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  max-height: 250px;
  flex-direction: column;
  height: fit-content;
  ${(props) =>
    !props.bottom
      ? css`
          bottom: 40px;
        `
      : css`
          top: 40px;
        `};
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => props.main.white};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 5px 10px 5px rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  box-sizing: border-box;
`;

const Option = styled.button<{ main: any; text: any }>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.text.secondary};
  font-size: 15px;
  text-transform: capitalize;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.main.primary.background};
  }
`;

const OptionText = styled.span``;

const SelectFormik: React.FC<ISelect> = ({
  name,
  options,
  status,
  bottom = true,
  ...props
}) => {
  const currentTheme = React.useContext(ThemeContext);
  const [color, text] = getStyle(currentTheme);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const helpers = useField(name!)[2];

  const { setValue } = helpers;

  const handleChange = (item: string) => {
    setValue(item);
    setOpen(false);
  };

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(
    dropdownRef as React.MutableRefObject<HTMLDivElement>,
    handleClickOutside
  );

  return (
    <SelectWrapper ref={dropdownRef} {...props}>
      <Trigger
        main={color}
        text={text}
        type="button"
        role="combobox"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <TriggerText main={color} open={open}>
          {status}
        </TriggerText>
        <TriggerIcon main={color} text={text} open={open} />
      </Trigger>
      {open && (
        <OptionsWrapper main={color} bottom={bottom}>
          {options.map((item: string, index: number) => (
            <Option
              main={color}
              text={text}
              role="option"
              type="button"
              key={index}
              onClick={() => handleChange(item)}
            >
              <OptionText>{item}</OptionText>
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </SelectWrapper>
  );
};

const SelectUseState: React.FC<ISelect> = ({
  options,
  status,
  setStatus,
  bottom = true,
  ...props
}) => {
  const currentTheme = React.useContext(ThemeContext);
  const [color, text] = getStyle(currentTheme);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (item: string) => {
    setStatus!(item);
    setOpen(false);
  };

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(
    dropdownRef as React.MutableRefObject<HTMLDivElement>,
    handleClickOutside
  );

  return (
    <SelectWrapper ref={dropdownRef} {...props}>
      <Trigger
        main={color}
        text={text}
        type="button"
        role="combobox"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <TriggerText main={color} open={open}>
          {status}
        </TriggerText>
        <TriggerIcon main={color} text={text} open={open} />
      </Trigger>
      {open && (
        <OptionsWrapper main={color} bottom={bottom}>
          {options.map((item: string, index: number) => (
            <Option
              main={color}
              text={text}
              role="option"
              type="button"
              key={index}
              onClick={() => handleChange(item)}
            >
              <OptionText>{item}</OptionText>
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </SelectWrapper>
  );
};

const Select: React.FC<ISelect> = ({
  name,
  options,
  status,
  setStatus,
  bottom,
}) => {
  if (name) {
    return (
      <SelectFormik
        name={name}
        options={options}
        status={status}
        bottom={bottom}
      />
    );
  } else if (setStatus) {
    return (
      <SelectUseState
        options={options}
        status={status}
        setStatus={setStatus}
        bottom={bottom}
      />
    );
  } else {
    return <></>;
  }
};

export default Select;

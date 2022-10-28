import React from "react";
import styled from "styled-components";
import { getStyle } from "../../../util/getStyle";
import ThemeContext from "../../context/ThemeContext";

export interface ICheckbox {
  children?: string;
  checked?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
}

interface ILabel {
  checked?: boolean;
  main: any;
  text: any;
}

const Label = styled.label<ILabel>`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: ${(props) => props.main.white};
  color: ${(props) =>
    props.checked ? props.text.secondary : props.main.primary.dark};
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: inherit;
  font-weight: inherit;
  user-select: none;
  text-decoration: line-through;
  text-decoration-color: ${(props) =>
    props.checked ? props.text.secondary : "transparent"};
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => props.main.background};
  }
  & > input[type="checkbox"] {
    cursor: pointer;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.checked ? props.main.primary.default : "transparent"};
    margin-right: 10px;
    min-width: 16px;
    height: 16px;
    border: 1px solid ${(props) => props.main.primary.default};
    border-radius: 5px;
    transition: background-color 0.25s, transform 0.25s;
    &:checked {
      border: 0;
      background-color: ${(props) => props.main.primary.default};
    }
  }
  & > input[type="checkbox"]::before {
    content: "";
    width: 10px;
    height: 10px;
    transform-origin: bottom left;
    transform: scale(0);
    background-color: ${(props) => props.main.white};
    clip-path: polygon(14% 40%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  & > input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  & > input[type="checkbox"]:focus-visible {
    outline-offset: max(2px, 17px);
  }
  & > input[type="checkbox"]:disabled {
    color: ${(props) => props.main.background};
    cursor: not-allowed;
  }
`;

const Checkbox: React.FC<ICheckbox> = ({ children, checked, variant }) => {
  const [check, setCheck] = React.useState(checked || false);

  const currentTheme = React.useContext(ThemeContext);

  const [color, text] = getStyle(currentTheme, variant);

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <Label main={color} text={text} checked={check}>
      <input type="checkbox" checked={check} onChange={handleChange} />
      {children}
    </Label>
  );
};

export default Checkbox;

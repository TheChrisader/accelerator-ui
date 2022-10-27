import React from "react";
import { useField, ErrorMessage as FormikError, FieldInputProps } from "formik";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import { getStyle } from "../../../util/getStyle";

export interface IField extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  name: string;
}

interface IInput extends FieldInputProps<any> {
  valid: boolean;
  main: any;
  text: any;
}

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const InputLabel = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 400;
  margin-bottom: 5px;
`;

const Input = styled.input<IInput>`
  height: 35px;
  max-width: 100%;
  color: ${(props) => props.text.primary};
  background-color: ${(props) => props.main.white};
  border: 1px solid
    ${(props) =>
      props.valid ? props.main.primary.border : props.main.danger.default};
  border-radius: 5px;
  padding: 15px;
  transition: border 0.1s;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.main.primary.default};
  }
`;

const ErrorMessage = styled(FormikError)<{ color: string }>`
  color: ${(props) => props.color};
`;

const Field: React.FC<IField> = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);

  const currentTheme = React.useContext(ThemeContext);

  const [color, text] = getStyle(currentTheme);

  return (
    <>
      <InputWrapper>
        {label && <InputLabel color={text.secondary}>{label}</InputLabel>}

        <Input
          {...field}
          main={color}
          text={text}
          valid={!(meta.touched && meta.error)}
          {...props}
        />
        <ErrorMessage
          color={color.danger.default}
          name={name}
          component="span"
        />
      </InputWrapper>
    </>
  );
};

export default Field;

import React from "react";
import styled from "styled-components";
import { MdFileUpload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { handleFileInputChange } from "../../../util/helpers";
import ThemeContext from "../../context/ThemeContext";
import { getStyle } from "../../../util/getStyle";

export interface ImageUploadProps {
  url?: string;
  preview: boolean;
  generateURL: React.Dispatch<React.SetStateAction<string>>;
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50px;
`;

const StyledLabel = styled.label`
  display: flex;
`;

const StyledUploadIcon = styled(MdFileUpload)<{ color: string }>`
  cursor: pointer;
  font-size: 25px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.5);
  }
`;

const StyledInput = styled.input`
  width: 0;
  height: 0;

  &:focus {
    outline: none;
  }

  &:focus + ${StyledUploadIcon} {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const StyledDeleteIcon = styled(RiDeleteBin6Line)<{ color: string }>`
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.5);
  }
`;

const ImageUpload: React.FC<ImageUploadProps> = ({
  url,
  generateURL,
  preview = false,
}) => {
  const currentTheme = React.useContext(ThemeContext);

  const [color, text] = getStyle(currentTheme);

  return (
    <StyledWrapper>
      {preview && <StyledImage src={url} />}
      <StyledLabel>
        <StyledInput
          type="file"
          onChange={(e) => handleFileInputChange(e, generateURL)}
        />
        <StyledUploadIcon color={color.primary.default} />
      </StyledLabel>
      <StyledButton type="button" onClick={() => generateURL("")}>
        <StyledDeleteIcon color={color.primary.default} />
      </StyledButton>
    </StyledWrapper>
  );
};

export default ImageUpload;

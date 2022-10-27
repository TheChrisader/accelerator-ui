import React from "react";
import styled from "styled-components";

import ThemeContext from "../../context/ThemeContext";
import { getStyle } from "../../../util/getStyle";

export interface CardProps {
  children: React.ReactNode;
  imageSrc?: string;
  title?: string;
}

interface IStyledCard {
  background: string;
  text: any;
}

const StyledCard = styled.div<IStyledCard>`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
  font-family: "Poppins", "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 400px;
  height: fit-content;
  background-color: ${(props) => props.background};
  color: ${(props) => props.text.secondary};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);

  @media screen and (max-width: 400px) {
    max-width: fit-content;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    transform: scale(1.15);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 25px;
`;

const Card: React.FC<CardProps> = ({ children, imageSrc, title }) => {
  const currentTheme = React.useContext(ThemeContext);
  const [color, text] = getStyle(currentTheme);

  return (
    <StyledCard
      text={text}
      background={color.white}
      data-testid="Card"
      className="foo-bar"
    >
      {imageSrc && (
        <ImageContainer>
          <Image src={imageSrc} alt={"card image"} />
        </ImageContainer>
      )}
      <InfoWrapper>
        {title && <Title>{title}</Title>}
        {children}
      </InfoWrapper>
    </StyledCard>
  );
};

export default Card;

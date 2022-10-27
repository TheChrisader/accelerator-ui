import React from "react";
import styled from "styled-components";

export interface CardProps {
  foo: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card: React.FC<CardProps> = ({ foo }) => (
  <div data-testid="Card" className="foo-bar">
    {foo}
  </div>
);

export default Card;

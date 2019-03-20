import styled from "styled-components";
import Button from "../button";

export const Wrapper = styled.div`
  width: 50vw;
  padding: 2rem;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Joke = styled.p`
  padding: 0;
  font-size: 2rem;
  font-family: "Alfa Slab One", cursive;
  text-align: center;
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const JokeCount = styled.p`
  flex-grow: 1;
  text-align: center;
  color: grey;
`;

export const Next = styled(Button).attrs(() => ({ circle: true }))``;

export const Previous = styled(Next)``;

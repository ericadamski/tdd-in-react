import styled, { css } from "styled-components";
import Colors from "../../utils/colors";

const circle = css`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`;

export const Wrapper = styled.button`
  border: none;
  color: ${Colors.white};
  background-color: ${props => props.color};
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.circle && circle};
  transition: all 0.2s ease;
  outline-color: ${props => props.color};

  &:hover {
    cursor: pointer;
    backface-visibility: hidden;
    transform: scale(1.1) translate3d(0, 0, 0);
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

import styled from "styled-components";
import Colors from "../../utils/colors";

export const Page = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const FlashContainer = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  background: transparent;
`;

export const Flash = styled.section`
    position: relative;
    transition: all 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;

    &:before {
        content: "${props => props.label}";
        color: ${Colors.purple};
        margin-right: 1rem;
    }
`;

// font-family: 'Alfa Slab One', cursive;

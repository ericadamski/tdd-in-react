import styled from "styled-components";
import Colors from "../../utils/colors";

export const A = styled.a`
  text-decoration: underline;
  text-decoration-color: ${Colors.purple};

  &:hover {
    color: ${Colors.purple};
    cursor: pointer;
  }
`;

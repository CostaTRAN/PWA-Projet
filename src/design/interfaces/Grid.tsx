import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
`;
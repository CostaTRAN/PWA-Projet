import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
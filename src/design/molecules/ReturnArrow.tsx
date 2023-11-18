import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BackArrow = styled("div")({
  height: "24px",
  gap: "0.25rem",
  color: "rgb(255, 255, 255)",
  padding: "1rem",
  backdropFilter: "blur(35px)",
  overflow: "hidden",
  display: "flex",
  flex: "1",
});

function ReturnArrow() {
  return (
    <StyledLink to={"/"}>
      <BackArrow>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>{" "}
        Back
      </BackArrow>
    </StyledLink>
  );
}

export default ReturnArrow;

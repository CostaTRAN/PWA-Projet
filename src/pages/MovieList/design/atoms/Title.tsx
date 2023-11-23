import styled from "@emotion/styled";

export const Title = styled("p")({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  color: "#000",
  margin: "0",
  "@media (min-width:640px)": {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  "@media (prefers-color-scheme: dark)": {
    color: "#fff",
  },
})
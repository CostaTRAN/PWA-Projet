import styled from "@emotion/styled";

export const Search = styled("input")({
    paddingLeft: "1rem",
    borderRadius: "9999px",
    border: "none",
    minWidth:"100%",
    height: "38px",
    ":focus-visible": {
        borderColor: "black",
    },
    "@media (min-width:640px)": {
        minWidth:"20rem",
    },
    "@media (prefers-color-scheme: dark)": {
        backgroundColor: "rgb(55 65 81)",
        color: "white",
    },
})
import styled from "@emotion/styled";

export const CardLoading = styled("div")({
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    width: "auto",
    height: "436px",
    borderRadius: "0.375rem",
    cursor: "pointer",

    backgroundColor:"#e0e0e0",

    "@media (prefers-color-scheme: dark)": {
        backgroundColor: "rgb(41, 51, 65)"
    },

    animation: "pulse 1.5s infinite",
    "@keyframes pulse" : {
      "0%, 100%" : {
        opacity:" 0.4",
      },
      "50%" : {
        opacity: "1",
      }
    }
})
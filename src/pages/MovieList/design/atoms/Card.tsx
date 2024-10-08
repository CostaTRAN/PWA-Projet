import styled from "@emotion/styled";

export const Card = styled("div")({
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    width: "100%",
    height: "auto",
    transitionProperty: "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    borderRadius: "0.375rem",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    },
})
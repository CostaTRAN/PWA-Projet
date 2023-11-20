import styled from "@emotion/styled";

const Card = styled("div")({
    minWidth: "200px",
})

const Image = styled("img")({
    borderRadius: "0.375rem",
    maxWidth: "100%",
    height: "300px",
})

const Name = styled("p")({
    color: "white",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    margin:"0"
})

const Role = styled("p")({
    color: "rgb(214 211 209)",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    margin:"0"
})

export const CreditCard = ({id, poster_path} : {id:string, poster_path: string}) => {
    return (
        <Card>
            {id}
        </Card>
    )
  };
import styled from "@emotion/styled";
import noImage from "/NoImagePeople.svg";
import { imageBaseURL } from "../../services/configServices";

export const CreditCard = ({name, profile_path, role} : {name:string, profile_path: string, role:string}) => {
    return (
        <Card>
            {profile_path != null ?
                <Image src={`${imageBaseURL}${profile_path}`} alt={name} />
                :
                <Image src={noImage} alt={name + " No Image"} />
            }
            <Name>{name}</Name>
            <Role>{role}</Role>
        </Card>
    )
  };

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
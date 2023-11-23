import styled from "@emotion/styled";
import noImage from "/NoImagePeople.svg";
import { imageBaseURL } from "../../repository/services/configServices";

import { CreditImage } from "../atoms/CreditImage";
import { CreditName } from "../atoms/CreditName";
import { CreditRole } from "../atoms/CreditRole";

export const CreditCard = ({name, profile_path, role} : {name:string, profile_path: string, role:string}) => {
    return (
        <Card>
            {profile_path != null ?
                <CreditImage src={`${imageBaseURL}${profile_path}`} alt={name} />
                :
                <CreditImage src={noImage} alt={name + " No Image"} />
            }
            <CreditName>{name}</CreditName>
            <CreditRole>{role}</CreditRole>
        </Card>
    )
}

const Card = styled("div")({
    minWidth: "200px",
})
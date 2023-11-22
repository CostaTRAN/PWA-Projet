import { Card } from "../atoms/Card"
import { Image } from "../atoms/Image"
import { Link } from "react-router-dom";
import { imageBaseURL } from "../../services/configServices";
import NoImage from "/NoImagePoster.svg?url";

export const MovieCard = ({id, poster_path} : {id:string, poster_path: string}) => {
  return (

    <Link to={"/movie/"+id}>
      <Card>
        { poster_path != null ?
            <Image src={imageBaseURL + poster_path} alt="image poster"/>
            :
            <Image src={NoImage} alt="no image poster"/>
          }
        
      </Card>
    </Link>
  )
};
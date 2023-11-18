import { Card } from "../atoms/Card"
import { Image } from "../atoms/Image"
import { Link } from "react-router-dom";

export const MovieCard = ({id, poster_path} : {id:string, poster_path: string}) => {
  return (

    <Link to={"/movie/"+id}>
      <Card>
        <Image src={"https://image.tmdb.org/t/p/original/" + poster_path} alt="image poster"/>
      </Card>
    </Link>
  )
};
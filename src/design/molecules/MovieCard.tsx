import { Card } from "../atoms/Card"
import { Image } from "../atoms/Image"
import { Link } from "react-router-dom";

export const MovieCard = ({id, poster_path} : {id:string, poster_path: string}) => {
  return (

    <Link to={"/movie/"+id}>
      <Card>
        { poster_path != null ?
            <Image src={"https://image.tmdb.org/t/p/original/" + poster_path} alt="image poster"/>
            :
            <Image src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"} alt="no image poster"/>
          }
        
      </Card>
    </Link>
  )
};
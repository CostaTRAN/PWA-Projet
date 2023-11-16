import { Card } from "../atoms/Card"
import { Image } from "../atoms/Image"

export const MovieCard = ({poster_path} : {poster_path: string}) => {
  return (
    <Card>
      <Image src={"https://image.tmdb.org/t/p/original/" + poster_path} alt="image poster"/>
    </Card>
  )
};
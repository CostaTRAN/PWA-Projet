import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchMovieCredits } from "../../services/fetchMovieCredits";

const Title = styled("p")({
    color: "white",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    margin:"0"
})

const CastCard = styled("div")({
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    paddingTop: "0.5rem",
    overflowX: "scroll",
})

const Actor = styled("div")({
    minWidth: "200px",
})

const ActorImage = styled("img")({
    borderRadius: "0.375rem",
    maxWidth: "100%",
    height: "300px",
})

const ActorName = styled("p")({
    color: "white",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    margin:"0"
})

const ActorCharacter = styled("p")({
    color: "rgb(214 211 209)",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    margin:"0"
})

function MovieCredits() {
    const { id } = useParams<{ id: string }>();
    const { data:credits , isLoading , isError } = useFetchMovieCredits(id as unknown as string);

    return (
        <div>
            <Title>Credits</Title>
            { isLoading ? <div>Loading...</div> :
                <CastCard >
                    { credits.cast.map((actor : {id:number, name:string, character:string, profile_path:string}) => (
                    <Actor key={actor.id}>
                        <ActorImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} />
                        <ActorName>{actor.name}</ActorName>
                        <ActorCharacter>{actor.character}</ActorCharacter>
                    </Actor>)) }
                </CastCard> 
            }
            { isError && <div>Error</div> }
        </div>
    )
}

export default MovieCredits;
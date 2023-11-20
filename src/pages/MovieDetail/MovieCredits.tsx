import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchMovieCredits } from "../../services/fetchMovieCredits";

const noImage = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";

const Title = styled("p")({
    color: "white",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    margin:"0"
})

const CastCard = styled("div")({
    display: "flex",
    gap: "1.5rem",
    paddingTop: "0.5rem",
    overflowX: "scroll",
})

const CrewMember = styled("div")({
    minWidth: "200px",
})

const CrewMemberImage = styled("img")({
    borderRadius: "0.375rem",
    maxWidth: "100%",
    height: "300px",
})

const CrewMemberName = styled("p")({
    color: "white",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    margin:"0"
})

const CrewMemberCharacter = styled("p")({
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
                    { credits.cast.map((crewMember : {id:number, name:string, character:string, profile_path:string}) => (
                    <CrewMember key={crewMember.id}>

                        { crewMember.profile_path != null ?
                            <CrewMemberImage src={`https://image.tmdb.org/t/p/original/${crewMember.profile_path}`} alt={crewMember.name} />
                            :
                            <CrewMemberImage src={noImage} alt={crewMember.name + " No Image"} />
                        }
                        <CrewMemberName>{crewMember.name}</CrewMemberName>
                        <CrewMemberCharacter>{crewMember.character}</CrewMemberCharacter>
                    </CrewMember>)) }
                </CastCard> 
            }
            { isError && <div>Error</div> }
        </div>
    )
}

export default MovieCredits;
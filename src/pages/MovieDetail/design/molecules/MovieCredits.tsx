import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchMovieCredits } from "../../repository/services/fetchMovieCredits";
import { CreditCard } from "./CreditCard";

function MovieCredits() {
    const { id } = useParams<{ id: string }>();
    const { data:credits , isLoading , isError } = useFetchMovieCredits(id as unknown as string);

    const castMembers = credits?.cast.slice(0, 10);
    const crewMembers = credits?.crew.filter((crewMember:any) => crewMember.job === "Director" || crewMember.job === "Original Music Composer");

    return (
        <div>
            <Title>Credits</Title>
            { isLoading ? <div>Loading...</div> :
                <Container >
                    {
                        castMembers.map((castMember : {id:number, name:string, profile_path:string, character:string}) => (
                            <CreditCard key={castMember.id} name={castMember.name} profile_path={castMember.profile_path} role={castMember.character}/>
                        ))
                    }
                    {
                        crewMembers.map((crewMember : {id:number, name:string, profile_path:string, job:string}) => (
                            <CreditCard key={crewMember.id} name={crewMember.name} profile_path={crewMember.profile_path} role={crewMember.job}/>
                        ))
                    }
                </Container>
            }
            { isError && <div>Error</div> }
        </div>
    )
}

export default MovieCredits;

const Title = styled("p")({
    color: "white",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    margin:"0"
})

const Container = styled("div")({
    display: "flex",
    gap: "1.5rem",
    paddingTop: "0.5rem",
    overflowX: "scroll",
})
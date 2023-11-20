import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchMovieImages } from "../../services/fetchMovieImages";

const Title = styled("p")({
    color: "white",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    margin:"0"
})

const ImagesContainer = styled("div")({
    display: "flex",
    overflowX: "scroll",
    gap: "1.5rem",
    paddingTop: "0.5rem",
})

const Image = styled("img")({
    width: "1200px",
    maxWidth: "100%",
    borderRadius: "0.375rem",
})

function MovieImages(/*{ images }: { images: string[] }*/) {    
    const { id } = useParams<{ id: string }>();
    const { data:images , isLoading , isError } = useFetchMovieImages(id as unknown as string);

    return (
        <div>
            <Title>Images</Title>
            { isLoading ? <div>Loading...</div> :
            <ImagesContainer>
                { images?.backdrops.map((image: any) => (
                    <Image src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt="movie image" />
                ))}
            </ImagesContainer>
            }
            { isError && <div>Error</div> }
        </div>
    )
}
 
export default MovieImages;
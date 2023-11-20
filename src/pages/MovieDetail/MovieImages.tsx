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

interface Image {
    id:string;
    iso_639_1: string | null;
    file_path: string;
}

function MovieImages(/*{ images }: { images: string[] }*/) {    
    const { id } = useParams<{ id: string }>();
    const { data:images , isLoading , isError } = useFetchMovieImages(id as unknown as string);

    if( isLoading ){
        return(<div>Loading...</div>)
    }

    const filteredImages = images?.backdrops.filter(
        (image:Image) =>
        image.iso_639_1 == null
    );

    return (
        <div>
            <Title>Images</Title>
            <ImagesContainer>
                { filteredImages?.map((image: any) => (
                    <Image src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt="movie image" key={image.id} />
                ))}
            </ImagesContainer>
            { isError && <div>Error</div> }
        </div>
    )
}
 
export default MovieImages;
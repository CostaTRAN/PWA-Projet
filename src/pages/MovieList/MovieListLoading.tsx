import { CardLoading } from "./design/atoms/CardLoading";
import { Grid } from "./design/atoms/Grid";

function MovieListLoading () {
    return (
        <Grid>
            {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((_,id: number) => 
                <CardLoading key={id}/>
            )}
        </Grid>
    );
};

export default MovieListLoading;
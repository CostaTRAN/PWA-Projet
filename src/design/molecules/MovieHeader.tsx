import styled from "@emotion/styled";
import { Search } from "../atoms/Search";
import { Title } from "../atoms/Title";

const Header = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    "@media (min-width:640px)":{
      justifyContent: "space-between",
    },
    gap: "1rem"
})

function MovieHeader() {
  return (
    <Header>
      <Title>🎬🍿 Movie library</Title>
      <Search placeholder=' 🔎 Search for movie' />
    </Header>
  )
}

export default MovieHeader
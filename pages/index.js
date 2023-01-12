import styled from "styled-components";
import Navbar from "../components/Navbar";
const Container = styled.div`
display: flex;
justify-content: center;
`
const H1 = styled.h1`
color:red;
`

export default function Home() {
  return (
   <>
      <Navbar/>
        <Container>
        <H1>Home</H1>
        </Container>
        </>
  )
}

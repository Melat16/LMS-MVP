import styled from "styled-components";


const Navbar = () => {
    return ( 
            <Container>
        <Leftcontainer>
       <H2>LUCY ACADEMY</H2>
        </Leftcontainer>

        <Rightcontainer>
    
        </Rightcontainer>
            </Container>
     )
}
const Container = styled.div`
max-height:100px;
padding-left:3%;
background: rgb(1,96,93);
display: flex;
`
const Leftcontainer = styled.div`
margin: 20px;
margin-left: 20px;
float: left;
`

const Rightcontainer = styled.div`
margin: 20px;
margin-left: 50%;
float: right;
`
const H2 = styled.h1`
color: white;
font-weight:lighter;
word-spacing: 0.4em;
`
export default Navbar;
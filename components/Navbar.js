import styled from "styled-components";

const Container = styled.div`
max-height:100px;
background: rgba(20,20,50,0.2);
justify-content: center;
display: flex;
`
const Leftcontainer = styled.div`
margin: 20px;
margin-left: 50px;
float: left;
`

const Rightcontainer = styled.div`
margin: 20px;
margin-left: 50%;
float: right;
`
const H1 = styled.h1`
color: white;

`
const Navbar = () => {
    return ( 
            <Container>
        <Leftcontainer>
       <H1>WARKA</H1>
        </Leftcontainer>

        <Rightcontainer>
        <H1>Courses</H1>
        </Rightcontainer>
            </Container>
     )
}
 
export default Navbar;
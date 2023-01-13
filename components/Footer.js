import styled from "styled-components";

// const Container = styled.div`

// ` 

const ButtomContainer = styled.div`
background: rgb(1,96,93);
justify-content:center;
display:flex;
height:70px;
padding-top:20px;

`
const P = styled.p`
color:white;


`
const  Footer = () => {
    return ( 
<ButtomContainer>
    <P>&copy; Copyright 2022 iCog Anyone Can Code. All Rights Reserved</P>
</ButtomContainer>

     );
}
 
export default Footer;
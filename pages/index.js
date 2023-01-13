import styled from "styled-components";
import Navbar from "../components/Navbar";
import Image from 'next/image';
import Child from "../public/child.png";



const Container = styled.div`
height: 100vh;
width: 100vw;
background-color:white;
`
const Container2 = styled.div`
margin-top:3%;
  `
const Right = styled.div`
float: right;
width: 50%;
`

const Left = styled.div`
float:left;
width: 50%;
padding: 5%;
margin-top:6%;
`
const H1 = styled.h1`
color:black;
font-size:42px;
font-weight: bold;
word-spacing: 3px;
margin-top:0px;
`
const P = styled.p`
color: black;
font-size: 22px;
font-weight:lighter;
margin-top: 4%;
margin-bottom: 2%;
line-height:25px;
word-spacing: 3px;
`
const Button = styled.button`
border:none;
height:70px;
width:200px;
margin-top: 4%;
background-color: rgba(219, 130, 0, 1);
color: white;
font-size: 22px;
font-weight:bold;
`


export default function Home() {
  return (
    <Container>
     <Navbar />
     <Container2>
    <Right>
    <Image
      src={Child}
      width={650}
      height={550}
      alt="Picture of the author"
    />
    </Right>
    <Left>
    <H1>BUILDING FUTURE GENERATIONS OF ENGINEERS</H1>
    <P>Inspiring children to reach their full potential by teaching 
      them <br/>the latest technologies in software development and digital literacy. <br/>Join us in the journey. </P>
    <Button>Get Started</Button>
    </Left>
    </Container2>
   </Container>

  )
}

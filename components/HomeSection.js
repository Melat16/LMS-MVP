import styled from "styled-components";
import Image from "next/image";
import Child from "../public/child.png";

export default function Home2() {
  return (
    <Container>
      <Right>
        <Image
          src={Child}
          width={650}
          height={550}
          alt="Picture of the author"
        />
      </Right>
      <Left>
        <H1>BUILDING FUTURE GENERATIONS OF </H1>
        <H2>ENGINEERS</H2>
        <P>
          Inspiring children to reach their full potential by teaching them the
          latest technologies in software development and digital literacy. Join
          us in the journey.{" "}
        </P>
        <Button>Get Started</Button>
      </Left>
    </Container>
  );
}
const Container = styled.div`
  height: 670px;
  width: 100vw;
  background-color: white;
  padding-top: 100px;
`;
const Container2 = styled.div`
  margin-top: 3%;
`;
const Right = styled.div`
  float: right;
  width: 50%;
`;

const Left = styled.div`
  float: left;
  width: 50%;
  padding: 5%;
`;
const H1 = styled.h1`
  color: black;
  font-size: 42px;
  font-weight: bold;
  word-spacing: 3px;
  margin-top: 0px;
`;
const H2 = styled.h1`
  color: rgba(1, 96, 93, 1);
  font-size: 42px;
  font-weight: bold;
  word-spacing: 3px;
  margin-top: 0px;
`;
const P = styled.p`
  color: black;
  font-size: 22px;
  font-weight: lighter;
  margin-top: 4%;
  margin-bottom: 2%;
  line-height: 25px;
  word-spacing: 3px;
`;
const Button = styled.button`
  border: none;
  height: 70px;
  width: 200px;
  margin-top: 4%;
  background-color: rgba(219, 130, 0, 1);
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

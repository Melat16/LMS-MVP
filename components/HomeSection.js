import styled from "styled-components";
import Image from "next/image";
import Child from "../public/child.png";
import Link from "next/link";

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
        <Link href="#courses">
          <Button>Start Free Trial</Button>
        </Link>
      </Left>
    </Container>
  );
}
const Container = styled.div`
  height: 670px;
  width: 100vw;
  background-color: white;
  padding-top: 100px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
    height: 570px;
  }
`;
const Container2 = styled.div`
  margin-top: 3%;
`;
const Right = styled.div`
  float: right;
  width: 50%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: none;
  }
`;

const Left = styled.div`
  float: left;
  width: 50%;
  padding: 5%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }
`;
const H1 = styled.h1`
  color: black;
  font-size: 42px;
  font-weight: bold;
  word-spacing: 3px;
  margin-top: 0px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 36px;
    font-weight: bold;
  }
`;
const H2 = styled.h1`
  color: rgba(1, 96, 93, 1);
  font-size: 42px;
  font-weight: bold;
  word-spacing: 3px;
  margin-top: 0px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 36px;
    font-weight: bold;
  }
`;
const P = styled.p`
  color: black;
  font-size: 22px;
  font-weight: lighter;
  margin-top: 4%;
  margin-bottom: 2%;
  line-height: 25px;
  word-spacing: 3px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 19px;
  }
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

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 70px;
  }
`;

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <Container>
      <Leftcontainer>
        <Link href="/">
          <H2>LUCY ACADEMY</H2>
        </Link>
      </Leftcontainer>

      <Rightcontainer>
        <Link href={currentPath === "/" ? "#courses" : "/#courses"}>
          <P>Courses</P>
        </Link>
        <Link href={currentPath === "/" ? "#courses" : "/#courses"}>
          <Button>Start Free Trial</Button>
        </Link>
      </Rightcontainer>
    </Container>
  );
};
const Container = styled.div`
  max-height: 100px;
  padding-left: 4%;
  background: rgb(1, 96, 93);
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 10;
  position: absolute;
`;
const Leftcontainer = styled.div`
  margin: 20px;
  margin-left: 20px;
  float: left;
`;

const Rightcontainer = styled.div`
  margin: 20px;
  padding-right: 4%;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H2 = styled.h1`
  color: white;
  font-weight: lighter;
  word-spacing: 0.4em;
  font-size: 20px;
  font-weight: bold;
`;

const P = styled.p`
  color: white;
  font-weight: lighter;
  word-spacing: 0.4em;
  font-weight: bold;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: rgba(219, 130, 0, 1);
  color: white;
  font-weight: bold;
  margin-left: 25px;
`;

export default Navbar;

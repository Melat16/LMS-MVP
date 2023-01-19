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
export default Navbar;

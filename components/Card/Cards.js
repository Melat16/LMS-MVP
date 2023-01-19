import { useRouter } from "next/router";
import styled from "styled-components";

const Card = () => {
  const router = useRouter();

  return (
    <Container>
      <Box onClick={()=> router.push(`/grade1-4`)}>
        <Content>
          <H3>Card 1</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </P>

          <Button>Learn more</Button>
        </Content>
      </Box>

      <Box onClick={()=> router.push(`/grade1-4`)}>
        <Content>
          <H3>Card 1</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </P>

          <Button>Learn more</Button>
        </Content>
      </Box>

      <Box onClick={()=> router.push(`/grade1-4`)}>
        <Content>
          <H3>Card 1</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </P>

          <Button>Learn more</Button>
        </Content>
      </Box>
    </Container>
  );
};
const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: boredr-box;
  background: white;
  display: flex;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  word-spacing: 1.8px;
  line-height: 22px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  color: rgb(255, 123, 0);
  border-style: solid;
  border-color: rgb(1, 96, 93);
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  background-color: white;
  height: 42px;
  width: 250px;
  color: rgb(1, 96, 93);
  margin-top: 300px;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #777;
  z-index: 1;
  transition: 0.5s;
`;

const Box = styled.div`
  position: relative;
  font-weight: bold;
  width: 320px;
  height: 550px;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: 3%;
  background: #f5f5f5;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  cursor: pointer;
  align-items: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }
  &:hover ${Button} {
    color: white;
    background-color: rgb(1, 96, 93);
    border: none;
  }
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-items: center ;
  padding-top: 50px;
  padding-bottom: 40px;
  text-align: center;
`;
const H2 = styled.h2`
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8em;
  color: rgb(255, 123, 0);
  transition: 0.5s;
`;
const H3 = styled.h3`
  margin-bottom: 30px;
  font-size: 1.5em;
  color: rgb(1, 96, 93);
`;
export default Card;

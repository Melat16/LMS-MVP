import styled from "styled-components";
import { useState } from "react";

const Who = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Container>
      <Subcontainer>
        <H1>Who are we</H1>
        <P>
          We are icog-ACC we are pioneers in the children education sector with
          years of experience. And now we are launching an online e-learning
          platform for children and youth age of 8-18 to teach them essential
          computer programming skills and basic digital literacy.
        </P>
      </Subcontainer>
      <Subcontainer1>
        <H1>Frequently Asked Questions</H1>
      </Subcontainer1>
      <Wrapper>
        <Accordion>
          {data.map((item, i) => (
            <Item key={i.toString()}>
              <Title  onClick={() => toggle(i)}>
                <H2>{item.question}</H2>
                <Span>{selected == i ? "-" : "+"}</Span>
              </Title>
              {selected == i && (
                <Content>
                  <H5>{item.answer}</H5>{" "}
                </Content>
              )}
            </Item>
          ))}
        </Accordion>
      </Wrapper>
    </Container>
  );
};

const data = [
  {
    question: "What is the best way to attend a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
  },
  {
    question: "What is the best way to attend a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
  },
  {
    question: "What is the best way to attend a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
  },
];
const Container = styled.div`
  height: 580px;
  width: 100vw;
  background-color: white;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    
  }
`;

const Subcontainer = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left:5px;
    padding-right:5px;
  }
`;
const Subcontainer1 = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
`;

const P = styled.p`
  color: black;
  font-size: 22px;
  font-weight: lighter;
  margin-top: 20px;
  line-height: 25px;
  word-spacing: 3px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 19px;
  }
`;

const H1 = styled.h1`
  color: rgb(1, 96, 93);
  padding-bottom: 1%;
  font-size: 30px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  height: 300px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  

  @media screen and (min-width: 320px) and (max-width: 1080px) {
   padding:10px;
  }
`;

const Accordion = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
 
`;

const Item = styled.div`
  margin-bottom: 25px;
  /* padding-bottom: 40px; */
  background-color: rgb(255, 244, 238);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: white;
  cursor: pointer;
  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(251, 196, 0);
  color: rgb(1, 96, 93);

`;

const H2 = styled.h1`
  font-size: 22px;
  padding-left: 20px;
  font-weight: light;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 19px;
  }
`;
const H5 = styled.h6`
  font-size: 15px;
  font-weight: lighter;
`;

const Content = styled.div`
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  background-color: rgb(255, 244, 238);
  color: rgb(1, 96, 93);
  text-align: start;
  position: relative;
  padding: 20px;
`;

const Span = styled.span`
  padding-right: 30px;
`;
export default Who;

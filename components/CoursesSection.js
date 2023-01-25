import Card from "../components/Card/Cards";
import Card2 from "../components/Card/Cards2";
import Card3 from "../components/Card/Cards3";
import styled from "styled-components";
import React, { useState } from "react";

const Courses = () => {
  const [active, setActive] = useState("Card");
  return (
    <SectionOne id="courses" >
      <Title>
        <H1>What We Provide</H1>
      </Title>
      <ColumnOne1>
        <Transfers active={active}>
          <BtnWrapper>
            <Button className="card" active={active.toLowerCase()} onClick={() => setActive("Card")}>
              Grade 1-4
            </Button>
          </BtnWrapper>

          <BtnWrapper>
            <Button className="card2" active={active.toLowerCase()} onClick={() => setActive("Card2")}>
              Grade 5-8
            </Button>
          </BtnWrapper>

          <BtnWrapper>
            <Button className="card3" active={active.toLowerCase()} onClick={() => setActive("Card3")}>
              Grade 9-12
            </Button>
          </BtnWrapper>
        </Transfers>
      </ColumnOne1>

      <ColumnTwo1>
        {active === "Card" && <Card />}
        {active === "Card2" && <Card2 />}
        {active === "Card3" && <Card3 />}
      </ColumnTwo1>
    </SectionOne>
  );
};

const SectionOne = styled.div`
  display: block;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100vw;
  background-color: white;
`;
const ColumnOne1 = styled.div`
  display: flex;
  justify-content: center ;
  gap: 3rem;
  margin: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    
    
  }
  
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  background-color: white;
`;
const H1 = styled.h1`
  color: rgb(1, 96, 93);
  padding-bottom: 1%;
  font-size: 30px;
  font-weight: bold;
`;
const Transfers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90vw;
  gap: 140px;
  background-color: white;
  color: #000;
  transition: 0.4s ease-in-out;
  border-radius: 4px;
  border-bottom: 5px solid rgba(58, 135, 190, 0.3);
  padding-bottom: 20px;
  position: relative;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    gap:10px;
    width: 100%;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 4px;
  border: ${props => props.active === props.className ? "2px solid rgba(1, 96, 93, 1)" : "none"} ;
  width: 200px;
  background: ${props => props.active === props.className ? "rgba(255, 255, 255, 0.7)" : "rgb(1, 96, 93)"} ; 
  white-space: nowrap;
  padding: 20px 22px;
  margin-left: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.active === props.className ? "rgba(0, 113, 117, 1)" : "#fff"} ;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: rgba(1, 96, 93, 0.7);
    color: #fff;
  }
  &:focus {
    border: 2px solid rgba(1, 96, 93, 0.5);
    background: rgba(255, 255, 255, 0.7);
    color: rgba(0, 113, 117, 1);
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100px; 
    justify-content:center;
    text-align:center;
    padding: 10px 2px;
  }
`;
export default Courses;

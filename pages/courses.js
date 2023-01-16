import Card from "../components/Cards";
import Card2 from "../components/Cards2";
import Card3 from "../components/Cards3";
import styled from "styled-components";
import React, { useState } from 'react';

const Courses = () => {
    const [active, setActive] = useState("Card");
   

    return (
      
      
      
        
          <SectionOne>
            <ColumnOne1>
              <Transfers active={active}> 
  
              
             <BtnWrapper>
               <Button className = "card" onClick={() => setActive("Card")}>Grade 1-4</Button>
              </BtnWrapper>
  
              
              
              
              
              <BtnWrapper>
               <Button className = "card2" onClick={() => setActive("Card2")}>Grade 5-8</Button>
              </BtnWrapper>
              
             
             
              <BtnWrapper>
               <Button className = "card3" onClick={() => setActive("Card3")}>Grade 9-12</Button>
              </BtnWrapper>
              
  
              </Transfers>
            
            </ColumnOne1>
  
            <ColumnTwo1>
               
             
               {active === "Card" &&   <Card/>}
               {active === "Card2" &&   <Card2/>}
               {active === "Card3" &&   <Card3/>}  
               
            </ColumnTwo1>
          </SectionOne> 
       
      
      
    );
  }

  const SectionOne = styled.div`
    display: block;
    justify-content: space-between;
    height: 40%;
    gap: 2rem;
    width: 100vw;
  `;
  const ColumnOne1 = styled.div`
    display: flex;
    gap: 3rem;
    margin: 0;
  `;
  
  const ColumnTwo1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;
  `;
  
  const Transfers = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height: 100%;
    width: 100vw;
    gap: 140px;
    background-color: white;
    color: #000;
    transition: 0.4s ease-in-out;
    border-radius: 4px;
    border: 1px solid rgba(58, 135, 190, 0.3);  
    position: relative;
  `;
  
  const BtnWrapper = styled.div`
   display: flex;
   justify-content: flex-start; 
   align-items: center;
   `;
  
  const Button = styled.button`
  border-radius: 4px;
  border: none;
  width: 200px;
  background:rgb(1,96,93);
  white-space: nowrap;
  padding: 20px 22px;
  margin-left: 0;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  border: 2px solid  rgba(58, 135, 190, 0.1); 
  &:hover{
    background:rgba(1,96,93,0.7);
    color: #fff;
  }
  &:focus{
    border: 2px solid  rgba(1,96,93,0.5); 
    background:rgba(255, 255, 255, 0.7);
    color: rgba(0, 113, 117, 1);
  }
  `
  ;
   
export default Courses;
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color:white;

`

const Subcontainer = styled.div`
width:1000px;
margin-left:auto;
margin-right:auto;
justify-content:center;
text-align: center;

`
const Subcontainer1 = styled.div`
width:1000px;
margin-top:50px;
margin-left:auto;
margin-right:auto;
justify-content:center;
text-align: center;

`

const P = styled.p`
color: black;
font-size: 22px;
font-weight:lighter;
margin-bottom: 2%;
line-height:25px;
word-spacing: 3px;
`

const H1 = styled.h1`
color:rgb(1,96,93);
padding-bottom:3%;
`

const Wrapper = styled.div`
display:flex;
height:300px;
width:100vw;
justify-content: center;
align-items:center;

`

const Accordion = styled.div`
width:1000px;
margin-left:auto;
margin-right:auto;
justify-content:center;
text-align: center;

`

const Item = styled.div`
margin-bottom:5px;
padding-bottom:40px;
background-color:rgb(255, 244, 238);
`

const Title = styled.div`
color: black;
display:flex;
height:50px;
justify-content: space-between;
align-items: center;
background-color:white;
cursor: pointer;
border-style:solid;
border-width:0.5px;
border-color:rgb(251,196,0);
`

const H2 = styled.h1`
font-size:22px;
padding-left:20px;
font-weight: 300;
`
const H5 = styled.p`
font-size:19px;
color:black;
text-align: start;
font-weight: lighter;
`

const Content = styled.div`
height:auto;
max-height:9999px;
transition:all 0.5s cubic-bezier(0,1,0,1);
background-color:rgb(255, 244, 238);

`

const Span = styled.span`
padding-right:30px;
`

const Who = () => {

const [selected, setSelected] = useState(null)
const toggle = (i) =>{
    if (selected == i){

        return setSelected(null)
    }
    setSelected(i)
}
    return( 

        <Container>

            <Subcontainer>
                <H1>Who are we</H1>
                <P>We are icog-ACC we are pioneers in the children education sector with years
                    of experience. And now we are launching an online e-learning platform 
                    for children and youth age of 8-18 to teach them essential computer programming skills and basic digital literacy.
                </P>
            </Subcontainer>
            <Subcontainer1>
                <H1>Frequently Asked Questions</H1>
            </Subcontainer1>
            <Wrapper>
                
                <Accordion>
                

 {data.map((item, i)=>(
    <Item>
        
    <Title onClick={() => toggle(i)}>
        <H2>{item.question}</H2>
        <Span>{selected == i? '-' : '+'}</Span>
    </Title>
    <Content>
        
        {selected ==i?<H5>{item.answer}</H5> :'' }
        
    </Content>
    </Item>

                    ))}
                </Accordion>
            </Wrapper>
        </Container>
        
     );
}
 
const data = [
    {
        question: "What is the best way to attend a course?",
        answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
    },
    {
        question: "What is the best way to attend a course?",
        answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
    },
    {
        question: "What is the best way to attend a course?",
        answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
    },
]
export default Who;
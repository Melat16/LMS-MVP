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
const P = styled.p`
color:black;
font-size:24px;
font-weight:300px;
`

const H1 = styled.h1`
color:rgb(1,96,93);
`

const Wrapper = styled.div`
display:flex;
height:100vh;
width:100vw;
justify-content: center;
align-items:center;
`

const Accordion = styled.div`
width:1000px;

`
const Item = styled.div`
margin-buttom:5px;
padding:10px 20px;
`

const Title = styled.div`
color:red;
display:flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`

const H2 = styled.h1`
font-size:26px;
`
const H5 = styled.h5`
font-size:22px;
font-weight:lighter;
`
const Content = styled.div`

`

const Span = styled.span`
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
                <P>we are icog-ACC we are pioneers in the children education sector with years
                    of experience. And now we are launching an online e-learning platform 
                    for children and youth age of 8-18 to teach them essential computer programming skills and basic digital literacy.
                </P>
            </Subcontainer>
            <Wrapper>
                <Accordion>

                    {data.map((item, i)=>(
    <Item>
    <Title onClick={() => toggle(i)}>
        <H2>{item.question}</H2>
        <Span>{selected == i? '-' : '+'}</Span>
    </Title>
    <Content className={selected ==i? 'content show': 'content '}>
        
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
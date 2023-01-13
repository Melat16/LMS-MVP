import styled from "styled-components";

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

`
const Item = styled.div`

`

const Title = styled.div`

`

const H2 = styled.div`

`

const Content = styled.div`

`
const Who = () => {
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

                    {data.map((item, i)=>{
<Item>
    
</Item>

                    })}
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
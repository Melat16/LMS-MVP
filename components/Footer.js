import styled from "styled-components";
import img from "../public/background.png"


const  Footer = () => {
    return ( 
        <Container>
    <Title>
    <H1>Contact Us</H1>
    </Title>
    <SubCont>
    <Left>
        <Form>
        <Input type='email' placeholder="Email"/>
        
      <TextArea name="Comment" placeholder="Comment" rows={4} cols={40} />
    
    <br/>
        <Button type="submit">Send</Button>
        </Form>

    </Left>
<Right>

    <P>
    iCog Anyone Can Code <br/>
Namibia St, Lingo Tower, 12th Floor <br/>
Addis Ababa, Ethiopia <br/>
Phone: +251- (0) -904262728Email: info@icog-acc.com <br/>
Addis Ababa, Ethiopia <br/>

    </P>
</Right>
</SubCont>

<ButtomContainer>
    <Paragraph>&copy; Copyright 2022 iCog Anyone Can Code. All Rights Reserved</Paragraph>
</ButtomContainer>
</Container>
     );
}
const ButtomContainer = styled.div`
background: rgb(1,96,93);
justify-content:center;
display:flex;
height:70px;
padding-top:20px;
margin:0px;

`
const Paragraph = styled.p`
color:white;
`

const Container = styled.div`
background-color:white;
justify-content:center;
margin-left:auto;
margin-right:auto;
width:1500px;
height:400px;
margin-bottom:0px;
`
const Title = styled.div`
text-align:center;
margin-bottom:10px;
`
const SubCont = styled.div`
background-image: url(${img}); 
display:flex;
justify-content:center;
align-items:center;
`

const Right = styled.div`
float: right;
width: 50%;
`

const Left = styled.div`
float:left;
width: 50%;
padding: 5%;

`
const Form = styled.form`
display:block;
margin-left:30px;
`
const Input = styled.input`
margin-bottom:15px;
height:40px;
width:420px;
font-size:14px;

::placeholder {
    padding-left:10px;
}

`

const Button = styled.button`
background-color:rgba(219, 130, 0, 1);
color:white;
width:100px;
height:40px;
margin-top:10px;
border:none;
`
const TextArea = styled.textarea`
font-size:18px;
::placeholder {
    padding-left:10px;
}
`
const P = styled.p`
text-align:center;
font-size:19px;
font-weight:400px;

`

const H1 = styled.h1`
color:rgb(1,96,93);

`
 
export default Footer;
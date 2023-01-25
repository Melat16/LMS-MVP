import styled from "styled-components";
import img from "../public/background.png";

const Footer = () => {
  return (
    <Container>
      <Title>
        <H1>Contact Us</H1>
      </Title>
      <SubCont>
        <Left>
          <Form>
            <Input type="email" placeholder="Email" />
            <TextArea name="Comment" placeholder="Comment" rows={4} cols={40} />
            <br />
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <H1>iCog Anyone Can Code</H1>
          <br />
          <P>
            Namibia St, Lingo Tower, 12th Floor, Addis Ababa, Ethiopia <br />
            Phone: +251- (0) -904262728 <br />
            Email: info@icog-acc.com <br />
            Addis Ababa, Ethiopia <br />
          </P>
        </Right>
      </SubCont>

      <ButtomContainer>
        <Paragraph>
          &copy; Copyright 2022 iCog Anyone Can Code. All Rights Reserved
        </Paragraph>
      </ButtomContainer>
    </Container>
  );
};
const ButtomContainer = styled.div`
  background: white;
  justify-content: center;
  display: flex;
  height: 70px;
  padding-top: 20px;
  margin-top: -10px;
`;
const Paragraph = styled.p`
  color: rgb(1, 96, 93);
`;

const Container = styled.div`
  background-color: white;
  width: 100vw;
  margin-bottom: 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top:40px;
  }
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
const SubCont = styled.div`
  background-image: url(${img.src});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Right = styled.div`
  float: right;
  padding: 5%;
  margin-top: -5%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top:5px;
  }
`;

const Left = styled.div`
  float: left;
  padding: 5%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:0px;
    float:none;
  }
`;
const Form = styled.form`
  display: block;
  margin-left: 30px;
  
`;
const Input = styled.input`
  margin-bottom: 15px;
  height: 40px;
  width: 500px;
  font-size: 14px;
  padding-left: 10px;
  background:white;
  border:solid;
  border-width:0.9px;
  border-color:rgb(1, 96, 93);

  ::placeholder {
    padding-left: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
  height: 40px;
  width: 320px;
  padding:5px;
  }
`;

const Button = styled.button`
  background-color: rgba(219, 130, 0, 1);
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border: none;
`;
const TextArea = styled.textarea`
  font-size: 14px;
  width: 500px;
  padding: 10px;
  background:white;
  border:solid;
  border-width:0.9px;
  border-color:rgb(1, 96, 93);

  ::placeholder {
    padding-left: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding:5px;
    width: 320px;
    }
`;
const P = styled.p`
  text-align: start;
  font-size: 17px;
  font-weight: 400px;
  color: rgb(1, 96, 93);
`;

const H1 = styled.h1`
  color: rgb(1, 96, 93);
  font-size: 30px;
  font-weight: bold;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 26px;

  }
`;

export default Footer;

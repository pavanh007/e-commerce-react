import React from "react";
import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
`;
const Desc = styled.p`
margin: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;
flex-direction: row;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items:center ;
justify-content: center;
margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0%;
  padding: 0%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightGray" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Flowrish</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis
          eveniet, odio sunt soluta aspernatur, tenetur blanditiis distinctio
          ratione inventore nostrum magni incidunt dolore quis ipsam sint
          voluptates voluptas. Ipsa?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Women Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms and Conditions</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} />
          Banglore, karnataka, India - 577401
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +91 7892419604
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          contact.help@flowerish.io
        </ContactItem>
        <Payment src="https://i.ibb.co/z8GJ6bB/payment-removebg-preview.png" />
      </Right>
    </Container>
  );
};

export default Footer;


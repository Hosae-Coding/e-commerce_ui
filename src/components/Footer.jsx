import styled from 'styled-components';
import React from 'react';
import {
   Facebook,
   GitHub,
   Instagram,
   Phone,
   Twitter,
   Room,
   Email,
} from '@material-ui/icons';

const Container = styled.div`
   display: flex;

   padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
   margin: 20px 0px;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const Social = styled.div`
   width: 40px;
   height: 40px;
   border: 50%;
   color: white;
   background-color: #${(props) => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 20px;
`;

const Left = styled.div`
   flex: 1;
`;
const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;
const Right = styled.div`
   flex: 1;
   padding: 20px;
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   position: relative;
`;

const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>HOSAE</Logo>
            <Desc>MOVE TOWARD FUTURE</Desc>
            <SocialContainer>
               <Social color="3B5999">
                  <Facebook />
               </Social>
               <Social color="E4405F">
                  <Instagram />
               </Social>
               <Social color="000000">
                  <GitHub />
               </Social>
               <Social color="E60023">
                  <Twitter />
               </Social>
            </SocialContainer>
         </Left>
         <Center>
            <Title> Useful Link</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{ marginRight: '10px' }} />
               Toronto ON, CANADA
            </ContactItem>
            <ContactItem>
               <Phone style={{ marginRight: '10px' }} />
               +1 647 809 0814
            </ContactItem>
            <ContactItem>
               <Email style={{ marginRight: '10px' }} />
               khs4business@gmail.com
            </ContactItem>
         </Right>
      </Container>
   );
};

export default Footer;

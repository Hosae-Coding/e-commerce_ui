import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
   height: 30px;
   background-color: teal;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 15px;
   font-weight: 400;
`;

const Announcement = () => {
   return <Container>Free Shipping! purchase over 50+</Container>;
};

export default Announcement;

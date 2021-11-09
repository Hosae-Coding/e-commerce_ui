import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   flex: 1;
   margin: 3px;
   margin-top: 0;
   height: 70vh;
   position: relative;
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;
const Title = styled.h1`
   color: wheat;
   margin-bottom: 20px;
`;
const Button = styled.button`
   border: none;
   padding: 10px;
   border-color: white;
   color: black;
   cursor: pointer;
   font-weight: 600;
`;

const CategoryItem = ({ i }) => {
   return (
      <Container>
         <Image src={i.img} />
         <Info>
            <Title>{i.title}</Title>
            <Button>Shop Now!</Button>
         </Info>
      </Container>
   );
};

export default CategoryItem;

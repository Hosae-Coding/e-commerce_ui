import styled from 'styled-components';
import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newslatter from '../components/Newslatter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrappe = styled.div`
   padding: 50px;
   display: flex;
`;

const ImgContainer = styled.div`
   flex: 1;
   padding: 0px 70px;
`;
const Imgae = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
`;
const InfoContainer = styled.div`
   flex: 1;
`;
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`;
const Title = styled.h1`
   font-weight: 300;
`;
const Desc = styled.p`
   margin: 20px 0px;
`;

const FilterContainer = styled.div`
   display: flex;
   margin: 30px 0px;
   width: 50%;
   justify-content: space-between;
`;

const Filter = styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0px 5px;
   cursor: pointer;
`;

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
   display: flex;
   width: 50%;
   align-items: center;
   justify-content: space-between;
`;
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 600;
`;
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 5px;
   border: 1px solid darkgray;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;
const Button = styled.button`
   padding: 15px;
   border: 1.5px solid darkgray;
   border-radius: 5px;
   background-color: white;
   cursor: pointer;
   font-weight: 400;

   &:hover {
      background-color: yellowgreen;
   }
`;
const Product = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Wrappe>
            <ImgContainer>
               <Imgae src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
               <Title>Fit Jeans</Title>
               <Desc>
                  Jeans are a type of pants traditionally made from denim (a
                  kind of cotton fabric). ... The defining feature of most jeans
                  is that they're made out of some kind of denim or denim-like
                  fabric. Most jeans have seams and pockets that are reinforced
                  with rivets—small metal fasteners.
               </Desc>
               <Price>$22</Price>

               <FilterContainer>
                  <Filter>
                     <FilterTitle>color</FilterTitle>
                     <FilterColor color="black" />
                     <FilterColor color="darkblue" />
                     <FilterColor color="gray" />
                  </Filter>
                  <Filter></Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                     <FilterSizeOption>XS</FilterSizeOption>
                     <FilterSizeOption>S</FilterSizeOption>
                     <FilterSizeOption>M</FilterSizeOption>
                     <FilterSizeOption>L</FilterSizeOption>
                     <FilterSizeOption>XL</FilterSizeOption>
                     <FilterSizeOption>XXL</FilterSizeOption>
                  </FilterSize>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <Remove />
                     <Amount>1</Amount>
                     <Add />
                  </AmountContainer>
                  <Button>Add</Button>
               </AddContainer>
            </InfoContainer>
         </Wrappe>
         <Newslatter />
         <Footer />
      </Container>
   );
};

export default Product;

import styled from 'styled-components';
import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsltter from '../components/Newslatter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
   margin: 20px;
`;
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Filter = styled.div`
   margin: 20px;
   ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;
const FillterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 20px;
   ${mobile({ widthRight: '0px' })}
`;

const Select = styled.select`
   padding: 10px;
   margin: 20px;
   ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductList = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Title>Awesome</Title>
         <FilterContainer>
            <Filter>
               <FillterText>Filter</FillterText>
               <Select>
                  <Option disabled selected>
                     Color
                  </Option>
                  <Option>White</Option>
                  <Option>Black</Option>
                  <Option>Red</Option>
                  <Option>Blue</Option>
                  <Option>Yellow</Option>
                  <Option>Green</Option>
               </Select>
               <Select>
                  <Option disabled selected>
                     Size
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
               </Select>
            </Filter>
            <Filter>
               <FillterText>Sort</FillterText>
               <Select>
                  <Option selected>Newest</Option>
                  <Option>Price (asc)</Option>
                  <Option>Price (desc)</Option>
               </Select>
            </Filter>
         </FilterContainer>
         <Products />
         <Newsltter />
         <Footer />
      </Container>
   );
};

export default ProductList;

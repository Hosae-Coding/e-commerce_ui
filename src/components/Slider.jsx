import styled from 'styled-components';
import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { itemData } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;

   position: relative;
   overflow: hidden;
   ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: wheat;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${(props) => props.direction === 'left' && '10px'};
   right: ${(props) => props.direction === 'right' && '10px'};
   margin: auto;
   cursor: pointer;
   opacity: 0.7;
   z-index: 2;
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1 ease;
   transform: translateX(${(props) => props.slideIndex * 100}vw);
`;

const Slide = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100vh;
   background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
   height: 100%;
   flex: 1;
`;
const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
`;
const Image = styled.img`
   height: 80%;
`;

const Title = styled.h1`
   font-size: 70px;
`;
const Desc = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
`;
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
   border-radius: 4px;
   border-color: wheat;
`;

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
      if (direction === 'left') {
         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
   };
   return (
      <Container>
         <Arrow direction="left" onClick={() => handleClick('left')}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
         </Arrow>

         <Wrapper slideIndex={slideIndex}>
            {itemData.map((i) => (
               <Slide bg={i.bg} key={i.id}>
                  <ImgContainer>
                     <Image src={i.img} />
                  </ImgContainer>
                  <InfoContainer>
                     <Title>{i.title}</Title>
                     <Desc>{i.desc}</Desc>
                     <Button>Explore</Button>
                  </InfoContainer>
               </Slide>
            ))}
         </Wrapper>
         <Arrow direction="right" onClick={() => handleClick('right')}>
            <ArrowRightOutlined></ArrowRightOutlined>
         </Arrow>
      </Container>
   );
};

export default Slider;

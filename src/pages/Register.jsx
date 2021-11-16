import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
         rgba(255, 255, 255, 0.5),
         rgba(255, 255, 255, 0.5)
      ),
      url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
   display: flex;
   align-items: center;
   justify-content: center;
   background-size: cover;
`;
const Wrapper = styled.div`
   padding: 20px;
   width: 40%;
   background-color: whitesmoke;
   ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;
const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`;
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   margin-top: 20px;
`;

const Register = () => {
   return (
      <Container>
         <Wrapper>
            <Title>Let's Join With Us!</Title>
            <Form>
               <Input placeholder="name" />
               <Input placeholder="last name" />
               <Input placeholder="usename" />
               <Input placeholder="email" />
               <Input placeholder="password" />
               <Input placeholder="confirm" />
            </Form>
            <Button>Create!</Button>
         </Wrapper>
      </Container>
   );
};

export default Register;

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
 }
  100% {
    opacity: 1;
 }
`;

export const FormQuestion = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 7rem;
    animation: ${fadeIn} 1.4s forwards;
`;

export const Button = styled.button`
    padding: .5rem 1rem;
    background-color: #00ccff;
    color: #efefef;
    cursor: pointer;
`;

export const Answer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const ErroContainer = styled.div`
 margin-top: 20px;
 padding: 1rem;
 margin: 1rem;
 border: 1px solid #ff0000;
 border-radius: 5px;
 background-color: #ffe6e6;
`;

export const ErroTitulo = styled.h3`
 color: #ff0000;
`;

export const ErroPergunta = styled.p`
 margin-top: 15px;
`;

export const ErroResposta = styled.p`
 color: #000;
 font-weight: bold;
`;

export const QuestionCounter = styled.p`
 font-size: .8rem;
`;

export const DivHeaderQuiz = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 2rem;
 margin-bottom: 10rem;
 @media (max-width: 700px) {
      padding: 1.2rem;
      margin-bottom: 5rem; 
 }
 h1 {
    font-family: "Bangers", system-ui;
    font-size: 1.4rem;
 }
`;

export const ReturnToHome = styled(Link)`
 display: flex;
 align-items: center;
 gap: 10px;
 color: #000;
 font-weight: 700;
`;
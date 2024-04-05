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
  background-color: #0098df;
  color: #efefef;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

export const QuestionCounter = styled.p`
  font-size: .8rem;
`;

export const DivHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
`;

export const HeaderAnswerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
`;

interface HeaderAnswerBlockProps {
  active: boolean;
  answered: boolean;
}

export const HeaderAnswerBlock = styled.span<HeaderAnswerBlockProps>`
  display: block;
  width: 100%;
  background-color: ${props => props.active || props.answered ? '#0098df' : '#ccc'};
  height: 10px;
  border-radius: 10px;
`;

export const DivHeaderQuiz = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 7rem;
  @media (max-width: 700px) {
    padding: 1.2rem 0;
    margin-bottom: 0rem; 
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

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderModal = styled.header`
  background-color: #fefefe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 1rem;
  h2 {
    font-size: 1rem;
  }
`;


export const ModalContent = styled.div`
  background-color: #fefefe;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

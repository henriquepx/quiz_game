import React, { useState } from 'react';
import { useQuiz } from './QuizLogic';
import { FormQuestion, Button, QuestionCounter, ModalContainer, HeaderModal, ModalContent, CloseButton, DivHeaderQuiz, DivHeaderContainer, HeaderAnswerContainer,HeaderAnswerBlock, ReturnToHome } from './QuizStyles';
import Radio from '../Radio';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Pergunta {
 pergunta: string;
 options: string[];
 resposta: string;
 id: string;
}

interface QuizProps {
 perguntas: Pergunta[];
}

const QuizComponent: React.FC<QuizProps> = ({ perguntas }) => {
 const {
    respostas,
    slide,
    handleChange,
    handleClick,
  } = useQuiz(perguntas);
  
 const [isLastQuestion, setIsLastQuestion] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };

 React.useEffect(() => {
   setIsLastQuestion(slide === perguntas.length - 1);
 }, [slide, perguntas.length]);

 return (
    <FormQuestion onSubmit={(event) => event.preventDefault()}>
     <DivHeaderContainer>
       <HeaderAnswerContainer>
       {perguntas.map((pergunta, index) => (
        <HeaderAnswerBlock 
            key={pergunta.id} 
            active={slide === index} 
            answered={index <= slide}
        />
    ))}
       </HeaderAnswerContainer>
        <DivHeaderQuiz>
          <ReturnToHome to="/">
            <FaArrowLeftLong />
            Return to home
          </ReturnToHome>
          <h1>QuizGames</h1>
        </DivHeaderQuiz>
     </DivHeaderContainer> 
     

      <QuestionCounter>Pergunta {Math.min(slide + 1, perguntas.length)}/{perguntas.length}</QuestionCounter>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {isLastQuestion ? (
        <Button onClick={openModal}>Exibir resultado</Button>
      ) : (
        <Button onClick={handleClick}>Próxima pergunta <FaArrowRightLong /></Button>
      )}
      {isModalOpen && (
        <ModalContainer>
         <ModalContent>
           <HeaderModal>
             <h2>Resultado</h2>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
           </HeaderModal>
            
          </ModalContent>
        </ModalContainer>
      )}
    </FormQuestion>
 );
};

export default QuizComponent;

import React, { useState, useEffect, useRef } from 'react';
import { useQuiz } from './QuizLogic';
import {
  FormQuestion,
  Button,
  QuestionCounter,
  ModalContainer,
  HeaderModal,
  ModalContent,
  DivHeaderQuiz,
  DivHeaderContainer,
  HeaderAnswerContainer,
  HeaderAnswerBlock,
  ReturnToHome,
  ModalIcons,
  ModalIconInfo,
  BackHomeModall,
  MidiasModalContainer
} from './QuizStyles';
import Radio from '../Radio';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaCheck, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

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
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setEndTime(Date.now());
  };

  const startQuiz = () => {
    setStartTime(Date.now());
  };

  useEffect(() => {
    setIsLastQuestion(slide === perguntas.length - 1);
  }, [slide, perguntas.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen && event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const countCorrectAnswers = () => {
    let correctCount = 0;
    perguntas.forEach(pergunta => {
      if (respostas[pergunta.id] === pergunta.resposta) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const generateShareText = () => {
    const correctCount = countCorrectAnswers();
    return `Acabei de fazer um quiz e acertei ${correctCount}/${perguntas.length} perguntas! #QuizGames`;
  };

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
      {!isLastQuestion ? (
        <Button onClick={() => {
          handleClick();
          if (slide === 0) startQuiz();
        }}>Próxima pergunta <FaArrowRightLong /></Button>
      ) : (
        <Button onClick={() => {
          if (respostas[perguntas[slide].id]) {
            openModal();
          } else {
            alert("Por favor, selecione uma resposta antes de finalizar o questionário.");
          }
        }}>
          {respostas[perguntas[slide].id] ? 'Exibir resultados' : 'Finalizar questionário'}
        </Button>
      )}
      {isModalOpen && (
        <ModalContainer onClick={handleModalClick} ref={modalRef}>
          <ModalContent>
            <HeaderModal>
              <h2>Resultado</h2>
              <ModalIconInfo>
                <ModalIcons>
                  <GiSandsOfTime size={40} />
                  <span>Tempo decorrido: <br />{startTime && endTime ? ((endTime - startTime) / 1000).toFixed(2) + ' segundos' : 'N/A'}</span>
                </ModalIcons>
                <ModalIcons>
                  <FaCheck size={40} />
                  <p>Respostas corretas: <br />{countCorrectAnswers()}/{perguntas.length}</p>
                </ModalIcons>
              </ModalIconInfo>
              <MidiasModalContainer>
                <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${generateShareText()}`} target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} style={{ color: '#0098df' }}/>LinkedIn</a>
                <a href={`https://api.whatsapp.com/send?text=${generateShareText()}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={22} style={{ color: '#0098df'}}/>WhatsApp</a>
                <a href={`https://twitter.com/intent/tweet?text=${generateShareText()}`} target="_blank" rel="noopener noreferrer"><FaTwitter  size={22} style={{ color: '#0098df' }}/>Twitter</a>
              </MidiasModalContainer>
              <BackHomeModall to="/"><FaArrowLeftLong /> Voltar ao início</BackHomeModall>
            </HeaderModal>
          </ModalContent>
        </ModalContainer>
      )}
    </FormQuestion>
  );

};

export default QuizComponent;

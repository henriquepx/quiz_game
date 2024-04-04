import React from 'react';
import { useQuiz } from './QuizLogic';
import { FormQuestion, Button, Answer, ErroContainer, ErroTitulo, ErroPergunta, ErroResposta, QuestionCounter, DivHeaderQuiz, ReturnToHome } from './QuizStyles';
import Radio from '../Radio';
import { FaArrowLeftLong } from "react-icons/fa6";

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
    resultado,
    perguntasErradas,
    handleChange,
    reiniciarQuiz,
    handleClick,
 } = useQuiz(perguntas);

 return (
    <FormQuestion onSubmit={(event) => event.preventDefault()}>
      <DivHeaderQuiz>
        <ReturnToHome to="/">
          <FaArrowLeftLong />
          Return to home
        </ReturnToHome>
        <h1>QuizGames</h1>
      </DivHeaderQuiz>

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
      {resultado ? (
        <Answer>
          <p>{resultado}</p>
          {perguntasErradas.length > 0 && (
            <ErroContainer>
              <ErroTitulo>Perguntas erradas:</ErroTitulo>
              {perguntasErradas.map((perguntaErradas, index) => (
                <div key={index}>
                 <ErroPergunta>{perguntaErradas.pergunta}</ErroPergunta>
                 <ErroResposta>Resposta correta: {perguntaErradas.respostaCorreta}</ErroResposta>
                </div>
              ))}
            </ErroContainer>
          )}
          <Button onClick={reiniciarQuiz}>Reiniciar</Button>
        </Answer>
      ) : (
        <Button onClick={handleClick}>Próxima</Button>
      )}
    </FormQuestion>
 );
};

export default QuizComponent;

import React from 'react';
import { RespostasState, Pergunta } from './Types';

interface QuizProps {
    perguntas: Pergunta[];
   }

export const useQuiz = (perguntas: QuizProps['perguntas']) => {
 const [respostas, setRespostas] = React.useState<RespostasState>({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
 });
 const [slide, setSlide] = React.useState<number>(0);
 const [resultado, setResultado] = React.useState<string | null>(null);
 const [perguntasErradas, setPerguntasErradas] = React.useState<Array<{ pergunta: string; respostaCorreta: string }>>([]);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRespostas({ ...respostas, [event.target.id]: event.target.value });
 };

 const resultadoFinal = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    const erradas = perguntas.filter(
      ({ id, resposta }) => respostas[id] !== resposta,
    );
    setPerguntasErradas(
      erradas.map(({ pergunta, resposta }) => ({ pergunta, respostaCorreta: resposta })),
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
 };

 const reiniciarQuiz = () => {
    setRespostas({
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: '',
      p10: '',
    });
    setSlide(0);
    setResultado(null);
    setPerguntasErradas([]);
 };

 const handleClick = () => {
    if (respostas[`p${slide + 1}`]) {
      if (slide < perguntas.length - 1) {
        setSlide(slide + 1);
      } else {
        resultadoFinal();
      }
    } else {
      alert('Por favor, selecione uma opção antes de prosseguir.');
    }
 };

 return {
    respostas,
    setRespostas,
    slide,
    setSlide,
    resultado,
    setResultado,
    perguntasErradas,
    setPerguntasErradas,
    handleChange,
    resultadoFinal,
    reiniciarQuiz,
    handleClick,
 };
};
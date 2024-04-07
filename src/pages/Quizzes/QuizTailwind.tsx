import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Tailwind CSS?',
    options: [
      'Um pré-processador CSS',
      'Uma biblioteca de componentes HTML',
      'Um framework CSS',
      'Uma ferramenta de otimização de imagens'
    ],
    resposta: 'Um framework CSS',
    id: 'p1',
  },
  {
    pergunta: 'Como você adiciona uma margem à direita de um elemento usando Tailwind CSS?',
    options: [
      'mr-4',
      'margin-right: 4',
      'margin-right: 4px',
      'm-right-4'
    ],
    resposta: 'mr-4',
    id: 'p2',
  },
  {
    pergunta: 'Qual é a função do Tailwind CSS em relação a outras abordagens de estilização?',
    options: [
      'Substituir completamente o uso de classes em HTML',
      'Facilitar o desenvolvimento com CSS puro',
      'Encorajar a escrita de CSS inline em cada elemento HTML',
      'Oferecer utilitários prontos para estilização diretamente no HTML'
    ],
    resposta: 'Oferecer utilitários prontos para estilização diretamente no HTML',
    id: 'p3',
  },
  {
    pergunta: 'Como você aplica um espaçamento interno igual a 2 unidades usando Tailwind CSS?',
    options: [
      'p-2',
      'padding: 2',
      'padding: 2px',
      'pad-2'
    ],
    resposta: 'p-2',
    id: 'p4',
  },
  {
    pergunta: 'Qual é a abordagem de nomenclatura de classes usada pelo Tailwind CSS?',
    options: [
      'Baseada em nomes de elementos HTML',
      'Baseada em conceitos de design',
      'Baseada em valores de propriedades CSS',
      'Baseada em funções JavaScript'
    ],
    resposta: 'Baseada em valores de propriedades CSS',
    id: 'p5',
  },
  {
    pergunta: 'Como você aplica um tamanho de texto extra grande usando Tailwind CSS?',
    options: [
      'text-xl',
      'font-size: xl',
      'font-xl',
      'text-size-xl'
    ],
    resposta: 'text-xl',
    id: 'p6',
  },
  {
    pergunta: 'O que significa a classe "hover:bg-gray-200" em Tailwind CSS?',
    options: [
      'Aplica um fundo cinza ao passar o mouse sobre o elemento',
      'Aplica um fundo cinza ao elemento',
      'Aplica uma borda cinza ao passar o mouse sobre o elemento',
      'Não é uma classe válida em Tailwind CSS'
    ],
    resposta: 'Aplica um fundo cinza ao passar o mouse sobre o elemento',
    id: 'p7',
  },
  {
    pergunta: 'Como você aplica uma largura de 50% a um elemento usando Tailwind CSS?',
    options: [
      'w-1/2',
      'width: 50%',
      'width-half',
      'w-half'
    ],
    resposta: 'w-1/2',
    id: 'p8',
  },
  {
    pergunta: 'Qual é a maneira correta de aplicar uma cor de fundo azul usando Tailwind CSS?',
    options: [
      'bg-blue',
      'background-color: blue',
      'background-blue',
      'bg-color-blue'
    ],
    resposta: 'bg-blue',
    id: 'p9',
  },
  {
    pergunta: 'Como você centraliza um elemento horizontalmente usando Tailwind CSS?',
    options: [
      'mx-auto',
      'center-x',
      'horizontal-center',
      'mx-center'
    ],
    resposta: 'mx-auto',
    id: 'p10',
  },
];

const QuizTailwind: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizTailwind;

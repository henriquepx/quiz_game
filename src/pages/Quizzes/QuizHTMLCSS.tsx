import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntasHTMLCSS = [
  {
    pergunta: 'O que significa HTML?',
    options: [
      'Hypertext Markup Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language'
    ],
    resposta: 'Hypertext Markup Language',
    id: 'p1',
  },
  {
    pergunta: 'Qual é o elemento HTML para criar um link?',
    options: [
      '<link>',
      '<href>',
      '<a>',
      '<url>'
    ],
    resposta: '<a>',
    id: 'p2',
  },
  {
    pergunta: 'Qual é o elemento HTML para criar uma lista não ordenada?',
    options: [
      '<list>',
      '<ul>',
      '<ol>',
      '<li>'
    ],
    resposta: '<ul>',
    id: 'p3',
  },
  {
    pergunta: 'Qual é o elemento HTML para definir um título de página?',
    options: [
      '<title>',
      '<h1>',
      '<header>',
      '<head>'
    ],
    resposta: '<title>',
    id: 'p4',
  },
  {
    pergunta: 'Qual é o elemento HTML para adicionar uma linha horizontal?',
    options: [
      '<line>',
      '<hr>',
      '<br>',
      '<hrz>'
    ],
    resposta: '<hr>',
    id: 'p5',
  },
  {
    pergunta: 'O que significa CSS?',
    options: [
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets'
    ],
    resposta: 'Cascading Style Sheets',
    id: 'p6',
  },
  {
    pergunta: 'Qual é a propriedade CSS usada para alterar a cor do texto?',
    options: [
      'font-color',
      'text-color',
      'color',
      'font-style'
    ],
    resposta: 'color',
    id: 'p7',
  },
  {
    pergunta: 'Qual é a propriedade CSS usada para definir a cor de fundo de um elemento?',
    options: [
      'background-color',
      'color',
      'background',
      'bgcolor'
    ],
    resposta: 'background-color',
    id: 'p8',
  },
  {
    pergunta: 'Qual é a propriedade CSS usada para definir a fonte de texto?',
    options: [
      'font-family',
      'text-family',
      'font-style',
      'font'
    ],
    resposta: 'font-family',
    id: 'p9',
  },
  {
    pergunta: 'Qual é a propriedade CSS usada para adicionar margem externa a um elemento?',
    options: [
      'margin',
      'padding',
      'border',
      'spacing'
    ],
    resposta: 'margin',
    id: 'p10',
  },
];

const QuizHTMLCSS: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntasHTMLCSS} />
  );
}
 
export default QuizHTMLCSS;

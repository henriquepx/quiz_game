import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
 {
    pergunta: 'Qual é a diferença entre state e props em React?',
    options: [
      'State é mutável, enquanto props é imutável',
      'Props é passado para o componente filho, enquanto state é gerenciado pelo componente',
      'State é passado para o componente filho, enquanto props é gerenciado pelo componente',
      'Nenhuma das opções acima'
    ],
    resposta: 'Props é passado para o componente filho, enquanto state é gerenciado pelo componente',
    id: 'p1',
 },
 {
    pergunta: 'Qual é a vantagem de usar o React Hooks?',
    options: [
        'Permite o uso de estado e outros recursos do React sem escrever uma classe',
        'Melhora o desempenho dos componentes',
        'Não há vantagens',
        'Nenhuma das opções acima'
    ],
    resposta: 'Permite o uso de estado e outros recursos do React sem escrever uma classe',
    id: 'p2',
 },
 {
    pergunta: 'O que significa JSX?',
    options: [
        'JavaScript XML',
        'JavaScript XHTML',
        'JavaScript XML Hypertext',
        'Nenhuma das opções acima'
    ],
    resposta: 'JavaScript XML',
    id: 'p3',
 },
 {
    pergunta: 'Qual método é chamado para renderizar HTML em uma página web no React?',
    options: [
      'display()',
      'render()',
      'show()',
      'Nenhuma das opções acima'
    ],
    resposta: 'render()',
    id: 'p4',
  },
  {
    pergunta: 'Qual é a função do setState()?',
    options: [
        'Atualizar o estado do componente',
        'Renderizar o componente na tela',
      'Executar código após a operação setState',
      'Nenhuma das opções acima'
    ],
    resposta: 'Atualizar o estado do componente',
    id: 'p5',
  },
  {
    pergunta: 'Qual o propósito da função map() em ReactJS?',
    options: [
      'Para filtrar elementos de um array existente.',
        'Para criar um novo array com base em um array existente.',
        'Para adicionar elementos a um array existente.',
      'Para ordenar os elementos de um array existente.'
    ],
    resposta: 'Para criar um novo array com base em um array existente.',
    id: 'p6',
  },
  {
    pergunta: 'Qual o propósito do hook useEffect() em ReactJS?',
    options: [
      'Para realizar efeitos colaterais em componentes funcionais.',
      'Para manipular o estado em componentes de classe.',
      'Para criar componentes personalizados em React.',
      'Para acessar o contexto de um componente funcional.'
    ],
    resposta: 'Para realizar efeitos colaterais em componentes funcionais.',
    id: 'p7',
  },
  {
    pergunta: 'Como você pode passar uma função de um componente pai para um componente filho em ReactJS?',
    options: [
        'Usando o método this.function no componente pai',
        'Usando a função bind() no componente filho.',
      'Apenas atribuindo a função a uma propriedade do componente filho.',
      'Usando a função this.props.function no componente filho.'
    ],
    resposta: 'Apenas atribuindo a função a uma propriedade do componente filho.',
    id: 'p8',
  },
  {
    pergunta: 'Qual o propósito do hook useReducer() em ReactJS?',
    options: [
        'Para definir estados complexos em componentes funcionais.',
        'Para realizar operações matemáticas em componentes de classe.',
      'Para criar efeitos de animação em componentes de classe.',
      'Para manipular a lógica de redirecionamento em componentes funcionais.'
    ],
    resposta: 'Para definir estados complexos em componentes funcionais.',
    id: 'p9',
  },
  {
    pergunta: 'Qual o propósito do hook useContext() em ReactJS?',
    options: [
        'Para acessar o contexto de um componente funcional.',
        'Para criar um novo contexto em um componente de classe.',
      'Para definir estilos CSS em componentes de função.',
      'Para acessar os props de um componente pai em um componente filho.'
    ],
    resposta: 'Para acessar o contexto de um componente funcional.',
    id: 'p10',
 },
];

const QuizReact: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
 }
 
 export default QuizReact;

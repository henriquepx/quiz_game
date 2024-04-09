import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é C#?',
    options: [
      'Uma linguagem de marcação',
      'Uma linguagem de programação',
      'Um framework web',
      'Um sistema operacional'
    ],
    resposta: 'Uma linguagem de programação',
    id: 'p1',
  },
  {
    pergunta: 'Quem é o criador do C#?',
    options: [
      'Linus Torvalds',
      'Dennis Ritchie',
      'Anders Hejlsberg',
      'Bjarne Stroustrup'
    ],
    resposta: 'Anders Hejlsberg',
    id: 'p2',
  },
  {
    pergunta: 'Qual é a plataforma principal de desenvolvimento para aplicações C#?',
    options: [
      'Visual Studio Code',
      'Eclipse',
      'Visual Studio',
      'NetBeans'
    ],
    resposta: 'Visual Studio',
    id: 'p3',
  },
  {
    pergunta: 'O que é o .NET Framework?',
    options: [
      'Um ambiente de desenvolvimento integrado',
      'Um banco de dados',
      'Uma plataforma para desenvolvimento de aplicações',
      'Um sistema operacional'
    ],
    resposta: 'Uma plataforma para desenvolvimento de aplicações',
    id: 'p4',
  },
  {
    pergunta: 'Qual é a extensão de arquivo usada para arquivos de código-fonte C#?',
    options: [
      '.cs',
      '.cpp',
      '.java',
      '.c'
    ],
    resposta: '.cs',
    id: 'p5',
  },
  {
    pergunta: 'Como você declara uma variável em C#?',
    options: [
      'var x = 10;',
      'int x = 10;',
      'x = 10;',
      'let x = 10;'
    ],
    resposta: 'int x = 10;',
    id: 'p6',
  },
  {
    pergunta: 'Qual é a função do método Main() em um programa C#?',
    options: [
      'Iniciar a execução do programa',
      'Declarar variáveis globais',
      'Definir configurações de projeto',
      'Imprimir resultados na tela'
    ],
    resposta: 'Iniciar a execução do programa',
    id: 'p7',
  },
  {
    pergunta: 'Qual é o operador de atribuição em C#?',
    options: [
      '=',
      '==',
      '===',
      '=>'
    ],
    resposta: '=',
    id: 'p8',
  },
  {
    pergunta: 'Como você cria um loop "for" em C#?',
    options: [
      'for (int i = 0; i < 10; i++) { }',
      'loop (int i = 0; i < 10; i++) { }',
      'while (int i = 0; i < 10) { }',
      'foreach (int i = 0; i < 10; i++) { }'
    ],
    resposta: 'for (int i = 0; i < 10; i++) { }',
    id: 'p9',
  },
  {
    pergunta: 'Qual é a função do método Console.WriteLine() em C#?',
    options: [
      'Ler entrada do usuário',
      'Escrever dados em um arquivo',
      'Exibir texto no console',
      'Calcular operações matemáticas'
    ],
    resposta: 'Exibir texto no console',
    id: 'p10',
  },
];

const QuizCSharp: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizCSharp;

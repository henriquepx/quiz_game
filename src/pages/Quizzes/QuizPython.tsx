import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Python?',
    options: [
      'Um sistema operacional',
      'Um tipo de cobra',
      'Uma linguagem de programação',
      'Um aplicativo de planilha'
    ],
    resposta: 'Uma linguagem de programação',
    id: 'p1',
  },
  {
    pergunta: 'Qual é a função do comando "print()" em Python?',
    options: [
      'Para ler a entrada do usuário',
      'Para definir uma variável',
      'Para imprimir texto na tela',
      'Para criar uma lista'
    ],
    resposta: 'Para imprimir texto na tela',
    id: 'p2',
  },
  {
    pergunta: 'Como você define uma função em Python?',
    options: [
      'function minha_funcao():',
      'def minha_funcao():',
      'define minha_funcao():',
      'fun minha_funcao():'
    ],
    resposta: 'def minha_funcao():',
    id: 'p3',
  },
  {
    pergunta: 'Qual é o método utilizado para adicionar um elemento a uma lista em Python?',
    options: [
      'add()',
      'insert()',
      'append()',
      'push()'
    ],
    resposta: 'append()',
    id: 'p4',
  },
  {
    pergunta: 'Qual é o resultado da expressão 3 + 2 * 4 em Python?',
    options: [
      '20',
      '15',
      '11',
      '25'
    ],
    resposta: '11',
    id: 'p5',
  },
  {
    pergunta: 'O que o método "strip()" faz em Python?',
    options: [
      'Remove espaços em branco do início e do final de uma string',
      'Divide uma string em substrings',
      'Substitui uma substring por outra em uma string',
      'Converte uma string para letras minúsculas'
    ],
    resposta: 'Remove espaços em branco do início e do final de uma string',
    id: 'p6',
  },
  {
    pergunta: 'Qual é a estrutura de dados usada para armazenar múltiplos valores em Python?',
    options: [
      'Lista',
      'Dicionário',
      'Tupla',
      'Conjunto'
    ],
    resposta: 'Lista',
    id: 'p7',
  },
  {
    pergunta: 'O que o operador "%" faz em Python?',
    options: [
      'Calcula o módulo de uma divisão',
      'Realiza uma operação de multiplicação',
      'Concatena duas strings',
      'Calcula a média de uma lista'
    ],
    resposta: 'Calcula o módulo de uma divisão',
    id: 'p8',
  },
  {
    pergunta: 'Qual é a função do comando "import" em Python?',
    options: [
      'Para exportar funções de um módulo',
      'Para importar módulos ou pacotes em um script Python',
      'Para definir variáveis em um script Python',
      'Para criar uma nova função em Python'
    ],
    resposta: 'Para importar módulos ou pacotes em um script Python',
    id: 'p9',
  },
  {
    pergunta: 'O que o método "join()" faz em Python?',
    options: [
      'Junta elementos de uma lista em uma string',
      'Separa uma string em substrings',
      'Inverte uma string',
      'Remove espaços em branco do início e do final de uma string'
    ],
    resposta: 'Junta elementos de uma lista em uma string',
    id: 'p10',
  },
];

const QuizPython: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizPython;

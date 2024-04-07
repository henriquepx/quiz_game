import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'Qual é a diferença entre "==" e "===" em JavaScript?',
    options: [
      'Ambos comparam valores semelhantes, mas "===" também compara os tipos de dados.',
      '"==" compara valores e tipos de dados, enquanto "===" compara apenas valores.',
      '"===" compara valores semelhantes, enquanto "==" compara apenas valores.',
      'Não há diferença entre eles.'
    ],
    resposta: '"===" compara valores semelhantes, enquanto "==" compara apenas valores.',
    id: 'p1',
  },
  {
    pergunta: 'O que é uma closure em JavaScript?',
    options: [
      'Uma função aninhada dentro de outra função, que tem acesso ao escopo da função externa.',
      'Uma função que não possui acesso ao escopo da função externa.',
      'Uma variável declarada dentro de uma função que não pode ser acessada fora dela.',
      'Uma função que retorna um objeto JavaScript.'
    ],
    resposta: 'Uma função aninhada dentro de outra função, que tem acesso ao escopo da função externa.',
    id: 'p2',
  },
  {
    pergunta: 'O que é o evento "click" em JavaScript?',
    options: [
      'Um evento acionado quando um elemento é clicado com o mouse.',
      'Um método para clicar em um elemento do DOM.',
      'Uma função que altera o estilo de um elemento ao ser clicado.',
      'Um evento que ocorre automaticamente quando a página é carregada.'
    ],
    resposta: 'Um evento acionado quando um elemento é clicado com o mouse.',
    id: 'p3',
  },
  {
    pergunta: 'Qual é a diferença entre "let" e "const" em JavaScript?',
    options: [
      '"let" é usado para declarações de variáveis que podem ser reatribuídas, enquanto "const" é usado para declarações de variáveis que não podem ser reatribuídas.',
      '"const" é usado para declarações de variáveis que podem ser reatribuídas, enquanto "let" é usado para declarações de variáveis que não podem ser reatribuídas.',
      'Ambos são usados para declarações de variáveis imutáveis.',
      'Nenhuma das opções acima.'
    ],
    resposta: '"let" é usado para declarações de variáveis que podem ser reatribuídas, enquanto "const" é usado para declarações de variáveis que não podem ser reatribuídas.',
    id: 'p4',
  },
  {
    pergunta: 'O que é JSON em JavaScript?',
    options: [
      'JavaScript Object Notation - Um formato de dados leve que é fácil para humanos lerem e escreverem e fácil para máquinas analisarem e gerarem.',
      'JavaScript Object Navigator - Uma ferramenta para navegar em objetos JavaScript.',
      'JavaScript Object Native - Um objeto JavaScript padrão para manipulação de dados.',
      'JavaScript Ordered Notation - Um formato de dados ordenados usado em JavaScript.'
    ],
    resposta: 'JavaScript Object Notation - Um formato de dados leve que é fácil para humanos lerem e escreverem e fácil para máquinas analisarem e gerarem.',
    id: 'p5',
  },
  {
    pergunta: 'Qual é a função do método "forEach" em JavaScript?',
    options: [
      'Itera sobre os elementos de um array e executa uma função para cada elemento.',
      'Filtra os elementos de um array com base em uma condição fornecida.',
      'Ordena os elementos de um array em ordem alfabética.',
      'Remove o último elemento de um array.'
    ],
    resposta: 'Itera sobre os elementos de um array e executa uma função para cada elemento.',
    id: 'p6',
  },
  {
    pergunta: 'O que é o conceito de "hoisting" em JavaScript?',
    options: [
      'Elevação automática de declarações de variáveis e funções para o topo do seu contexto de execução.',
      'Transformação de código JavaScript para código de máquina.',
      'Armazenamento de dados em cache para acesso rápido.',
      'Atribuição de valores padrão a variáveis não inicializadas.'
    ],
    resposta: 'Elevação automática de declarações de variáveis e funções para o topo do seu contexto de execução.',
    id: 'p7',
  },
  {
    pergunta: 'Qual é a função do método "map" em JavaScript?',
    options: [
      'Criar um novo array com os resultados de chamar uma função para cada elemento do array.',
      'Iterar sobre os elementos de um array e executar uma função para cada elemento.',
      'Filtrar os elementos de um array com base em uma condição fornecida.',
      'Ordenar os elementos de um array em ordem alfabética.'
    ],
    resposta: 'Criar um novo array com os resultados de chamar uma função para cada elemento do array.',
    id: 'p8',
  },
  {
    pergunta: 'O que é uma expressão regular em JavaScript?',
    options: [
      'Uma sequência de caracteres que define um padrão de pesquisa.',
      'Uma função JavaScript que retorna um resultado booleano.',
      'Um tipo de dado para armazenar valores textuais.',
      'Um operador que realiza operações matemáticas em JavaScript.'
    ],
    resposta: 'Uma sequência de caracteres que define um padrão de pesquisa.',
    id: 'p9',
  },
  {
    pergunta: 'O que é o operador ternário em JavaScript?',
    options: [
      'Um operador condicional que é frequentemente usado como uma forma abreviada de um if-else statement.',
      'Um operador matemático que realiza operações ternárias.',
      'Um operador para concatenar strings em JavaScript.',
      'Um operador para dividir um número por três.'
    ],
    resposta: 'Um operador condicional que é frequentemente usado como uma forma abreviada de um if-else statement.',
    id: 'p10',
  },
];

const QuizJavaScript: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizJavaScript;

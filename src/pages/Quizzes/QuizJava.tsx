import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Java?',
    options: [
      'Um banco de dados relacional',
      'Um sistema operacional',
      'Uma linguagem de programação orientada a objetos',
      'Um framework web'
    ],
    resposta: 'Uma linguagem de programação orientada a objetos',
    id: 'p1',
  },
  {
    pergunta: 'Quem é o criador da linguagem Java?',
    options: [
      'Bill Gates',
      'Steve Jobs',
      'Linus Torvalds',
      'James Gosling'
    ],
    resposta: 'James Gosling',
    id: 'p2',
  },
  {
    pergunta: 'Qual é a principal característica de Java?',
    options: [
      'Tipagem dinâmica',
      'Compilação estática',
      'Orientação a objetos',
      'Programação procedural'
    ],
    resposta: 'Orientação a objetos',
    id: 'p3',
  },
  {
    pergunta: 'Qual é o uso principal da JVM (Java Virtual Machine)?',
    options: [
      'Execução de código Java diretamente no hardware',
      'Tradução de código Java para código de máquina nativo',
      'Interpretação de código Java em tempo de execução',
      'Compilação de código Java para bytecode'
    ],
    resposta: 'Interpretação de código Java em tempo de execução',
    id: 'p4',
  },
  {
    pergunta: 'Como você declara uma classe em Java?',
    options: [
      'class MyClass { }',
      'def MyClass { }',
      'new Class MyClass { }',
      'MyClass = new Class { }'
    ],
    resposta: 'class MyClass { }',
    id: 'p5',
  },
  {
    pergunta: 'Qual é o objetivo do método "main" em Java?',
    options: [
      'Definir o ponto de entrada do programa',
      'Definir métodos de inicialização de objetos',
      'Definir métodos de inicialização de classes',
      'Definir métodos de inicialização de variáveis'
    ],
    resposta: 'Definir o ponto de entrada do programa',
    id: 'p6',
  },
  {
    pergunta: 'O que é o conceito de herança em Java?',
    options: [
      'Um mecanismo de ocultação de informações',
      'Um mecanismo para reutilização de código',
      'Um mecanismo para encapsulamento de dados',
      'Um mecanismo para polimorfismo'
    ],
    resposta: 'Um mecanismo para reutilização de código',
    id: 'p7',
  },
  {
    pergunta: 'O que é o conceito de polimorfismo em Java?',
    options: [
      'Um mecanismo de ocultação de informações',
      'Um mecanismo para reutilização de código',
      'Um mecanismo para encapsulamento de dados',
      'A capacidade de um objeto assumir várias formas'
    ],
    resposta: 'A capacidade de um objeto assumir várias formas',
    id: 'p8',
  },
  {
    pergunta: 'Qual é a diferença entre "==" e ".equals()" em Java?',
    options: [
      '"==" compara referências de objetos, enquanto ".equals()" compara conteúdo',
      '"==" compara conteúdo de objetos, enquanto ".equals()" compara referências',
      '"==" e ".equals()" são usados para o mesmo propósito em Java',
      'Java não tem operadores de comparação'
    ],
    resposta: '"==" compara referências de objetos, enquanto ".equals()" compara conteúdo',
    id: 'p9',
  },
  {
    pergunta: 'O que é um construtor em Java?',
    options: [
      'Um método para destruir objetos',
      'Um método para criar objetos',
      'Um método para modificar objetos',
      'Um método para acessar atributos de objetos'
    ],
    resposta: 'Um método para criar objetos',
    id: 'p10',
  },
];

const QuizJava: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizJava;

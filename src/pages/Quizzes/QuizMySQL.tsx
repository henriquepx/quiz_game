import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é MySQL?',
    options: [
      'Um sistema operacional',
      'Um servidor web',
      'Um banco de dados relacional',
      'Um editor de texto'
    ],
    resposta: 'Um banco de dados relacional',
    id: 'p1',
  },
  {
    pergunta: 'Qual é o comando SQL usado para selecionar dados de uma tabela?',
    options: [
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE'
    ],
    resposta: 'SELECT',
    id: 'p2',
  },
  {
    pergunta: 'Qual é o comando SQL usado para adicionar uma nova linha a uma tabela?',
    options: [
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE'
    ],
    resposta: 'INSERT',
    id: 'p3',
  },
  {
    pergunta: 'Qual é o comando SQL usado para atualizar dados em uma tabela?',
    options: [
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE'
    ],
    resposta: 'UPDATE',
    id: 'p4',
  },
  {
    pergunta: 'Qual é o comando SQL usado para excluir dados de uma tabela?',
    options: [
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE'
    ],
    resposta: 'DELETE',
    id: 'p5',
  },
  {
    pergunta: 'Qual é o comando SQL usado para criar uma nova tabela?',
    options: [
      'CREATE TABLE',
      'ADD TABLE',
      'NEW TABLE',
      'MAKE TABLE'
    ],
    resposta: 'CREATE TABLE',
    id: 'p6',
  },
  {
    pergunta: 'Qual é a função do comando SQL "WHERE"?',
    options: [
      'Para filtrar os resultados de uma consulta',
      'Para agrupar os resultados de uma consulta',
      'Para ordenar os resultados de uma consulta',
      'Para unir duas tabelas em uma consulta'
    ],
    resposta: 'Para filtrar os resultados de uma consulta',
    id: 'p7',
  },
  {
    pergunta: 'O que é uma chave primária em MySQL?',
    options: [
      'Uma chave usada para acessar dados em outra tabela',
      'Uma restrição que garante que os valores em uma coluna sejam únicos',
      'Uma função que calcula a média de uma coluna',
      'Uma instrução usada para atualizar uma tabela'
    ],
    resposta: 'Uma restrição que garante que os valores em uma coluna sejam únicos',
    id: 'p8',
  },
  {
    pergunta: 'O que é uma junção (join) em MySQL?',
    options: [
      'Uma operação que combina dados de duas ou mais tabelas com base em uma condição relacionada',
      'Uma função que retorna o valor máximo em uma coluna',
      'Uma instrução usada para classificar os resultados de uma consulta',
      'Uma chave primária em uma tabela'
    ],
    resposta: 'Uma operação que combina dados de duas ou mais tabelas com base em uma condição relacionada',
    id: 'p9',
  },
  {
    pergunta: 'Qual é o comando SQL usado para ordenar os resultados de uma consulta?',
    options: [
      'ORDER BY',
      'SORT BY',
      'GROUP BY',
      'SELECT ORDER'
    ],
    resposta: 'ORDER BY',
    id: 'p10',
  },
];

const QuizMySQL: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizMySQL;

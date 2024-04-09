import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Git?',
    options: [
      'Um sistema de gerenciamento de banco de dados',
      'Uma linguagem de programação',
      'Um framework web',
      'Um sistema de controle de versão'
    ],
    resposta: 'Um sistema de controle de versão',
    id: 'p1',
  },
  {
    pergunta: 'Quem criou o Git?',
    options: [
      'Linus Torvalds',
      'Bill Gates',
      'Steve Jobs',
      'Mark Zuckerberg'
    ],
    resposta: 'Linus Torvalds',
    id: 'p2',
  },
  {
    pergunta: 'Qual é a principal função do Git?',
    options: [
      'Gerenciar bancos de dados',
      'Desenvolver aplicativos web',
      'Controlar o histórico de alterações em arquivos',
      'Criar interfaces gráficas'
    ],
    resposta: 'Controlar o histórico de alterações em arquivos',
    id: 'p3',
  },
  {
    pergunta: 'O que é um repositório Git?',
    options: [
      'Uma pasta onde são armazenados arquivos',
      'Um servidor de banco de dados',
      'Um tipo de banco de dados',
      'Um conjunto de arquivos e seu histórico de alterações'
    ],
    resposta: 'Um conjunto de arquivos e seu histórico de alterações',
    id: 'p4',
  },
  {
    pergunta: 'Como você clona um repositório Git?',
    options: [
      'git push',
      'git commit',
      'git clone',
      'git pull'
    ],
    resposta: 'git clone',
    id: 'p5',
  },
  {
    pergunta: 'O que é um "commit" em Git?',
    options: [
      'Um comando para enviar arquivos para o repositório remoto',
      'Uma ramificação de código',
      'Uma alteração registrada no histórico de um repositório',
      'Uma operação para mesclar ramos'
    ],
    resposta: 'Uma alteração registrada no histórico de um repositório',
    id: 'p6',
  },
  {
    pergunta: 'Como você mescla duas ramificações (branches) em Git?',
    options: [
      'git merge',
      'git branch',
      'git checkout',
      'git push'
    ],
    resposta: 'git merge',
    id: 'p7',
  },
  {
    pergunta: 'O que é um "fork" em Git?',
    options: [
      'Uma cópia de um repositório em sua própria conta do GitHub',
      'Uma ramificação de código',
      'Uma operação para excluir um repositório',
      'Um comando para enviar arquivos para o repositório remoto'
    ],
    resposta: 'Uma cópia de um repositório em sua própria conta do GitHub',
    id: 'p8',
  },
  {
    pergunta: 'Qual é o comando Git para enviar alterações para o repositório remoto?',
    options: [
      'git push',
      'git commit',
      'git pull',
      'git clone'
    ],
    resposta: 'git push',
    id: 'p9',
  },
  {
    pergunta: 'O que é uma "branch" em Git?',
    options: [
      'Uma cópia de um repositório',
      'Uma operação para excluir um repositório',
      'Uma ramificação de código',
      'Um conjunto de arquivos e seu histórico de alterações'
    ],
    resposta: 'Uma ramificação de código',
    id: 'p10',
  },
];

const QuizGit: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizGit;

import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Node.js?',
    options: [
      'Um banco de dados NoSQL',
      'Um servidor web',
      'Uma linguagem de programação',
      'Um framework de desenvolvimento web'
    ],
    resposta: 'Um servidor web',
    id: 'p1',
  },
  {
    pergunta: 'Qual é o mecanismo de execução do JavaScript no Node.js?',
    options: [
      'V8',
      'SpiderMonkey',
      'Chakra',
      'Rhino'
    ],
    resposta: 'V8',
    id: 'p2',
  },
  {
    pergunta: 'O que é o npm em Node.js?',
    options: [
      'Um servidor de banco de dados',
      'Um gerenciador de pacotes',
      'Um framework de testes',
      'Um ambiente de desenvolvimento integrado (IDE)'
    ],
    resposta: 'Um gerenciador de pacotes',
    id: 'p3',
  },
  {
    pergunta: 'Qual é a função do comando "require()" em Node.js?',
    options: [
      'Para exportar funções de um módulo',
      'Para importar módulos ou pacotes em um script Node.js',
      'Para criar uma nova função em Node.js',
      'Para definir variáveis em um script Node.js'
    ],
    resposta: 'Para importar módulos ou pacotes em um script Node.js',
    id: 'p4',
  },
  {
    pergunta: 'O que é um callback em Node.js?',
    options: [
      'Uma função que é passada como argumento para outra função e é invocada após a conclusão de uma operação assíncrona',
      'Um método para chamar funções síncronas em Node.js',
      'Uma função que é invocada antes da conclusão de uma operação assíncrona',
      'Um tipo de erro em Node.js'
    ],
    resposta: 'Uma função que é passada como argumento para outra função e é invocada após a conclusão de uma operação assíncrona',
    id: 'p5',
  },
  {
    pergunta: 'O que é o arquivo package.json em um projeto Node.js?',
    options: [
      'Um arquivo de configuração para o ambiente de desenvolvimento',
      'Um arquivo de documentação para o projeto',
      'Um arquivo de log para registro de eventos',
      'Um arquivo que lista as dependências e configurações do projeto'
    ],
    resposta: 'Um arquivo que lista as dependências e configurações do projeto',
    id: 'p6',
  },
  {
    pergunta: 'Qual é a função do módulo "http" em Node.js?',
    options: [
      'Para criar um servidor web',
      'Para manipular arquivos no sistema de arquivos',
      'Para realizar operações de entrada e saída',
      'Para realizar operações matemáticas'
    ],
    resposta: 'Para criar um servidor web',
    id: 'p7',
  },
  {
    pergunta: 'Como você instala pacotes do npm em um projeto Node.js?',
    options: [
      'npm add nome_do_pacote',
      'npm install nome_do_pacote',
      'npm download nome_do_pacote',
      'npm get nome_do_pacote'
    ],
    resposta: 'npm install nome_do_pacote',
    id: 'p8',
  },
  {
    pergunta: 'O que é o módulo "fs" em Node.js?',
    options: [
      'Para criar um servidor web',
      'Para manipular arquivos no sistema de arquivos',
      'Para realizar operações de entrada e saída',
      'Para realizar operações matemáticas'
    ],
    resposta: 'Para manipular arquivos no sistema de arquivos',
    id: 'p9',
  },
  {
    pergunta: 'Qual é a função do comando "npm start" em um projeto Node.js?',
    options: [
      'Para iniciar um servidor web',
      'Para instalar as dependências do projeto',
      'Para compilar o código fonte do projeto',
      'Para testar o código fonte do projeto'
    ],
    resposta: 'Para iniciar um servidor web',
    id: 'p10',
  },
];

const QuizNodeJS: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizNodeJS;

import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é Next.js?',
    options: [
      'Um framework de back-end para Node.js',
      'Uma biblioteca de gerenciamento de estado em React',
      'Um framework de renderização de lado do servidor para React',
      'Um banco de dados NoSQL'
    ],
    resposta: 'Um framework de renderização de lado do servidor para React',
    id: 'p1',
  },
  {
    pergunta: 'Quem é o criador do Next.js?',
    options: [
      'Facebook',
      'Google',
      'Vercel (anteriormente conhecida como Zeit)',
      'Microsoft'
    ],
    resposta: 'Vercel (anteriormente conhecida como Zeit)',
    id: 'p2',
  },
  {
    pergunta: 'Quais são as principais características do Next.js?',
    options: [
      'Roteamento baseado em páginas, renderização do lado do servidor, suporte a CSS-in-JS',
      'Banco de dados relacional, autenticação de usuário, API RESTful',
      'Manipulação de estado global, programação assíncrona, compilação JIT',
      'Compilação estática, tipagem estática, suporte a linguagens de programação nativas'
    ],
    resposta: 'Roteamento baseado em páginas, renderização do lado do servidor, suporte a CSS-in-JS',
    id: 'p3',
  },
  {
    pergunta: 'Como você cria uma nova página em um aplicativo Next.js?',
    options: [
      'Criando um novo arquivo na pasta "pages"',
      'Adicionando uma nova rota no arquivo "routes.js"',
      'Criando uma nova pasta chamada "pages" e adicionando um novo arquivo',
      'Executando um comando de linha para gerar automaticamente uma nova página'
    ],
    resposta: 'Criando um novo arquivo na pasta "pages"',
    id: 'p4',
  },
  {
    pergunta: 'O que é o "getStaticProps" em Next.js?',
    options: [
      'Um método usado para renderização do lado do servidor',
      'Um método usado para obter dados assincronamente durante a construção',
      'Um hook usado para manipular o estado em componentes funcionais',
      'Um middleware usado para autenticar solicitações de API'
    ],
    resposta: 'Um método usado para obter dados assincronamente durante a construção',
    id: 'p5',
  },
  {
    pergunta: 'Qual é o objetivo do arquivo "_app.js" em Next.js?',
    options: [
      'Definir layouts compartilhados e fornecer acesso aos dados de inicialização do aplicativo',
      'Definir configurações de roteamento e autenticação',
      'Gerenciar a lógica de renderização do lado do cliente',
      'Controlar a autenticação de usuários e autorização de acesso'
    ],
    resposta: 'Definir layouts compartilhados e fornecer acesso aos dados de inicialização do aplicativo',
    id: 'p6',
  },
  {
    pergunta: 'O que é o "fallback" em Next.js?',
    options: [
      'Um estado de erro que ocorre durante a renderização do lado do servidor',
      'Uma página de carregamento temporário exibida enquanto os dados são buscados',
      'Um tipo de rota usado para redirecionar solicitações inválidas',
      'Uma técnica de otimização de performance para pré-renderização de páginas estáticas'
    ],
    resposta: 'Uma página de carregamento temporário exibida enquanto os dados são buscados',
    id: 'p7',
  },
  {
    pergunta: 'O que é o "getServerSideProps" em Next.js?',
    options: [
      'Um método usado para renderização do lado do servidor',
      'Um método usado para obter dados assincronamente durante a construção',
      'Um hook usado para manipular o estado em componentes funcionais',
      'Um middleware usado para autenticar solicitações de API'
    ],
    resposta: 'Um método usado para obter dados assincronamente durante a renderização do lado do servidor',
    id: 'p8',
  },
  {
    pergunta: 'Qual é o comando para iniciar um aplicativo Next.js localmente?',
    options: [
      'npm start',
      'yarn dev',
      'next start',
      'node app.js'
    ],
    resposta: 'yarn dev',
    id: 'p9',
  },
  {
    pergunta: 'O que é o "getStaticPaths" em Next.js?',
    options: [
      'Um método usado para renderização do lado do servidor',
      'Um método usado para obter dados assincronamente durante a construção',
      'Um hook usado para manipular o estado em componentes funcionais',
      'Um método usado para gerar caminhos de rota dinâmicos em páginas estáticas'
    ],
    resposta: 'Um método usado para gerar caminhos de rota dinâmicos em páginas estáticas',
    id: 'p10',
  },
];

const QuizNextJS: React.FC = () => {
  return (
     <QuizComponent perguntas={perguntas} />
  );
}
 
export default QuizNextJS;

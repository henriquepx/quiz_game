import React from 'react';
import QuizComponent from '../../components/Quiz/QuizComponent';

const perguntas = [
  {
    pergunta: 'O que é TypeScript?',
    options: [
        'Uma biblioteca JavaScript',
        'Um framework de frontend',
        'Um superconjunto tipado de JavaScript',
        'Uma linguagem de programação completamente separada do JavaScript'
    ],
    resposta: 'Um superconjunto tipado de JavaScript',
    id: 'p1',
},
{
    pergunta: 'Qual é a principal vantagem de usar TypeScript?',
    options: [
        'Melhoria de performance',
        'Melhor legibilidade de código',
        'Detecção de erros em tempo de compilação',
        'Suporte nativo para React e Angular'
    ],
    resposta: 'Detecção de erros em tempo de compilação',
    id: 'p2',
},
{
    pergunta: 'Quais são os tipos básicos em TypeScript?',
    options: [
        'number, string, boolean, null, undefined, symbol',
        'int, char, bool, void, object, array',
        'int, string, bool, undefined, symbol',
        'number, string, boolean, void, object, array'
    ],
    resposta: 'number, string, boolean, null, undefined, symbol',
    id: 'p3',
},
{
    pergunta: 'O que é um tipo de união (union type) em TypeScript?',
    options: [
        'Um tipo que pode ser uma string ou um número',
        'Um tipo que representa uma coleção de valores',
        'Um tipo que é a união de dois tipos primitivos',
        'Um tipo que só pode ter um único valor'
    ],
    resposta: 'Um tipo que pode ser uma string ou um número',
    id: 'p4',
},
{
    pergunta: 'O que é um tipo de interseção (intersection type) em TypeScript?',
    options: [
        'Um tipo que representa a combinação de dois tipos primitivos',
        'Um tipo que representa a interseção de todos os tipos primitivos',
        'Um tipo que pode ter múltiplos valores',
        'Um tipo que representa a combinação de dois ou mais tipos'
    ],
    resposta: 'Um tipo que representa a combinação de dois ou mais tipos',
    id: 'p5',
},
{
    pergunta: 'Qual é a diferença entre interface e tipo em TypeScript?',
    options: [
        'Não há diferença, ambos são sinônimos',
        'Interfaces só podem ser usadas para objetos, enquanto tipos podem ser usados para qualquer tipo de dado',
        'Interfaces são mais poderosas e flexíveis que tipos',
        'Tipos são mais poderosos e flexíveis que interfaces'
    ],
    resposta: 'Interfaces só podem ser usadas para objetos, enquanto tipos podem ser usados para qualquer tipo de dado',
    id: 'p6',
},
{
    pergunta: 'O que é um generics em TypeScript?',
    options: [
        'Uma função que pode aceitar qualquer tipo de argumento',
        'Uma forma de criar tipos abstratos em TypeScript',
        'Um tipo que pode ser usado para representar qualquer tipo de dado',
        'Uma forma de parametrizar tipos e funções em TypeScript'
    ],
    resposta: 'Uma forma de parametrizar tipos e funções em TypeScript',
    id: 'p7',
},
{
    pergunta: 'Quando usar uma enumeração (enum) em TypeScript?',
    options: [
        'Para representar uma coleção de valores relacionados',
        'Para definir constantes em um programa TypeScript',
        'Para criar uma lista de opções para o usuário selecionar',
        'Para representar tipos genéricos em TypeScript'
    ],
    resposta: 'Para representar uma coleção de valores relacionados',
    id: 'p8',
},
{
    pergunta: 'O que é um decorator em TypeScript?',
    options: [
        'Uma função que modifica o comportamento de outra função ou classe',
        'Um tipo especial de comentário usado para documentar o código',
        'Um tipo de construtor de objetos em TypeScript',
        'Um padrão de design utilizado para criar instâncias de objetos'
    ],
    resposta: 'Uma função que modifica o comportamento de outra função ou classe',
    id: 'p9',
},
{
    pergunta: 'Como você pode garantir que uma variável não seja nula em TypeScript?',
    options: [
        'Usando o operador "!" após o nome da variável',
        'Usando o operador "?" após o nome da variável',
        'Usando o operador "??", indicando um valor padrão',
        'Não é possível garantir que uma variável não seja nula em TypeScript'
    ],
    resposta: 'Usando o operador "!" após o nome da variável',
    id: 'p10',
},
];

const QuizFrontend: React.FC = () => {
 return (
     <QuizComponent perguntas={perguntas} />
 );
}

export default QuizFrontend;
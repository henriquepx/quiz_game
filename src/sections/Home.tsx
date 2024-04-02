import React from 'react';
import Radio from '../components/Radio';
import styled from 'styled-components';

const FormQuestion = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 80vh;
`;
const Button = styled.button`
    padding: .5rem 1rem;
    background-color: #00ccff;
    color: #efefef;

    cursor: pointer;
`;
const Answer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;
const ErroContainer = styled.div`
 margin-top: 20px;
 padding: 1rem;
 margin: 1rem;
 border: 1px solid #ff0000;
 border-radius: 5px;
 background-color: #ffe6e6;
`;
const ErroTitulo = styled.h3`
 color: #ff0000;
`;
const ErroPergunta = styled.p`
 margin-top: 15px;
`;
const ErroResposta = styled.p`
 color: #000;
 font-weight: bold;
`;
const QuestionCounter = styled.p`
  font-size: .7vw;
`

const perguntas = [
 {
    pergunta: 'Qual é a diferença entre state e props em React?',
    options: [
      'state é imutável, enquanto props é mutável',
      'props é passado para o componente filho, enquanto state é gerenciado pelo componente',
      'state é passado para o componente filho, enquanto props é gerenciado pelo componente',
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
    pergunta: 'Quando o Henrique tá certo sobre um assunto que ele domina e a Agatha não tem a menor ideia do que se trata o assunto, quem tá certo?',
    options: [
        'Agatha',
        'Henrique',
        'Nenhum dos dois',
    ],
    resposta: 'Agatha',
    id: 'p7',
  },
  {
    pergunta: 'Como você pode passar uma função de um componente pai para um componente filho em ReactJS?',
    options: [
        'Usando o método this.function no componente pai',
        'sando a função bind() no componente filho.',
      'Apenas atribuindo a função a uma propriedade do componente filho.',
      'Usando a função this.props.function no componente filho.',
        'Usando a função setState() no componente pai.'
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
      'Para manipular a lógica de redirecionamento em componentes funcionais.',
        'Para acessar o histórico de navegação do navegador em componentes de classe.'
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
      'Para acessar os props de um componente pai em um componente filho.',
        'Para definir métodos de validação de formulário em componentes de classe.'
    ],
    resposta: 'Para acessar o contexto de um componente funcional.',
    id: 'p10',
 },
];

interface RespostasState {
 [key: string]: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
  p10: string;
}

function Home() {
 const [respostas, setRespostas] = React.useState<RespostasState>({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
 });
 const [slide, setSlide] = React.useState<number>(0);
 const [resultado, setResultado] = React.useState<string | null>(null);
 const [perguntasErradas, setPerguntasErradas] = React.useState<Array<{ pergunta: string; respostaCorreta: string }>>([]);

 function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRespostas({ ...respostas, [event.target.id]: event.target.value });
 }

 function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    const erradas = perguntas.filter(
      ({ id, resposta }) => respostas[id] !== resposta,
    );
    setPerguntasErradas(
      erradas.map(({ pergunta, resposta }) => ({ pergunta, respostaCorreta: resposta })),
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
 }

 function reiniciarQuiz() {
    setRespostas({
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: '',
      p10: '',
    });
    setSlide(0);
    setResultado(null);
    setPerguntasErradas([]);
 }

 function handleClick() {
  if (respostas[`p${slide + 1}`]) {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal();
    }
  } else {
    alert('Por favor, selecione uma opção antes de prosseguir.');
  }
}

 return (
   <FormQuestion onSubmit={(event) => event.preventDefault()}>
     <QuestionCounter>Pergunta {Math.min(slide + 1, perguntas.length)}/{perguntas.length}</QuestionCounter>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
 <Answer>
    <p>{resultado}</p>
    {perguntasErradas.length > 0 && (
      <ErroContainer>
        <ErroTitulo>Perguntas erradas:</ErroTitulo>
        {perguntasErradas.map((perguntaErradas, index) => (
          <div key={index}>
            <ErroPergunta>{perguntaErradas.pergunta}</ErroPergunta>
            <ErroResposta>Resposta correta: {perguntaErradas.respostaCorreta}</ErroResposta>
          </div>
        ))}
      </ErroContainer>
    )}
    <Button onClick={reiniciarQuiz}>Reiniciar</Button>
 </Answer>
) : (
 <Button onClick={handleClick}>Próxima</Button>
)}
    </FormQuestion>
 );
}

export default Home;
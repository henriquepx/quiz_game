import React from 'react';
import Radio from '../components/Radio'
import styled from 'styled-components';

const FormQuestion = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
`
const Button = styled.button`
    padding: .5rem 1rem;
    background-color: red;
    color: #efefef;

    cursor: pointer;
`
const Answer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`


const perguntas = [
  {
    pergunta: 'Quando o Henrique tá certo e a Agatha tá errada, quem tá certo?',
    options: [
      'Agatha',
      'Henrique',
      'Nenhum dos dois',
    ],
    resposta: 'Agatha',
    id: 'p1',
  },
  {
    pergunta: 'Quando o Henrique tá errado e a Agatha tá errada, quem tá certo?',
    options: [
        'Agatha',
        'Henrique',
        'Nenhum dos dois',
    ],
    resposta: 'Agatha',
    id: 'p2',
  },
  {
    pergunta: 'Quando o Henrique tá errado e a Agatha tá certa, quem tá certo?',
    options: [
        'Agatha',
        'Henrique',
        'Nenhum dos dois',
    ],
    resposta: 'Agatha',
    id: 'p3',
  },
  {
    pergunta: 'Quando o Henrique tá certo sobre um assunto que ele domina e a Agatha não tem a menor ideia do que se trata o assunto, quem tá certo?',
    options: [
        'Agatha',
        'Henrique',
        'Nenhum dos dois',
    ],
    resposta: 'Agatha',
    id: 'p4',
  },
];

interface RespostasState {
  [key: string]: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

function Home() {
  const [respostas, setRespostas] = React.useState<RespostasState>({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState<number>(0);
  const [resultado, setResultado] = React.useState<string | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRespostas({ ...respostas, [event.target.id]: event.target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function reiniciarQuiz() {
    setRespostas({
      p1: '',
      p2: '',
      p3: '',
      p4: '',
    });
    setSlide(0);
    setResultado(null);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <FormQuestion onSubmit={(event) => event.preventDefault()}>
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
          <Button onClick={reiniciarQuiz}>Reiniciar</Button>
        </Answer>
      ) : (
        <Button onClick={handleClick}>Próxima</Button>
      )}
    </FormQuestion>
  );
}

export default Home

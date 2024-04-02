import styled from 'styled-components';

const ContainerRadio = styled.div`
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
`
const TitleQuestion = styled.h2`
    margin-bottom: 1rem;
`
const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

interface RadioProps {
    pergunta: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    active: boolean;
  }

  const Radio: React.FC<RadioProps> = ({ pergunta, options, onChange, value, id, active }) => {
    if (active === false) return null;
    return (
      <ContainerRadio>
            <TitleQuestion>{pergunta}</TitleQuestion>
            <Question>
                {options.map((option) => (
                    <label
                        key={option}
                    >
                    <input
                        type="radio"
                        id={id}
                        checked={value === option}
                        value={option}
                        onChange={onChange}
                    />
                    {option}
                </label>
                ))}
            </Question>
      </ContainerRadio>
    );
  };

export default Radio
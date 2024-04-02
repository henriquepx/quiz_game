import styled from 'styled-components';

const ContainerRadio = styled.div`
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleQuestion = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    max-width: 60ch;
`
const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const LabelQuestion = styled.label`
    background-color: #e0e0e0;
    padding: .6rem 1rem;
    border-radius: 15px;
    width: 700px;
`
const InputQuestion = styled.input`
    margin-right: 1rem;
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
                    <LabelQuestion
                        key={option}
                    >
                    <InputQuestion
                        type="radio"
                        id={id}
                        checked={value === option}
                        value={option}
                        onChange={onChange}
                    />
                    {option}
                </LabelQuestion>
                ))}
            </Question>
      </ContainerRadio>
    );
  };

export default Radio
import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const QuestionCardContainer = styled.div`
    padding: .9rem;
    background-color: #eeeeee;
    border-radius: 10px;

    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TitleCard = styled.h1`
    margin-top: .5rem;
`
const TextCard = styled.p`
    margin: 2px 0;
    font-weight: 300;
    font-size: 1rem;
`
const ButtonToQuiz = styled.a`
    background-color: #00b7ff;
    text-align: center;
    padding: .5rem;
    margin-top: .5rem;
    a {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`

const BackgroundImageContainer = styled.div<{ imgUrl: string }>`
    background-image: url(${props => props.imgUrl});
    background-size: cover; 
    background-position: center;
    width: 100%;
    height: 200px;
    border-radius: 10px; 
`;

interface CardQuestionProps {
    imgUrl: string;
    title: string;
    text: string;
    linkTo: string;
  }

  const CardQuestion = ({ imgUrl, title, text, linkTo }: CardQuestionProps) => {
  return (
      <QuestionCardContainer>
          <BackgroundImageContainer imgUrl={imgUrl} />
          <div>
                <TitleCard>{title}</TitleCard>
                <TextCard>{text}</TextCard>
          </div>
          <ButtonToQuiz>
              <Link to={linkTo}>
                  Play
                  <FaPlay />
              </Link>
          </ButtonToQuiz>
    </QuestionCardContainer>
  )
}

export default CardQuestion
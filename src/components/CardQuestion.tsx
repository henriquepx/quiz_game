import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const QuestionCardContainer = styled.div`
    padding: .9rem;
    background-color: #f1f1f1;
    border-radius: 10px;

    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
`
const TitleCard = styled.h1`
    margin-top: .5rem;
`
const ButtonToQuiz = styled(Link)`
    background-color: #00b7ff;
    text-align: center;
    padding: .6rem;
    margin-top: .5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #fff;
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
    linkTo: string;
  }

  const CardQuestion = ({ imgUrl, title, linkTo }: CardQuestionProps) => {
  return (
      <QuestionCardContainer>
          <BackgroundImageContainer imgUrl={imgUrl} />
          <div>
                <TitleCard>{title}</TitleCard>
          </div>
          <ButtonToQuiz to={linkTo}>
                  Play
                  <FaPlay />
          </ButtonToQuiz>
    </QuestionCardContainer>
  )
}

export default CardQuestion
import styled, { keyframes } from 'styled-components';
import CardQuestion from '../components/CardQuestion';
import { useState } from 'react';

import ReactWallpaperCard from '../assets/cardthemes/react.png'
import Typescript from '../assets/cardthemes/typescript.png'
import JavaScript from '../assets/cardthemes/js.jpg'
import Tailwind from '../assets/cardthemes/tailwind.jpg'
import Python from '../assets/cardthemes/python.png'
import NodeJS from '../assets/cardthemes/node.jpg'
import MySQL from '../assets/cardthemes/mysql.png'

const MainContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 7rem;
    h1 {
        font-size: 1.3rem;
        color: #313131;
        margin-bottom: .3rem;
    }
`
const slideInFromBottom = keyframes`
    from {
        transform: translateY(15px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const QuizzesWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    animation: ${slideInFromBottom} 1.2s ease forwards;
    @media (max-width: 770px) {
        justify-content: center;
    }
`
const MoreQuizzesLink = styled.a`
    text-decoration: none;
    color: #000000;
    width: 100%;
    cursor: pointer;
    text-align: center;
`;

const Main = () => {

    const [showMoreQuizzes, setShowMoreQuizzes] = useState(false);

    const handleShowMoreQuizzes = () => {
        setShowMoreQuizzes(true);
    };
    return (
        <MainContainer>
            <QuizzesWrap>
                <CardQuestion
                    imgUrl={ReactWallpaperCard}
                    title='React Quiz'
                    linkTo='/reactquiz'
                />
                 <CardQuestion
                    imgUrl={Typescript}
                    title='TypeScript Quiz'
                    linkTo='/typescriptquiz'
                />
                <CardQuestion
                    imgUrl={JavaScript}
                    title='JavaScript Quiz'
                    linkTo='/javascriptquiz'
                />
                 <CardQuestion
                    imgUrl={Tailwind}
                    title='Tailwind Quiz'
                    linkTo='/tailwindquiz'
                />
                <CardQuestion
                    imgUrl={Python}
                    title='Python Quiz'
                    linkTo='/pythonquiz'
                />
                 <CardQuestion
                    imgUrl={NodeJS}
                    title='NodeJS Quiz'
                    linkTo='/nodequiz'
                />

                {showMoreQuizzes && (
                    <>
                        <CardQuestion
                            imgUrl={MySQL}
                            title='MySQL Quiz'
                            linkTo='/mysqlquiz'
                        />

                    </>
                )}

                {!showMoreQuizzes && (
                    <MoreQuizzesLink onClick={handleShowMoreQuizzes}>Ver mais Quizzes</MoreQuizzesLink>
                )}
                
            </QuizzesWrap>
        </MainContainer>
    )
}

export default Main
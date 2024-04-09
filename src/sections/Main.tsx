import styled, { keyframes } from 'styled-components';
import CardQuestion from '../components/CardQuestion';
import { useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

import ReactWallpaperCard from '../assets/cardthemes/react.png'
import Typescript from '../assets/cardthemes/typescript.png'
import JavaScript from '../assets/cardthemes/js.jpg'
import Tailwind from '../assets/cardthemes/tailwind.jpg'
import Python from '../assets/cardthemes/python.png'
import NodeJS from '../assets/cardthemes/node.jpg'
import MySQL from '../assets/cardthemes/mysql.png'
import Csharp from '../assets/cardthemes/csharp.png'
import Git from '../assets/cardthemes/git.png'
import Java from '../assets/cardthemes/java.jpg'
import Next from '../assets/cardthemes/next.png'
import HTMLCSS from '../assets/cardthemes/htmlcss.png'

const OpenMoreQuizzes = keyframes`
    0%, 100% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(0);
    }
`;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    width: 100%;
    color: #000000;
    cursor: pointer;
    text-align: center;
    margin-top: 2rem;
    animation: ${OpenMoreQuizzes} 1.2s infinite;
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
                        <CardQuestion
                            imgUrl={Csharp}
                            title='C# Quiz'
                            linkTo='/csharpquiz'
                        />
                        <CardQuestion
                            imgUrl={Git}
                            title='Git Quiz'
                            linkTo='/gitquiz'
                        />
                        <CardQuestion
                            imgUrl={HTMLCSS}
                            title='HTML & CSS Quiz'
                            linkTo='/htmlcssquiz'
                        />
                        <CardQuestion
                            imgUrl={Java}
                            title='Java Quiz'
                            linkTo='/javaquiz'
                        />
                        <CardQuestion
                            imgUrl={Next}
                            title='NextJS Quiz'
                            linkTo='/nextjsquiz'
                        />
                    </>
                )}

                {!showMoreQuizzes && (
                    <MoreQuizzesLink onClick={handleShowMoreQuizzes}>Ver mais Quizzes <FaArrowDownLong /></MoreQuizzesLink>
                )}
                
            </QuizzesWrap>
        </MainContainer>
    )
}

export default Main
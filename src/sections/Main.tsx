import styled from 'styled-components';
import CardQuestion from '../components/CardQuestion';

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
    h1 {
        font-size: 1.3rem;
        color: #313131;
        margin-bottom: .3rem;
    }
`
const QuizzesWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

const Main = () => {
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
                <CardQuestion
                    imgUrl={MySQL}
                    title='MySQL Quiz'
                    linkTo='/mysqlquiz'
                />
            </QuizzesWrap>
        </MainContainer>
    )
}

export default Main
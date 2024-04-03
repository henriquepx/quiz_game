import styled from 'styled-components';
import CardQuestion from '../components/CardQuestion';

import ReactWallpaperCard from '../assets/cardthemes/react.png'
// import Amor from '../assets/cardthemes/amor.jpg'

const MainContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    padding: .5rem 1rem; 
    h1 {
        font-size: 1.3rem;
        color: #313131;
        margin-bottom: .3rem;
    }
`
const QuizzesWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 30px;
`


const Main = () => {
    return (
        <MainContainer>
            <h1>Quizzes de Programação</h1>
            <p>Aqui você encontrará quizzes para praticar os conceitos sobre programação.</p>
            <p>Escolha um tema abaixo e clique em "Play" para prosseguir.</p>
            <QuizzesWrap>
                <CardQuestion
                    imgUrl={ReactWallpaperCard}
                    title='React Quiz'
                    text='Esse é um questionário sobre o framework ReactJS, teste seu conhecimento jogando clicando no botão abaixo:'
                    linkTo='/reactquiz'
                />
                {/* <CardQuestion
                    imgUrl={Amor}
                    title='Nosso amor'
                    text='Esse é um questionário sobre o nosso relacionamento, teste seu conhecimento jogando clicando no botão abaixo:'
                    linkTo='/reactquiz'
                /> */}
            </QuizzesWrap>
        </MainContainer>
    )
}

export default Main
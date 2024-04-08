import Header from '../sections/Header';
import Main from '../sections/Main';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <Main />
        </HomeContainer>
    )
}

export default Home
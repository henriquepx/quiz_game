import styled from 'styled-components';
import Header from '../sections/Header';
import Main from '../sections/Main';

const HomeContainer = styled.div`

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
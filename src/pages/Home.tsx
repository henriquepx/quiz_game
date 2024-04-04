import Header from '../sections/Header';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <Main />
            <Footer />
        </HomeContainer>
    )
}

export default Home
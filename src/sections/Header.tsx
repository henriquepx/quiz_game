import styled from 'styled-components';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const HeaderContainer = styled.header`
  padding: .5rem 1rem;
  border-bottom: 1px solid #e4e4e4;
`
const HeaderSize = styled.header`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavHeader = styled.nav`
  display: flex;
  gap: 10px;
  @media (max-width: 530px) {
    display: none;
  }
  a {
    color: #000;
  }
`
const TitleHeader = styled.h1`
  font-family: "Bangers", system-ui;
  font-size: 1.5rem;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSize>
        <TitleHeader>QuizGames</TitleHeader>
          <NavHeader>
            <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'><FaLinkedinIn size={22} /></a>
            <a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'><FaGithub  size={22}  /></a>
          </NavHeader>
        </HeaderSize>
    </HeaderContainer>
  )
}

export default Header
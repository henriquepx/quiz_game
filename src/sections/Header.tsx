import styled from 'styled-components';
import HamburgerIcon from '../assets/hamburger.svg'

const HeaderContainer = styled.header`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    padding: .5rem 1rem;
    justify-content: space-between;
`
const HamburgerMenu = styled.img`
    width: 35px;
    cursor: pointer;
`

const Header = () => {
  return (
      <HeaderContainer>
          <h1>Henrique</h1>
          <div>
            <HamburgerMenu src={HamburgerIcon} alt="Hamburger Icon" />
          </div>
    </HeaderContainer>
  )
}

export default Header
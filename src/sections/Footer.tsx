import styled from 'styled-components'
import { TfiAngleDown } from "react-icons/tfi";

const FooterContainer = styled.footer`
    padding: .7rem 1rem;
    border-top: 1px solid #e4e4e4;
    margin-top: 3rem;
`
const FooterSize = styled.footer`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    @media (max-width: 530px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
    }
`
const ChangeLanguage = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: #000;
`
const DivFooter = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 530px) {
        flex-direction: column;
    }
    a {
        color: #000;
    }
`

const Footer = () => {
  return (
      <FooterContainer>
          <FooterSize>
              <ChangeLanguage href="#">PT-BR <TfiAngleDown /></ChangeLanguage>
              <DivFooter>
                  <a href="#">Sobre</a>
                  <a href="#">Termos e condições</a>
                  <a href="#">Política de privacidade</a>
              </DivFooter>
          </FooterSize>
      </FooterContainer>
  )
}

export default Footer
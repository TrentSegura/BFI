import React from 'react'
import styled from 'styled-components'

import {Grid, Col2_2} from '../style'
import {ReactComponent as LogoSVG} from '../assets/m12_BFI_logo.svg'

const HeaderFlexWrapper = styled.div`
  padding: 11vw 7vw 10vw 7vw;
  margin: 0 auto;
`

const TextBox = styled.div`
  ${Grid}

  h2 {
    ${Col2_2}
  }

  p {
    ${Col2_2}
  }

  @media (max-width: 500px) {
    margin-top: 1.6187rem;
  }
`

const Logo = styled(LogoSVG)`
  grid-column: 1 / 7;
  grid-row: 1 / span 2;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  height: auto;
  align-self: center;
  opacity: 0.85;

  @media (min-width: 1500px) {
    max-width: 300px;
  }

  @media (max-width: 950px) {
    grid-column: 1;
    width: 100%;
    padding: 0 2.5vw;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
    width: 40vw;
    margin: 1rem auto 2rem;
    padding: 0;
  }
`

const Header = ({toggle}) => {
  return (
    <>
      <HeaderFlexWrapper id="top">
        <TextBox>
          <Logo />
          <h2>WHAT WE DO</h2>
          <p>
            Over the last several years, over 600,000 acres of land has burned in Colorado
            wildfires, while other parts of the Americas and Australia have also experienced
            dramatic increases in forest fire activity. The dry climate coupled with other erratic
            climatological conditions and human error have produced an unrelenting anxiety that is
            now commonplace among those living in rural parts of the American West. The{' '}
            <strong>Black Forest Institute (BFI)</strong> has a focus on opening up a space for
            community discussion around these topics. The institute and campus is an artwork focused
            on inviting visitors to develop a deeper understanding of our collective shifting
            climates and rural futures.
          </p>
        </TextBox>
      </HeaderFlexWrapper>
    </>
  )
}

export default Header

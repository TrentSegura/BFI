import React from 'react'
import styled from 'styled-components'
import {Marginals} from '../../style'

import ImgSrc from '../../assets/m12_BFI_001.jpg'

const HeroContainer = styled.div`
  /* max-width: 1400px; */
  margin: 0 auto;
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 56.25%;
  z-index: 1;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const ImageCaption = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.5px;
  font-weight: 300;
`
const Location = styled.span`
  font-weight: 500;
`

const Wrapper = styled.div`
  ${Marginals}
`

const Hero = () => {
  return (
    <>
      <Wrapper>
        <HeroContainer>
          <Image
            alt="Black Forest, Section 16 August 17, 2020. The Black Forest Fire of 2013 burned nearly 15,000 acres and destroyed over 500 homes."
            src={ImgSrc}
          />
        </HeroContainer>
        <ImageCaption>
          <Location>Black Forest, Section 16</Location> August 17, 2020. The Black Forest Fire of
          2013 burned nearly 15,000 acres and destroyed over 500 homes.
        </ImageCaption>
      </Wrapper>
    </>
  )
}

export default Hero

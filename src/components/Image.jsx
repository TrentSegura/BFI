import React from 'react'
import styled from 'styled-components'

import Img02 from '../assets/m12_BFI_007.jpg'

const ImageWrapper = styled.div`
  margin: 0 7vw 10vw;
`
const ImageContainer = styled.div`
  grid-column: span 8;
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 66.66%;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 500px) {
    grid-column: 1;
  }
`
const ImageCaption = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  line-height: 1.25;
  font-size: 0.8em;
  letter-spacing: 0.5px;
  font-weight: 300;
  text-align: left;
`

const Image = () => {
  return (
    <>
      <ImageWrapper>
        <ImageContainer>
          <img src={Img02} alt="Black Forest Institute" />
        </ImageContainer>
        <ImageCaption>
          2021, Bootleg Fire in Oregon has burned over 399,359 Acres
          (https://inciweb.nwcg.gov/incident/7609/). Image src: KOIN.com
        </ImageCaption>
      </ImageWrapper>
    </>
  )
}

export default Image

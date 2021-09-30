import React from 'react'
import styled from 'styled-components'
// import {Marginals} from '../style'

const ImageWrapper = styled.div`

  padding: 0 7vw;
`

const ImageContainer = styled.div`
  position: relative;
  display: block;
  padding-bottom: 56.25%;
  grid-column: 1 / span 12;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
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

const ImageComponent = (image) => {
  return (
    <>
      <ImageWrapper>
        <ImageContainer>
          <img src={image.image} alt="Black Forest Institute" />
        </ImageContainer>
        <ImageCaption>
          <Location>Black Forest, Section 16</Location> June, 13 2013.  Material for this artwork was harvested from burn scars near Black Forest and Granby, Colorado.
        </ImageCaption>
      </ImageWrapper>
    </>
  )
}

export default ImageComponent

import React from 'react'
import styled from 'styled-components'
import {Marginals, Grid} from '../style'

const Wrapper = styled.div`
  ${Grid}
  ${Marginals}
  margin-top: 5vw;
  margin-bottom: 5vw;
  @media (max-width: 500px) {
    padding-bottom: 10vw;
  }

  img {
    width: 100%;
    align-self: center;
    margin-bottom: 5vw;
    grid-column: 1 / 10;
  }

  img:last-of-type {
    margin-bottom: 0;
  }
`

const ImageGallery = () => {
  return (
    <>
      <Wrapper>
        {Images.map((Image, _index) => (
          <img
            src={`${process.env.PUBLIC_URL}/assets/gallery/` + Image}
            alt="Black Forest Institute Micro Campus"
            key={_index}
          />
        ))}
      </Wrapper>
    </>
  )
}

export default ImageGallery

const Images = ['07.jpg', '02.jpg', '03.jpg']

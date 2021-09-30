import React from 'react'
import {Marginals, Grid, Col2_2} from '../style'
import styled from 'styled-components'
import Image from '../assets/m12_BFI_009.jpg'
import Image01 from '../assets/08.jpg'

const Wrapper = styled.div`
  ${Grid}
  ${Marginals}
  margin-top: 5vw;
  margin-bottom: 5vw;
  /* img {
    width: 100%;
    grid-column: 2 / 6 !important;
    grid-row: 1;
  } */

  @media (max-width: 500px) {
    padding-bottom: 10vw;
    margin-top: 10vw;
  }

  #render {
    grid-row: 2;
    grid-column: 1 / 10;

    @media (max-width: 950px) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    @media (max-width: 500px) {
      grid-column: 1;
    }
  }

  #footprint {
    ${Col2_2}
    // margin-top: 2.5vw;

    @media (max-width: 950px) {
      grid-column: 2 / 3;
      grid-row: 4;
    }

    @media (max-width: 500px) {
      grid-column: 1;
    }
  }

  img {
    width: 100%;
    align-self: center;
    margin-bottom: 5vw;
  }
`

const TextContainer = styled.div`
  margin-bottom: 5vw;
  ${Col2_2}

  /* align-self: center; */

 h2, p {
  }

  h2 {
    align-self: end;
    margin-bottom: 1rem;
  }
`

const TextBoxComponent = () => {
  return (
    <>
      <Wrapper>
        <TextContainer id="pedagogy">
          <h2>Pedagogy</h2>
          <p>
            The Black Forest Institute is an outdoor public artwork that operates as an experimental
            art and forestry school. The institute is conceived as an active knowledge-sharing
            platform of fireside dialogues and skill sharing events around topics as diverse as:
            forest fire prevention, personal stories, revegetating in the forest, axe sharpening,
            the forest as pantry, and skills such as tree felling, tree planting and two-person saw
            techniques.
          </p>
        </TextContainer>
        <img src={Image01} alt="BFI" id="render" />
        <TextContainer id="microcampus">
          <h2>Micro Campus</h2>
          <p>
            The campus consists of three primary elements; <em>the woodshed</em>, a rural inspired
            structure made from rough cut timber, <em>a work bench</em>, and an{' '}
            <em>outdoor fireplace</em>. This space is unique in that it is constructed out of wood
            harvested from regional burn scar areas. Already burned once by wildfire, the pieces of
            wood used during the fireside events are odiferous, charred, drip with sap, and resonate
            as fuel for igniting generative conversations and new intentions for this unprecedented
            moment.
          </p>
        </TextContainer>
        <img src={Image} alt="BFI" id="footprint" />
      </Wrapper>
    </>
  )
}

export default TextBoxComponent

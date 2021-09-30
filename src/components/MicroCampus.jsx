import React from 'react'
import {Marginals, Grid, Col2_2} from '../style'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${Marginals}

  padding-top: 2.5vw;
  padding-bottom: 10vw;
`

const TextContainer = styled.div`
  ${Grid}

  h2 {
    ${Col2_2}
    color: var(--white);
  }

  p {
    ${Col2_2}
    color: var(--white);
  }
`

const MicroCampus = () => {
  return (
    <>
      <Wrapper id="microcampus">
        <TextContainer>
          <h2>Micro Campus</h2>
          <p>
            The campus consists of three primary elements; <em>the woodshed</em>, a rural inspired
            structure made from rough cut timber, <em>a worktable</em>, <em>tool bench</em>, and{' '}
            <em>outdoor fireplace</em>. This space is unique in that it is constructed out of wood
            harvested from regional burn scar areas. Already burned once by wildfire, the pieces of
            wood used during the fireside events are odiferous, charred, drip with sap, and resonate
            as fuel for igniting generative conversations and new intentions for this unprecedented
            moment.
          </p>
        </TextContainer>
      </Wrapper>
    </>
  )
}

export default MicroCampus

import React from 'react'
import {Marginals, Grid, Col2_2} from '../style'
import styled from 'styled-components'
import Image from '../assets/m12_BFI_011.jpg'

const Wrapper = styled.div`
  ${Marginals}
  padding-top: 7vw;
  padding-bottom: 7vw;
`

const TextContainer = styled.div`
  ${Grid}

  h2,
  h3, h4,
  P {
    ${Col2_2}
  }

  h3 {
    font-weight: 400;
  }

  img {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  grid-column: 1 / 10;
  grid-row: 1;
  align-self: center;
  margin-bottom: 5vw;

  @media (max-width: 950px) {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    margin-top: 5vw;
  }
`

const ImageCaption = styled.p`
  margin-top: 0.5rem;
  line-height: 1.25;
  font-size: 0.8em;
  letter-spacing: 0.5px;
  font-weight: 300;
  text-align: left;
`

const CTA = styled.div`
  ${Col2_2}

  h4 {
    line-height: 1.25;
    margin-bottom: 0.5rem;
    max-width: 40ch;
    display: block;
    margin: auto;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`
const Btn = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const FireSideChats = () => {
  return (
    <div>
      <Wrapper>
        <TextContainer>
          <ImageContainer>
            <img src={Image} alt="BFI" />
            <ImageCaption>
              A ridge of flames near Granby, Colorado, October 2020. Photograph by David
              Zalubowski/AP
            </ImageCaption>
          </ImageContainer>

          <h2 id="fireside">Fireside Dialogues</h2>
          <p>
            M12 STUDIO in collaboration with curator Daisy McGowan have programmed a year's worth of
            discussions through the Black Forest Institute at the Ent Center for the Performing Arts
            Sculpture Lawn. Each Fireside Dialogue is an opportunity for sharing knowledge, stories
            and wisdom about our regional forests, trees and woodlands. The Black Forest Institute
            is interested in providing space for constructively addressing the complexities of
            forest fire and related subjects such as fire impact, rural futures, and global climate
            awareness.
          </p>
          <p>
            The <strong>Black Forest Institute</strong> project has been supported by the exhibition{' '}
            <em>The Space(s) Between</em> curated by Donald Fodness, Daisy McGowan and Geoffrey
            Shamos, and is part of UCCS GOCA's curated Art WithOut Limits Public Sculpture Series.
            Additional support for this project has been provided by the Green Action Fund and the
            CU President's Fund for the Humanities. The project is sited at the Sculpture Lawn at
            the Ent Center for the Arts, University of Colorado, Colorado Springs. The Black Forest
            Institute is not affiliated with any university and is an auxiliary unit of M12 STUDIO.
            Project team: Richard Saxton, Trent Segura, George P. Perez, Aaron Treher.
          </p>

          <CTA>
            <h4>
              Find out about future Fireside Dialogues & sign up to be part of the conversation.
            </h4>
            <a href="mailto:TICKETS@uccs.edu?cc=gallery@uccs.edu&subject=SIGN%20UP%20FOR%20FUTURE%20M12%20FIRESIDE%20DIALOGUES%20SERIES%20at%20Ent%20Center%20for%20the%20Arts&body=Please%20sign%20me%20up%20to%20learn%20more%20about%20M12%20Fireside%20Dialogues%20Series%20events%20happening%20fall%2C%202021%20and%20spring%2C%202022.%0D%0AMy%20full%20name%3A%0D%0Abest%20email%20%26%20phone%20contact%3A">
              <Btn>Email to Sign Up</Btn>
            </a>
          </CTA>
        </TextContainer>
      </Wrapper>
    </div>
  )
}

export default FireSideChats

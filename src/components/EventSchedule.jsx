import React from 'react'
import styled from 'styled-components'
// import img from '../assets/m12_BFI_004.jpg'
import {Col2_2} from '../style'

const Wrapper = styled.div`
  /* grid-column: 2; */
  /* ${Col2_2} */

  border-top: 1px solid var(--white);
  display: grid;
  grid-template-columns: 100px 1fr;
  width: 100%;
  margin-bottom: 0.8rem;
  padding-top: 2rem;
  /* @media (max-width: 500px) {
    grid-column: 1;
  } */

  :hover {
    /* background-color: hsl(0, 0%, 65%); */
  }
`

const Date = styled.div`
  /* padding-top: 3px; */
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;

  > * {
    margin: 0;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
  }
`

const Month = styled.h4`
  text-transform: uppercase;
`

const Time = styled.h4``

const Speaker = styled.div`
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.h4`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`

const Handle = styled.h4`
  font-weight: 300;
  font-size: 16px;
`

const Title = styled.h3`
  text-transform: none !important;
  margin: 0;
`

// const SignUp = styled.button`
//   /* grid-column: 1/ 3; */
//   grid-row: 3;
//   height: 40px;
//   padding: 0;
//   width: 50%;
//   margin-top: 1rem;
//   float: right;
// `

const EventSchedule = () => {
  return (
    <>
      <Wrapper>
        <Date>
          <Month>July 29</Month>
          <Time>7:00 PM</Time>
        </Date>
        <Speaker>
          <Name>M12 STUDIO</Name>
          <Handle>With Special Guests</Handle>
          <Title>Inaugural Fireside Dialogue</Title>
        </Speaker>
      </Wrapper>
    </>
  )
}

export default EventSchedule

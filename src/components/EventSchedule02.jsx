import React from 'react'
import styled from 'styled-components'
import img from '../assets/m12_BFI_008.jpg'
import {Col2_2} from '../style'

const Wrapper = styled.div`
  /* grid-column: 2; */
  /* ${Col2_2} */

  border-top: 0.75px solid hsl(0, 0%, 35%);
  column-gap: 2em;
  display: grid;
  grid-template-columns: 102px 1fr;
  width: 100%;
  margin-bottom: 1.5rem;
  padding-top: 2rem;

  > * {
    color: ${({$isOver}) => ($isOver ? 'hsl(0,0%,25%)' : 'var(--white);')};
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
  font-weight: 500;
  display: inline-block;
  width: content;
  color: hsl(0, 0%, 35%);
`

const Handle = styled.h4`
  font-weight: 300;
  display: inline-block;
  width: content;
  font-size: 1rem;
  font-style: italic;
  color: hsl(0, 0%, 35%);
`

const Topic = styled.div`
  grid-column: 2;
  img {
    width: 100%;
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    grid-column: 1 / 3;
  }
`

const Title = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0;
  /* margin: 0.5rem 0; */
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({$isOver}) => ($isOver ? 'hsl(0,0%,25%)' : 'var(--white);')};
`

const SignUp = styled.button`
  grid-column: 2;
  height: 40px;
  padding: 0;
  width: 50%;
  margin-top: 1.5rem;
  margin-left: auto;
`

const EventSchedule = ({data}) => {
  return (
    <>
      <Wrapper $isOver={data.over}>
        <Date>
          <Month>{data.date}</Month>
          <Time>{data.time}</Time>
        </Date>
        <Speaker>
          <Title>{data.title}</Title>
          <Name>{data.name}</Name>
          {data.handle ? <Handle>{data.handle}</Handle> : ''}
        </Speaker>
        <Topic>
          {data.image ? (
            <img src={`${process.env.PUBLIC_URL}/assets/` + data.image} alt={data.title} />
          ) : (
            ''
          )}
          {data.description ? (
            <Description $isOver={data.over}>{data.description}</Description>
          ) : (
            ''
          )}
        </Topic>
        {data.tickets ? <SignUp>Sign Up</SignUp> : ''}
      </Wrapper>
    </>
  )
}

export default EventSchedule

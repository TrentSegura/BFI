import React from 'react'
import {Marginals, Grid, Col2_2} from '../style'
import styled from 'styled-components'
import EventSchedule02 from './EventSchedule02'
import Prerequisites from './Prerequisites'
import Resources from './Resources'

const Wrapper = styled.div`
  ${Marginals}
  ${Grid}
`

const Container = styled.div`
  ${Col2_2}

  h3 {
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`

const ScrollWindow = styled.div`
  ${Col2_2}
`

const UpComingEvents = () => {
  return (
    <>
      <Wrapper>
        <Container id="events">
          <h3>Upcoming Events:</h3>
          <p>
            All events will take place on the Sculpture Lawn at the Ent Center for Performing Arts,
            University of Colorado, Colorado Springs.
          </p>
          <p>
            5225 N Nevada Ave, <br></br>Colorado Springs, CO 80918
          </p>
          <p>
            We kindly request each attendees to watch the following videos and research the speaker
            beforehand.
          </p>
          <Prerequisites />
        </Container>
        <ScrollWindow>
          {EventData.map((data, index) => (
            <EventSchedule02 data={data} key={index} />
          ))}
        </ScrollWindow>
        <Resources />
      </Wrapper>
    </>
  )
}

export default UpComingEvents

const EventData = [
  {
    date: 'Sept. 30',
    time: '6:30 PM',
    title: 'Tree Ring Lab',
    name: 'Dr. Christine Biermann',
    handle:
      'Assistant Professor of Geography and Environmental Studies at UCCS and the Director of the Tree Ring Lab',
    image: '',
    description: `With UCCS students and colleagues, Christine studies how climate change is affecting Colorado's ecosystems, and particularly its forests.`,
    tickets: '',
  },
  {
    date: 'Oct. 7',
    time: 'TBA',
    title: 'Fireside Dialogue',
    name: 'Nina Elder',
    handle: 'Visual Artist',
    image: 'bfi_06.jpg',
    description: `Artist and researcher Nina Elder creates projects that reveal humanity’s dependence on, and interruption of, the natural world. With a focus on changing cultures and ecologies, Nina advocates for collaboration, fostering relationships between institutions, artists, scientists and diverse communities. She is the co-founder of the Wheelhouse Institute, a women’s climate leadership initiative. Nina lectures as a visiting artist/scholar at universities, develops publicly engaged programs, and consults with organizations that seek to grow through interdisciplinary programming.`,
    tickets: '',
  },
  {
    date: 'Oct. 21',
    time: 'TBA',
    title: 'Fireside Dialogue',
    name: 'Erika Osborne',
    handle: 'Visual Artist',
    image: '',
    description: ``,
    tickets: '',
  },
  {
    date: 'Oct. 27',
    time: 'TBA',
    title: 'Fireside Dialogue',
    name: 'Dylan Harris',
    handle: 'Visual Artist',
    image: '',
    description: '',
    tickets: '',
  },
  {
    date: 'July 29',
    time: '7:00 PM',
    title: 'Inaugural Fireside Dialogue',
    name: 'M12 STUDIO',
    handle: '',
    image: '',
    description: '',
    tickets: '',
    over: true,
  },
  {
    date: 'Summer 2021',
    time: 'TBA',
    title: 'Fireside Dialogue',
    name: 'Uta Kögelsberger',
    handle: 'Visual Artist',
    image: 'bfi_01.png',
    description: `Uta Kögelsberger is a London based visual artist whose work articulates and engages with social and political concerns through the languages of photography, video, sculpture and sound.`,
    tickets: '',
    over: true,
  },
  {
    date: 'Summer 2021',
    time: 'TBD',
    title: 'Fireside Dialogue',
    name: 'Joseph Kunkel',
    handle: 'Principal and Director of SNC Design Lab',
    image: 'bfi_02.png',
    description: `Joseph Kunkel is Principal and Director of SNC Design Lab in Santa Fe, New Mexico. Joseph, a citizen of the Northern Cheyenne Nation, is Director of MASS's Sustainable Native Communities Design Lab based in Santa Fe.`,
    tickets: '',
    over: true,
  },
  {
    date: 'Fall 2021',
    time: 'TBD',
    title: 'Beers Made By Walking',
    name: 'Eric Steem',
    handle: '',
    image: '',
    description: '',
    tickets: '',
    over: true,
  },
]

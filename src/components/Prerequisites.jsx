import React from 'react'
import styled from 'styled-components'

import {HiExternalLink} from 'react-icons/hi'

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  iframe {
    grid-column: span 1;
  } */

  li {
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
    margin-bottom: 0.5rem;
  }

  li a {
    text-decoration: none;
  }

  li a:hover {
    text-decoration: underline;
  }
`

const youtubeLinks = [
  {
    src: 'https://www.youtube.com/watch?v=WbwHRUl87Tk',
    title: 'The Fire Line: Wildfire in Colorado',
  },
  {
    src: 'https://www.youtube.com/watch?v=bo0yBOCvuwU',
    title: 'A High and Awful Price: Lessons Learned From the Camp Fire',
  },
]

const Prerequisites = () => {
  return (
    <Container>
      <ul>
        {youtubeLinks.map((links, index) => (
          <li key={index}>
            <a href={links.src} target="_blank" rel="noreferrer">
              <HiExternalLink /> {links.title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Prerequisites

import React from 'react'
import styled from 'styled-components'

const ResourceContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 950px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  @media (max-width: 500px) {
    min-height: 25vh;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  h3 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  li {
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
    margin-bottom: 0.5rem;
    margin-left: 1rem;
  }

  li a {
    text-decoration: none;
  }

  li a:hover {
    text-decoration: underline;
  }
`

const links = [
  {
    src: 'https://nocofireshed.org',
    title: 'Northern Colorado Fireshed Collaborative',
  },
  {
    src: 'https://dornsife.usc.edu/icw/podcast/',
    title: 'The West On Fire [podcast]',
  },
]

const Resources = () => {
  return (
    <ResourceContainer id="resources">
      <h3>Additional Resources:</h3>
      <ul>
        {links.map((links, index) => (
          <li key={index}>
            <a href={links.src} target="_blank" rel="noreferrer">
              {links.title}
            </a>
          </li>
        ))}
      </ul>
    </ResourceContainer>
  )
}

export default Resources

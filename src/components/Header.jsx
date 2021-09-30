import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Grid} from '../style'

import {FiMenu} from 'react-icons/fi'

const NavBarWrapper = styled.div`
  ${Grid}
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  text-transform: uppercase;
  padding: 1rem 7vw;
  background-color: var(--black);
  z-index: 100;

  a {
    text-decoration: none;
  }
`

const Title = styled(Link)`
  text-align: left;
  grid-column: 1 / 4;
  font-size: 14px;
  // font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;

  @media (max-width: 950px) {
    grid-column: 1/2;
  }

  @media (max-width: 800px) {
    grid-column: 1/3;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 1.6187rem;
  margin-left: auto;
  grid-column: 4 / 13;

  @media (max-width: 950px) {
    grid-column: 2;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const NavItem = styled(Link)`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;

  :hover {
    border-bottom: 1px solid var(--white);
  }
`

export const MobileIcon = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 1rem 7vw;
  font-size: 20px;

  :active {
    transform: scale(0.9);
  }

  @media (max-width: 900px) {
    display: block;
  }
`

const Header = ({toggle}) => {
  return (
    <>
      <NavBarWrapper>
        <Title to="top" smooth={true}>
          Black Forest Institute
        </Title>
        <Nav>
          <NavItem to="pedagogy" smooth={true} offset={-80}>
            Pedagogy
          </NavItem>
          <NavItem to="microcampus" smooth={true} offset={-80}>
            Micro Campus
          </NavItem>
          <NavItem to="fireside" smooth={true} offset={-80}>
            Fireside Dialogues
          </NavItem>
          <NavItem to="events" smooth={true} offset={-80}>
            Upcoming Events
          </NavItem>
        </Nav>
        <MobileIcon onClick={toggle}>
          <FiMenu />
        </MobileIcon>
      </NavBarWrapper>
    </>
  )
}

export default Header

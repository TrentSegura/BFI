import React from 'react'
import styled from 'styled-components'
import {FiX} from 'react-icons/fi'
import {Link} from 'react-scroll'
// import {ReactComponent as LogoSVG} from '../assets/m12_BFI_logo.svg'

const SidebarContainer = styled.section`
  position: fixed;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 2.5%);
  overflow: hidden;

  display: grid;
  align-items: center;

  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0.3')};
  right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 1rem 7vw;
  font-size: 20px;

  :active {
    transform: scale(0.9);
  }
`
const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const MenuItem = styled(Link)`
  display: block;
  cursor: pointer;
  font-size: 1.6187em;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`

const CopyRight = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);

  a {
    text-decoration: none;
  }
`

export const Sidebar = ({toggle, isOpen}) => (
  <>
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon onClick={toggle}>
        <FiX />
      </CloseIcon>

      <Menu>
        <MenuItem onClick={toggle} to="top" smooth={true} offset={-80}>
          What We Do
        </MenuItem>

        <MenuItem onClick={toggle} to="pedagogy" smooth={true} offset={-80}>
          Pedagogy
        </MenuItem>
        <MenuItem onClick={toggle} to="microcampus" smooth={true} offset={-80}>
          Micro Campus
        </MenuItem>
        <MenuItem onClick={toggle} to="fireside" smooth={true} offset={-80}>
          Fireside Dialogues
        </MenuItem>
        <MenuItem onClick={toggle} to="events" smooth={true} offset={-80}>
          Upcoming Events
        </MenuItem>
        <MenuItem onClick={toggle} to="resources" smooth={true} offset={-80}>
          Additional Resources
        </MenuItem>
      </Menu>
      <CopyRight>
        <a href="https://m12studio.org" target="_blank" rel="noreferrer">
          © 2021 M12 STUDIO
        </a>
      </CopyRight>
    </SidebarContainer>
  </>
)

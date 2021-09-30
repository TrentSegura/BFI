import React, {useState, useEffect, useRef} from 'react'
import {debounce} from 'lodash-es'
import styled from 'styled-components'

import WhatWeDo from './components/WhatWeDo'
import Hero from './components/Hero'
import Pedagogy from './components/Pedagogy'
import FireSideChats from './components/FireSideChats'
import Footer from './components/Footer'
import {GlobalStyle} from './style'
import ImageComponent from './components/ImageComponent'

// import img01 from './assets/m12_BFI_003.jpg'
import img02 from './assets/m12_BFI_006.jpg'
import UpComingEvents from './components/UpComingEvents'
import ImageGallery from './components/ImageGallery'
import {Sidebar} from './components/Sidebar'
import Header from './components/Header'

const Container = styled.div`
  transition: 0.3s ease-in-out;
  transform: ${({$isOpen}) => ($isOpen ? 'translateX(-100%)' : 'translateX(0%)')};
  overflow: ${({$isOpen}) => ($isOpen ? 'hidden' : 'scroll')};
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  useEffect(() => {
    if (prevPanelState.current && !isOpen) {
      window.scroll(0, scroll)
    }
    prevPanelState.current = isOpen
  }, [isOpen, prevPanelState, scroll])

  return (
    <div>
      <GlobalStyle />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} />
      <Container $isOpen={isOpen}>
        <WhatWeDo />
        <Hero />
        <Pedagogy />
        <ImageComponent image={img02} />
        <FireSideChats />
        <ImageGallery />
        <UpComingEvents />
        <Footer />
      </Container>
    </div>
  )
}

export default App

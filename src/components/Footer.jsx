import React from 'react'
import {Marginals} from '../style'
import styled from 'styled-components'

const FooterWrapper = styled.div`
${Marginals}
  right: 0;
  text-align: right;
  opacity: .5;
  font-size: 10px;
  padding-bottom: 10px;

.credits a{
  color: var(--white);
  text-decoration: none;
}
`

const Footer = () => {
  return (
    <>
      <FooterWrapper>

        <div className="credits">
          &copy;&nbsp;2021 <a href="https://m12studio.org" target="_blank" rel="noreferrer">M12 STUDIO</a>
          
        </div>

      </FooterWrapper>
    </>
  )
}

export default Footer

import React from 'react'
import styled from 'styled-components'

import chroma from 'chroma-js'
const hello = require('hello-color').default

const bg = chroma.random().hex()
const color = hello(bg).color
const size = 2 * 2 * 2 * 2 * 2

const Container = styled.main`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${size}px;
  background-color: ${bg};
  font-family: 'Avenir Next', 'Segoe UI', Roboto, sans-serif;
`
const Content = styled.article`
  font-size: ${size}px;
  font-weight: 600;
  color: ${color};
`

const App = ({ greeting, ...props }) =>
  <Container {...props}>
    <Content>
      {greeting}
    </Content>
  </Container>

export default App

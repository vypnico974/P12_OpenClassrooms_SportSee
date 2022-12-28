import * as React from "react"
import { Routes, Route } from "react-router-dom"

import Header from './components/Header'
import VerticalNav from './components/VerticalNav'
import Home from "./pages/Home"
import Error from "./pages/Error"
import User from "./pages/User"
import Community from "./pages/Community"
import Setting from "./pages/Setting"
import Profil from "./pages/Profil"

import styled from 'styled-components'
import './styles/normalize.css'
import './styles/global.css'

const Container = styled.div `
  display: -webkit-box;
`

/**
 * @component App
 * @description Block structure and declaration of the differents routes .
 */
export default function App() {
  return (
  <>
  <Header />
    <Container> 
      <VerticalNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/community" element={<Community />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>  
  </>
  )
}


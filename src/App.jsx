import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Componentes/Pages/Home/Home'
import {Header} from '../src/Componentes/Layouts/Header/Header'
import {Logo} from '../src/Componentes/Logo/Logo'
import {Navbar} from '../src/Componentes/Navbar/Navbar'
import {Item} from '../src/Componentes/Item/Item'
import { Img } from '../src/Componentes/Img/Img'
import logoSena from "../src/assets/logoSena.jpg"
import {Icons} from "../src/Componentes/Icons/Icons.jsx"
import { Main } from './Componentes/Layouts/Main/Main.jsx'
import { Section1 } from './Componentes/Section1/Section1.jsx'
import { Section2 } from './Componentes/Section2/Section2.jsx'
import { Section3 } from './Componentes/Section3/Section3.jsx'
import { Section4 } from './Componentes/Section4/Section4.jsx'
import { Button } from './Componentes/ButtonFloating/Button.jsx'

function App() {
  return (
    <>
     <Header>
        <Logo/>
        <h1>Martín Eduardo Hernández Sánchez</h1>
        <hr />
        <Navbar>
           <Item content="Inicio"/>
           <Item content="Perfil"/>
           <Item content="Proyectos"/>
           <Item content="Referencias"/>
           <Item content="Experiencias"/> 
        </Navbar>
        <Img component={logoSena} className="LogoSena"/>
        <Icons/>
    </Header>
    <Main>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </Main>
    <Button/>
    </>
  )
}

export default App

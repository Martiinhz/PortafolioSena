import React from 'react'
import '../Section2/Section2.css'
import { Section1 } from '../Section1/Section1'
import { Card } from '../Card/Card'
import { myProjects } from '../../app/project'
import { Main } from '../Layouts/Main/Main'
import './Section2.css'
import Sena from '../../assets/logoSena.png'


export const Section2 = () => {
  return (
    <>
      <div className='container'>
  <div className='s1'>
    <img src={Sena} alt="" />
    <h1>PROYECTOS</h1>
  </div>
  <div className='content'>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum facere soluta debitis sapiente accusamus iure nihil odio, earum, id aliquam, dolor numquam magnam incidunt veritatis officiis quibusdam rem dignissimos!</p>
  </div>
</div>
      <div className='Container2'>
          <div className='container-cards'>
          {
            myProjects.map((card, idx) => <Card
              key={card.title + idx}
              img={card.img}
              title={card.title}
              description={card.description}
            />)
          }
          </div>

        
      </div>
    </>
  )
}

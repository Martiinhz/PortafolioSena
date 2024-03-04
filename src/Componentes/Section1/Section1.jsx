import React from 'react'
import Sena from '../../assets/logoSena.png'
import '../Section1/Section1.css'

export const Section1 = () => {
  return (
<div className='container'>
  <div className='s1'>
    <img src={Sena} alt="" />
    <h1>PERFIL</h1>
  </div>
  <div className='content'>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum facere soluta debitis sapiente accusamus iure nihil odio, earum, id aliquam, dolor numquam magnam incidunt veritatis officiis quibusdam rem dignissimos!</p>
  </div>
</div>

    
  )
}

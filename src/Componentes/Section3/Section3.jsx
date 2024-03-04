import React from 'react'
import '../Section3/Section3.css'
import Sena from '../../assets/logoSena.png'
import { cuadros} from '../../app/project2'
import { Card2 } from '../Card2/Card2'



export const Section3 = () => {
  return (
    <div className='container'>
      <div className='s1'>
        <img src={Sena} alt="" />
        <h1>REFERENCIAS</h1>
      </div>
      <div className='content'>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum facere soluta debitis sapiente accusamus iure nihil odio, earum, id aliquam, dolor numquam magnam incidunt veritatis officiis quibusdam rem dignissimos!</p>
      </div>
      <div className='info-cards'>
        {
          cuadros.map((card, idx) => <Card2
            key={card.title + idx}
            title={card.title}
            title2={card.title}
            title3={card.title}
            title4={card.title}
          />)
        }
      </div>
    </div>
  );
}

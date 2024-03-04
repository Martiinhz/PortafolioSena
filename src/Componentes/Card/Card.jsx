import React from 'react'
import '../Card/Card.css'

export const Card = ({img,title,description,route}) => {
  return (
    <div className='cards'>
        <img src={img} alt={title} />
        <div className='cont'>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={route}>Ir a proyecto</a>
        </div>
    </div>
  )
}

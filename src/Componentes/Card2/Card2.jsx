import React from 'react'
import '../Card2/Card2.css'

export const Card2 = ({name,position,phone,email}) => {
  return (
    <div className='cards2'>
        <p>{name}</p>
        <p>{position}</p>
        <p>{phone}</p>
        <p>{email}</p>
    </div>
  )
}

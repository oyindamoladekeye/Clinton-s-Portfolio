import React from 'react'

export default function Testimonal({img , text , writer, style}) {
  return (
    <div className='card-testimonal'>
        <img src={img} alt="" />
        <p className='quote'>“</p>
        <p className='testimonal-text' style={style}>{text}</p>
        <sub className='sub' style={style}>~{""} {writer}</sub>
    </div>
  )
}

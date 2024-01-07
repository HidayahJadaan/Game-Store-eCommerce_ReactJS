import React from 'react'
import './library.css'
export default function MyLibarary({ games, reference} ) {
  return (
    <section ref={reference} id='library' className='library'>
      <h1>My Library</h1>
      </section>
  )
}

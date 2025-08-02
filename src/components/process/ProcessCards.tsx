import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'

export default function ProcessCards() {
  return (
    <section className='py-20 flex flex-wrap gap-5 justify-between px-3 max-md:py-5'>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
    </section>
  )
}

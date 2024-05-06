import Image from 'next/image'
import React from 'react'
import logoINDI from '../../public/images/logoINDI.png'

const Logo = () => {
  return (
    <picture>
        <Image src={logoINDI} alt='logo Indi Ouro' />
    </picture>
  )
}

export default Logo
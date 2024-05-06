import Image from 'next/image'
import React from 'react'
import instagramIcon from '../../public/icons/instagramIcon.png'
import youtubeIcon from '../../public/icons/youtubeIcon.png'

const IconsBar = () => {
    return (
        <div>
            <Image src={instagramIcon} alt='instagram Icon' />
            <Image src={youtubeIcon} alt='youtube Icon' />
        </div>
    )
}

export default IconsBar
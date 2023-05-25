import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import React from 'react'
import HomePageText from '@/Component/HomePageText.png'
import HomePageGraphic from '@/Component/HomePageGraphic.png'
import SponsorRedBull from '@/Component/SponsorRedBull.png'
import SponsorForbes from '@/Component/SponsorForbes.png'
import SponsorFortune from '@/Component/SponsorFortune.png'

interface Props {
   setSelectedPage : (value : SelectedPage) => void 
}

const index = ({setSelectedPage}: Props) => {
    return (
        <div>
            
        </div>
    )
}

export default index

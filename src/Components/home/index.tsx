import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import React from 'react'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props {
   setSelectedPage : (value : SelectedPage) => void 
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)")
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
           {/* IMAGE AND MAIN HEADER */}
           <div>
              {/* MAIN HEADER */}
              <div>
                 {/* HEADINGS */}
                 <div>
                     <div>
                        <div>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                     </div>
                     <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. Studies to get the Body Shapes That you Dream of... Get Your Dream Body Now.
                     </p>
                 </div>
                 {/* ACTIONS */}
                 <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                       <p>Learn More</p>
                    </AnchorLink>
                 </div>
              </div>
              {/* IMAGE */}
              <div>

              </div>
           </div>
        </section>
    )
}

export default Home

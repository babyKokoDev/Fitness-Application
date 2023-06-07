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
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
   setSelectedPage : (value : SelectedPage) => void 
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)")
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
           {/* IMAGE AND MAIN HEADER */}
           <div className='md:flex md:mt-12 mx-auto w-5/6 items-center justify-items-center md:h-5/6'>
              {/* MAIN HEADER */}
              <div className='z-10 mt-32 md:basis-3/5'>
                 {/* HEADINGS */}
                 <AnimatePresence>
                 <motion.div className='md:-mt-20' initial = "hidden" whileInView="visible" viewport={{once : true, amount : 0.5}} transition={{duration : 0.5}} variants={{
                    hidden : {opacity : 0, x:-100},
                    visible : {opacity : 1, x: 0},
                 }}>
                  
                     <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                     </div>
                     <p className='mt-8 text-sm'>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. Studies to get the Body Shapes That you Dream of... Get Your Dream Body Now.
                     </p>
                 </motion.div>
                 </AnimatePresence>
                 {/* ACTIONS */}
                 <div className='mt-8 flex items-center gap-8'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                       <p>Learn More</p>
                    </AnchorLink>
                 </div>
              </div>
              {/* IMAGE */}
              <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                   <img src={HomePageGraphic} alt="home-pageGraphic" />
              </div>
           </div>
           {/* SPONSORS */}
           {isAboveMediumScreen && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
               <div className='mx-auto w-5/6'>
                  <div className='flex w-3/5 items-center justify-between gap-8'>
                     <img src={SponsorRedBull} alt="redbull-sponsor" />
                     <img src={SponsorForbes} alt="forbes-sponsor" />
                     <img src={SponsorFortune} alt="fortune-sponsor" />
                  </div>
               </div>
            </div>
           )}
        </section>
    )
}

export default Home

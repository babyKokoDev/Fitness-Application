import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'

interface Props {
    setSelectedPage : (value : SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

    const {
        register,
        trigger,
        formState : {errors}
    } = useForm()

    const handleSubmit = async (e : any) => {
           const isValid = await trigger()
           if (!isValid) {
            e.preventDefault()
           }
    }
    return (
        <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
         <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
           {/* HEADER */}
           <motion.div className='md:w-3/5' initial = "hidden" whileInView="visible" viewport={{once : true, amount : 0.5}} transition={{duration : 0.5}} variants={{
                    hidden : {opacity : 0, x:-100},
                    visible : {opacity : 1, x: 0},
                 }}>
                 <HText>
                    <span className='text-primary-500'>JOIN NOW </span>
                    TO GET IN SHAPE
                 </HText>
                 <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, aut odio saepe quod iusto officia exercitationem eveniet iste temporibus sunt voluptate, cupiditate vero fugit tempore? Voluptate facilis veniam, aspernatur molestiae dolor eius dolorem illo? 
                 </p>
           </motion.div>
           {/* FORM AND IMAGE */}
           <div className='mt-10 justify-between gap-8 md:flex'>
               <motion.div className='mt-10 basis-3/5 md:mt-0' initial = "hidden" whileInView="visible" viewport={{once : true, amount : 0.5}} transition={{duration : 0.5}} variants={{
                    hidden : {opacity : 0, x: 100},
                    visible : {opacity : 1, x: 0},
                 }}>
                 <form 
                 target='_blank' 
                 onSubmit={handleSubmit} 
                 method='POST'
                 >

                 </form>
               </motion.div>
           </div>
         </motion.div>
        </section>
    )
}

export default ContactUs

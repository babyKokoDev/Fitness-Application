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
        formState : {errors},
        reset
    } = useForm()

    const handleSubmit = async (e : any) => {
           const isValid = await trigger()
           if (!isValid) {
            e.preventDefault()
           }
          reset()
    }

    const inputStyles = ` mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
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
                 action='https://formsubmit.co/94298ce59106b6b701d228ce4ae9a756'
                 >
                   <input 
                   type="text" 
                   className={inputStyles}
                   placeholder='NAME'
                   {...register("name", {
                    required : true,
                    maxLength : 100
                   })}
                   />
                   {errors.name && (
                      <p className='mt-1 text-primary-500'>
                         {errors.name.type === 'required' && 'This field is required'}
                         {errors.name.type === 'maxLength' && 'Max Length is 100 character'}
                      </p>
                    )}

                   <input 
                   type="email" 
                   className={inputStyles}
                   placeholder='EMAIL'
                   {...register("email", {
                    required : true,
                    pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   })}
                   />
                   {errors.name && (
                      <p className='mt-1 text-primary-500'>
                         {errors.name.type === 'required' && 'This field is required'}
                         {errors.name.type === 'pattern' && 'Invalid email address'}
                      </p>
                    )}

                   <textarea 
                   rows={4}
                   cols={50} 
                   className={inputStyles}
                   placeholder='MESSAGE'
                   {...register("message", {
                    required : true,
                    maxLength : 2000
                   })}
                   />
                   {errors.name && (
                      <p className='mt-1 text-primary-500'>
                         {errors.name.type === 'required' && 'This field is required'}
                         {errors.name.type === 'maxLength' && 'Max Length is 2000 characters'}
                      </p>
                    )}
                    <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>SUBMIT</button>
                 </form>
               </motion.div>
               <motion.div className='relative mt-16 basis-2/5 md:mt-0' initial = "hidden" whileInView="visible" viewport={{once : true, amount : 0.5}} transition={{duration : 0.5}} variants={{
                    hidden : {opacity : 0, x:-100},
                    visible : {opacity : 1, x: 0},
                 }}>
                 <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                    <img src={ContactUsPageGraphic} alt='contact-us-page-graphics' className='w-full'/>
                 </div>
               </motion.div>
           </div>
         </motion.div>
        </section>
    )
}

export default ContactUs

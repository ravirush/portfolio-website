'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import React from 'react'
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


export default function Contact() {
  const {ref} = useSectionInView('Contact', 0.9);

  

  return (
    <motion.section ref = {ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' 
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>
      <h2 className='text-3xl font-medium mb-8'>Contact me</h2>

      <p className='text-gray-700 -mt-5 dark:text-white/80'>Feel free to contact me at {" "}
        <a className='underline' href='mailto:ravindurashmika2k@gmail.com'>ravindurashmika2k@gmail.com</a> {" "}
        or through this form.
      </p>

      <form className='mt-10 flex flex-col dark:text-black' 
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input 
          type="email" 
          name='senderEmail'
          required maxLength={500} 
          placeholder='Your email' 
          className='px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
        />

        <textarea 
          required 
          name='message' 
          maxLength={5000} 
          placeholder='Your message' 
          className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
        />

        <SubmitBtn />
      </form>
    </motion.section>
  )
}
<<<<<<< HEAD
import CV from '../../assets/Rexhino_Thartori_Front_End_Developer_CV.pdf'
=======
import React from 'react'
import CV from '../../assets/Rexhino Thartori.pdf'
>>>>>>> fb6fb92f23cada87d08180ef1c5e7babdf7b01e7

const CTA = () => {
  return (
    <div className='cta'>
       <a href={CV} download className='btn'>Download CV</a>
       <a href="#contact" className='btn btn-primary'>Contact Me</a> 
    </div>
  )
}

export default CTA
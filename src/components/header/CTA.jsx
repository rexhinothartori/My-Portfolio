import CV from '../../assets/Rexhino_Thartori_Front_End_Developer_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
       <a href={CV} download className='btn'>Download CV</a>
       <a href="#contact" className='btn btn-primary'>Contact Me</a> 
    </div>
  )
}

export default CTA
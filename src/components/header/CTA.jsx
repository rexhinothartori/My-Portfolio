import CV from '../../assets/Rexhino_Thartori_Front_End_Developer_CV.pdf';
import ScrollLink from '../ScrollLink';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <ScrollLink to="contact" as="button" className="btn btn-primary">Contact Me</ScrollLink>
    </div>
  )
}

export default CTA
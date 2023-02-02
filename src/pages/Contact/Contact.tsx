import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './Contact.css';

const Contact = () => {
  return (
    <main className="main">
      <h2>Contact</h2>
      <p>pawel.obrzut@appliedtechnology.se</p>
      <a target="blank" className="main--contact__media linkedin" href="https://www.linkedin.com/in/pawel-obrzut-023762110/"><BsLinkedin /></a>
      <a target="blank" className="main--contact__media github" href="https://github.com/PawelObrzut"><BsGithub /></a>
    </main>
  )
}

export default Contact
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Socials = () => {
    return ( <div className="flex gap-4 py-4">
        <a href="https://github.com/eliasDounas" target="_blank" 
  rel="noopener noreferrer" className="inline-block opacity-65 hover:opacity-100">
            <FaGithub color="white" size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/elias-dounas/" target="_blank" 
  rel="noopener noreferrer" className="inline-block opacity-65 hover:opacity-100">
            <FaLinkedin color="white" size={25}/>
        </a>
        
    </div> );
}
 
export default Socials;
import { linkedin, twitter, github } from '../assets';

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-7 z-10">
        <a 
            href="https://www.linkedin.com/in/timmortal/" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img src={linkedin} alt="linkedin-link" className='w-[34px]'git  />
        </a>
        <a 
            href="https://twitter.com/TimmortalOla" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img src={twitter} alt="twitter-link" className='w-[34px]' />
        </a>
        <a 
            href="https://github.com/Timmotal" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel="noreferrer"
        >
            <img className='w-[34px]' src={github} alt="github-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons
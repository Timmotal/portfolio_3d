import { motion } from "framer-motion"
import { useAtom } from "jotai";
import { projects, currentProjectAtom } from "./Projects";
import { useForm, ValidationError } from '@formspree/react';
import { linkedin, twitter, github, TimLight } from '../assets';

const Section = (props) => { 
    const { children, mobileTop } = props; // will take the children as a

    return <motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
    `}
    initial={{ // will say initial to say it is coming from these values
        opacity: 0,
        y: 50,
    }}
    whileInView={{
        opacity: 1 ,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.6,
        },
    }}
    >
        {children}
    </motion.section>
}


// is props like a inbuilt property name?
export const Interface = (props) => {
    const { setSection } = props;
  return (
    <>
    <div className="flex flex-col items-center w-screen ">
    
    <AboutSection setSection={setSection} />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    {/* <ProjectSection /> */}
    </div>
    </>
    );
};

const AboutSection = (props) => {

    const { setSection } = props;

    return (
        <Section mobileTop>
            
        <h1 className="text-4xl text-darkAccent md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
            Holla'
            <br/>
            <span className="px-1 italic "> says Timmortal</span>
        </h1>
        <motion.p className="text-lg text-lightAccent mt-4 "
        initial={{
            opacity: 0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}
        >
            A curiosity-driven Dev, excited to delve into the unknown.
            <br/>
            I think Software Development can be functional and charming
            
        </motion.p>
        <motion.button
        onClick={() => setSection(3)}
        className={`bg-darkAccent text-lightShade py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
            opacity: 0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 2.5,
        }}
        >
            Contact Me
        </motion.button>
    </Section>
    );
};

const skills = [
    {
        title: "Javascript",
        level: 100,
    },
    {
        title: "Node JS",
        level: 100
    },
    {
        title: "React",
        level: 100
    },
    {
        title: "Next JS",
        level: 100
    },
    {
        title: "Typescript",
        level: 100
    },
    {
        title: "CSS3",
        level: 100
    },
    {
        title: "HTML5",
        level: 100
    },
    {
        title: "Git & Github",
        level: 100
    },
    {
        title: "Redux",
        level: 100
    },
    
];

const languages = [
    {
        title: "French",
        level: 70,
    },
    {
        title: "Chinese",
        level: 10
    },
    {
        title: "English",
        level: 100
    },
]

const SkillsSection = () => {
    return (
        <Section>
        <motion.div whileInView={"visible"}>
          <h2 className="text-5xl font-bold text-lightShade">Skills</h2>
          <div className=" mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-lightShade"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-primary rounded-full mt-2">
                  <motion.div
                    className="h-full bg-darkShade rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
          </div>
        </motion.div>
      </Section>
    );
};


// function ContactForm() {
//   const [state, handleSubmit] = useForm("xwkdagwr");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

const ContactSection = () => {
    const [state, handleSubmit] = useForm("xwkdagwr");

    return (
        <Section>
            <>
            <h2 className="text-3xl md:text-5xl text-darkShade font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
                {state.succeeded ? (
                    <p className="text-green-500 font-bold text-center">Thanks for your message. !</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                     />
      <ValidationError 
        className="mt-1 text-red-500"
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <label
            for="email"
            className="font-medium  text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <ValidationError className="mt-1 text-red-500"  errors={state.errors} />
          <button
            disabled={state.submitting} 
            className="bg-darkShade text-lightShade py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
                </form>
                )}
                
            </div>
            <footer className="h-50 bg-red xs:pb-5 pb-50">
          <div className="w-100 mx-auto mt-5">
              <div className="md:flex md:justify-between text-center pb-2">
                  <div className="flex justify-between items-center">
                  <a href="https://timmortal.vercel.app/">
                  <img className='w-24 mr-7 ' src={TimLight} alt='logo'/>
                  </a>
                  <SocialMediaIcons />
                  </div>
              </div>
              <p className="text-sm pb-10 mb-28 text-darkShade">
                    Copyright © {new Date().getFullYear()} Timmortal. All Rights Reserved. 
                  </p>
          </div>
      </footer>
            </>
        </Section>
    )
};

const ProjectsSection = () => {

    const [ currentProject, setCurrentProject ] = useAtom(currentProjectAtom); // here is D global state

    const nextProjects = () => {
        setCurrentProject((currentProject + 1) % projects.length)
    }

    const previousProjects = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length)
        console.log(projects.length)
    }
    
    return (
        <Section>
        <div className="flex w-full h-full gap-8 items-center mt-40 justify-center">
        <button className="hover:text-darkShade text-lightShade transition-colors"
                onClick={previousProjects}
        >
        ← Previous
        </button>
        <h2 className="text-lightShade text-3xl md:text-5xl  font-bold">Crafts</h2>
        <button className="hover:text-darkShade  text-lightShade transition-colors"
        onClick={nextProjects}
        >
            Next →
        </button>
        </div>
        </Section>
    )
};



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
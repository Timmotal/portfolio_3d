import { useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";
import { Sprite, SpriteMaterial } from "three";
import { TimDark, TimLight, web, github2, githubSocial, webpage } from "../assets";

export const projects = [
  {
    title: "Marsverse",
    url: "https://marsverse-timmortal.vercel.app/",
    image: "projects/project-4.png",
    description: "Explore Mars in VR. Concept App.",
    githubRepo: "https://github.com/Timmotal/Marsverse",
      
  },
  
    {
      title: "Expelimus",
      url: "https://expelimus.vercel.app/",
      image: "projects/project-1.png",
      description: "MERN App: AI Image Generation.",
      githubRepo: "https://github.com/Timmotal/Expelimus",
      

    },
    {
      title: "Graphêvilla",
      url: "https://graphevilla.netlify.app/",
      image: "projects/project-2.png",
      description: "Image Sharing Social Media App.",
      githubRepo: "https://github.com/Timmotal/GrapheVIlla",
        
    },
    {
      title: "Ridym",
      url: "https://ridym.vercel.app",
      image: "projects/project-6.png",
      description: "Music App.",
      githubRepo: "https://github.com/Timmotal/ridym",
        
    },
    
    {
      title: "Petsu",
      url: "https://petsu.netlify.app/",
      image: "projects/project-3.png",
      description: "E-Commerce Store.",
      githubRepo: "https://github.com/Timmotal/Petsu",
        
    },
    {
        title: "Evogym",
        url: "https://mogymn.vercel.app/",
        image: "projects/project-5.png",
        description: "Gymnasium App.",
        githubRepo: "https://github.com/Timmotal/mogymn",
        
      },
  ];

const Project = (props) => {
    const { project, highlighted } = props;
    const background = useRef();
    const bgOpacity = useMotionValue(0.4)

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
      }, [highlighted]);
    
      useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
      });

    

    return (
      <group {...props}>
        <mesh
          position-z={-0.001}
          onClick={() => window.open(project.url, "_blank")}
          ref={background}
        >
          {/* <planeGeometry args={[2.2, 2]} /> */}
          <planeGeometry args={[4, 4.5]} />
          <meshBasicMaterial color="black" transparent opacity={0.4} />
        </mesh>
        <Image
          // scale={[2, 1.2, 1]}
          scale={[3.8, 3.2, 1]}
          url={project.image}
          toneMapped={true}
          toneMappingExposure={145}
          position-y={0.3}
        />
        <Text
          maxWidth={2}
          anchorX={"left"}
          anchorY={"top"}
          fontSize={0.3}
          // color={"#F3435E"}
          // fontSize={0.2}
          position={[-1.65, -1.35, 0]}
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          maxWidth={3.1}
          anchorX={"left"}
          anchorY="top"
          fontSize={0.2}
          color={"white"}
          position={[-1.5, -1.4, 1]}
        >
          {project.description}
        </Text>

        <Text
          maxWidth={2.1}
          anchorX={"left"}
          anchorY={"top"}
          fontSize={0.19}
          color={"#E62E2D"}
          className="hoverElements"
          // position={[-1.3, 1.5, 2.9]}
          position={[-1.42, 2.15, 2.9]}
          onClick={() => window.open(project.githubRepo, "_blank")}
        >
          {highlighted ? "Github" : ""}
      </Text>

        {/* <Text
          maxWidth={2.1}
          anchorX="right"
          anchorY="top"
          fontSize={0.2}
          color={"#BD38B2"}
          decoration={"underline"}
          shadow={{
            color: "black",
            offset: [0, 0.1],
            blurRadius: 0.01,
          }}
          // #D03B29
          // #BD38B2
        //   bgOpacity={highlighted ? 0 :}
          position={[-0.9, 1.9, 2.9]}
        >
          {highlighted ? project.webUrl : ""}
        </Text> */}

        {/* <Image
          scale={[1, 1, 2]}
          url={githubSocial}
          toneMapped={false}
          position={[1.5, 1.5, 0]}
          borderRadius={5}
        />
        <Image
          scale={[1, 1, 2]}
          url={webpage}
          toneMapped={false}
          position={[-1.5, 1.5, 0]}
        /> */}
      </group>
    );
}  

// it is divided by 2 to make sure the current project is the one at the middle
// export const currentProjectAtom = atom(Math.floor(projects.length / 2));
export const currentProjectAtom = atom(2);


export const Projects = () => {

    const [ currentProject ] = useAtom(currentProjectAtom);
    const { viewport } = useThree(); // we need this (viewport) to position the group
    

    // "* 2" because it is the third section, " + 1" to make it a bit ontop of the section
    return <group position-y={-viewport.height * 2 + 1}
    >
        
        {projects.map((project, index) => (
                <motion.group key={"project_" + index}
                position={[ // setting up the projects based on the index
                    index * 2.5, 0, -3
                ]}
                animate={{
                    x: 0 + (index - currentProject) * 5,
                    y: currentProject === index ? 0 : -0.1,
                    z: currentProject === index ? -2 : -3,
                    rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    // of course play with the variables and see if you have a better result
                }}
                >
                    <Project
                        project={project}
                        highlighted={index === currentProject} 
                    />
                </motion.group>
            ))
        }
    </group>
} 

// MAKING A CARD FROM SAN_JS

const ProjectCard = ({ 
    index, 
    name, 
    description, 
    tags, 
    image, 
    source_code_link, 
    github_repo 
  }) => {
    return (
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-2xl" 
            />
  
            <div className="m-3 card-img_hover">
              {/* <div className="flex justify-between"> */}
              <div
                onClick={() => window.open(source_code_link, "_blank")} 
                className="absolute top-2 right-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img 
                  src={webpage} 
                  alt="webpage" 
                  className="w-1/2 h-1/2" 
                />
                </div>
                <div
                onClick={() => window.open(github_repo, "_blank")} 
                className="absolute bottom-2 left-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img 
                  src={github} 
                  alt="github" 
                  className="w-1/2 h-1/2" 
                />
                </div>
              {/* </div> */}
            </div>
          </div>
  
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-white text-[14px]">{description}</p>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2 uppercase">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    )
  }


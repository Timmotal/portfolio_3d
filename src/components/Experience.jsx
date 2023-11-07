import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, useScroll } from "@react-three/drei";
import { Projects } from "../components/Projects";
import { Majake } from "../components/Majake"
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "./../config"
import * as THREE from "three"
import { Background } from "./Background";

export const Experience = (props) => { // pass the section to the props
  const { 
    // section, // taken out because of a scroll issue
     menuOpened } = props; 
  const data = useScroll();
  
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12; // says he designed the layout to be divided by 12
  // if bigger than 12 it would scale up -> the ratio will be above one
  // and if less, it will diminish it
  // WE WANT THE OFFICE TO BE SMALL & BIG ONLY TO CERTAIN LIMITS
  const officeScaleRatio = Math.max(0.59, Math.min(0.9 * responsiveRatio, 0.9));

  const [ section, setSection ] = useState(0);

  // console.log(viewport.width, viewport.height);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0,{
      ...framerMotionConfig
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      framerMotionConfig
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [ characterAnimation, setCharacterAnimation ] = useState("MajakeTyping")
  // trigger this useEffect, everytime the section changes
  useEffect(() => {
    setCharacterAnimation("MajakeFalling");
    setTimeout(() => {
      // says one can be more creative with this (the animations depeding on the section active)
      setCharacterAnimation(section === 0 ? "MajakeTyping" : "MajakeStanding")
    }, 600)
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages); // we changed from const to let

    if ( curSection > 3 ) {
      curSection = 3
    }

    if ( curSection !== section ) {
      setSection(curSection);
    }


    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    const position = new THREE.Vector3();
    //so we have the global position in the world -> this method takes a vector to copy the values into, so it is the temporary position
    // characterContainerAboutRef.current.getWorldPosition(position);
    // copy the current world positon of the real spot to our characterGroup
    if ( section === 0) {
    characterContainerAboutRef.current.getWorldPosition(
      characterGroup.current.position
      );
  }
    // console.log([position.x, position.y, position.z]) // log the position of that group

    // const quaternion = new THREE.Quaternion(); // here it is a quaternion because it is a rotation
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion); // we use (getWorldQuaternion) to store it in quaternion reference
    // const euler = new THREE.Euler(); // we would need vector 3 to set the location
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });
   
  return (
    // to make the avatar jump into the next section -> currently it is in a group containing a office that is already rotated 
    // but what we want is to have it more accessible globally -> we want to put the avatar in a new group
    <>
    <Background />
    <motion.group
     ref={characterGroup}
    // took POSITION out, it was hardcoded because the character never moved
      // position={ [1.9855702266408022, 0, 2.4915195136487536]} // old values -> when on hero section
      // position={[1.9855702266408022, 7.0153163670338365, 2.4915195136487536]} // new values -> when on skills section
      rotation={[-3.141592653589793, 1.2353981633974485, 3.141592653589793]} // old rotation
      // rotation={[-3.141592653589793, 1.2353981633974485, 3.141592653589793]} // new rotation
      scale={[ officeScaleRatio, officeScaleRatio, officeScaleRatio, ]}
      animate={"" + section}
      transition={{
        duration: 0.6,
      }}
      
      variants={{
        0: { // so it gets back to the original state
          scaleX: officeScaleRatio, // 0.9, // this is why we have this issues
          scaleY:  officeScaleRatio, // 0.9  //the office container is scaled down but not the character
          scaleZ:  officeScaleRatio, // 0.9
        },
        1: {
          y: -viewport.height + 0.5,
          x: isMobile ? 0.3 : 0,
          z: 7,
          rotateX: 0, // and then we need to set the roation back
          rotateY: isMobile ? -Math.PI / 2 : 0,
          rotateZ: 0,
          scaleX: isMobile ? 1.5 : 1,
          scaleY: isMobile ? 1.5 : 1,
          scaleZ: isMobile ? 1.5 : 1,
        },
        //  before pasting (the below) he says for the other sections -> play with it and fine tune it
        2: {
          x: isMobile ? -1.4 : -2,
          y: -viewport.height * 2 + 0.5,
          z: 0,
          rotateX: 0,
          rotateY: Math.PI / 2,
          rotateZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        },
        3: {
          y: -viewport.height * 3 + 1,
          x: 0.24,
          z: 8.5,
          rotateX: 0, 
          rotateY: -Math.PI / 4,
          rotateZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }
      }}
      //  the avatar does not show up on scroll because in the ScrollManager
      // when the section changes, it animates,
      // so we didn't call on sectionChange when we detected a scroll event
      // LISTEN & WATCH, IF BOTH CANNOT BE DONE SIMULTANEOUSLY DO ONE BY ONE
      // what we can do is not to use the global scroll we have 
      // but to dynamically calculate it in the experience component
      // so it is not related to what happens outside of it
    >
      <Majake animation={characterAnimation} wireframe={section === 1} />
      {/* below is what we first did */}
    {/* <Majake animation={section === 0 ? "MajakeTyping" : "MajakeStanding"} /> */}
    </motion.group>
    <ambientLight intensity={1} />
    <motion.group
      position={[ 
              isMobile ? 0 : 1.5 * officeScaleRatio, 
              isMobile ? -viewport.height / 6 : 2,
               3
                ]}
      scale={[ 
               officeScaleRatio, 
               officeScaleRatio, 
               officeScaleRatio,
            ]}
      rotation-y={ -Math.PI / 4 }
      animate={{
        y: isMobile ? -viewport.height / 6 : 0,
        // y: section === 0 ? 0 : -1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
    <Office section={section} />
    {/* CHARACTER POSITION IN HERO SECTION -> LANDING SECTION */}
    <group
      ref={characterContainerAboutRef} 
      name="character" 
      position={[0.650, 0.100, -0.181]} 
      rotation={[-Math.PI, 0.45, -Math.PI]} 
      // below is the positons and rotations from the model directly
      // position={[0.013, -0.589, -0.967]} 
      // rotation={[-Math.PI, 1.325, -Math.PI]}
      >
        {/* this was taken out and i didn't pay enough attention to know that it was */}
    {/* <Majake animation={section === 0 ? "MajakeTyping" : "MajakeStanding"} /> */}
    </group>
    </motion.group>

    
    {/* SKILLS */}
    <motion.group position={[0, isMobile ? -viewport.height : -1.5 * officeScaleRatio, -10]}
      animate={{
        z: section === 1 ? 0 : -10,
        y: section === 1 ? -viewport.height : (isMobile ? -viewport.height : -1.5 * officeScaleRatio)
      }}
    >
    <directionalLight position={[-5, 3, 5]} intensity={0.4} />
    <Float>
      <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
        <sphereGeometry
          opacity={0.8}
          transparent
          distort={0.4}
          speed={4}
          color="#DEE3DF"
        />
      </mesh>
    </Float>
    <Float>
      <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
        <sphereGeometry />
        <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={1}
          speed={5}
          color="#E96E54" 
        />
      </mesh>
    </Float>
    <Float>
      <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
        <boxGeometry />
        <MeshWobbleMaterial
          opacity={0.8}
          transparent
          factor={1}
          speed={5}
          color="#819d3d" 
        />
      </mesh>
    </Float>
    {/* <group scale={[2, 2, 2]} position-y={-1.5}>
      <Majake animation={section === 0 ? "MajakeFalling" : "MajakeStanding"} />
    </group> */}
    </motion.group>
    <Projects />
    </>
  );
};

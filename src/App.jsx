import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/interface";
import { useState, useEffect, Suspense } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { motion } from "framer-motion-3d"
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config"
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./LoadingScreen";

function App() {
  const [ section, setSection ] = useState(0)
  const [ menuOpened, setMenuOpened ] = useState(false)
  const [ started, setStarted ] = useState(false)

    useEffect(() => {//if section changes setMenuOpen to false
        setMenuOpened(false);
    }, [section])
  
  return (
    <>
    <LoadingScreen started={started} setStarted={setStarted} />
    <MotionConfig
    transition={{
      ...framerMotionConfig,
    }}
    >
      {/* MotionConfig is default animation applied to all components unless specified otherwise */}
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
      {/* THIS IS THE BACKGROUND COLOR */}
      <color attach="background" args={["#E6E7FF"]} />
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} // call the setSection to update Section
        />
        <Scroll>
          <Suspense>
            {started && (
              // so if it takes a long time to load, it wont display the experience 
              // and it wont start before you are ready to
              <Experience section={section} menuOpened={menuOpened}/>
            )}          
          </Suspense>
        </Scroll>
          <Scroll html>
            {started && 
            //  we could also use jotai to do it -> the state setup ( I mean)
            <Interface  setSection={setSection} />
            }
            
          </Scroll>
      </ScrollControls> 
    </Canvas>
    <Menu 
      onSectionChange={setSection}
      menuOpened={menuOpened}
      setMenuOpened={setMenuOpened} 
    />
    <Cursor />
    </MotionConfig>
    <Leva hidden />
    </>
    
  );
}

export default App;

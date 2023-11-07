import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";


export const Background = () => {

    const material = useRef();

    const color = useRef({
        color: "#1C222C", // GSAP use objects
    })
    const data = useScroll();

    const tl = useRef();

    // in each frame we would goto the current scroll position in the timeline
    useFrame(() => {
        tl.current.progress(data.scroll.current);
        material.current.color = new THREE.Color(color.current.color);
    })

    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "#8AA09E",
            });
            // and if between those two -> it would do this one (part 4 - 00:30:32)
            tl.current.to(color.current, {
                color: "#5D767C",
            });
            // if at the end of scroll -> would go through the deepest animations (color below)
            tl.current.to(color.current, {
                color: "#718797",
            });
    }, []);
    
  return (
    <group>
        <Sphere scale={[30, 30, 30]}>
            <meshBasicMaterial
                ref={material}
                side={THREE.BackSide}
                toneMapped={false} // to really have the color we would decide in the HTML
            />
        </Sphere>
    </group>
  )
}

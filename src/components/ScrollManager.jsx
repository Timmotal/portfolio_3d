import { useEffect, useRef } from "react";
import { gsap } from "gsap"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei";

export const ScrollManager = (props) => {
    const { section, onSectionChange } = props;

    // we need to have access to the useScroll, to know where we are currently scrolling
    // and have access to the container elements that scrolls
    const data = useScroll();
    // store last scroll position  in a reference to prevent re-renders
    const lastScroll = useRef(0);
    // check if we are animating to avoid impacting it while animating
    const isAnimating = useRef(false)

    // we added this because for some "weird" reasons it behaves as though we have 5 pages -> 4 tho
    data.fill.classList.add("top-0")
    data.fill.classList.add("absolute")
    
    // trigger animation when section changes
    useEffect(() => {
        // data.el is the element returned by useScroll
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current =  true;
            },
            onComplete: () => {
                isAnimating.current = false;
            },
        });
    }, [section])

    // to check for our conditions
    useFrame(() => {
        if (isAnimating.current) { // if animating -> do nothing
            lastScroll.current = data.scroll.current; // still store last scroll position
            return;
        }

        // find section we are currently in
        const curSection = Math.floor(data.scroll.current * data.pages);
        if (data.scroll.current > lastScroll.current && curSection === 0) {
            onSectionChange(1);
        }

        if (data.scroll.current < lastScroll.current && 
            data.scroll.current < 1 / (data.pages -1)
         ) {
            onSectionChange(0);
        }
        lastScroll.current = data.scroll.current;
    })
    return null;
}
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
    const { started, setStarted } = props;
    // we can get many info about the loading progression from the useProgress hook
    const { progress, total, loaded, item } = useProgress();
  
    useEffect(() => {
      // console.log(progress, total, loaded, item);
      if (progress === 100) { // add delay to the menu to complete loading before showing the experience 
        setTimeout(() => {
          setStarted(true);
        }, 500);
      }
    }, [progress, total, loaded, item]);
  
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
    flex flex-col items-center justify-center   bg-primary 
    ${started ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-4xl md:text-9xl font-bold text-darkShade  relative">
          <div
            className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          >
            Tu Es Grata
          </div>
          <div className="opacity-40">Tu Es Grata</div>
        </div>
        <p>Short on time?</p>
        {/* <a href="https://portafoglio.vercel.app/">See None 3D Portfolio</a> */}

        <a
        href="https://portafoglio.vercel.app"
        target="_blank"
        className="cursor-pointer underline text-lightShade hover:text-darkShade pointer-events-auto"
      >
        See None 3D Portfolio
      </a>
      </div>
    );
  };
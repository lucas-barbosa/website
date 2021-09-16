import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Progress from "./Progress";


const ProgressBar: React.FC = () =>{
    const [isAnimating, setIsAnimating] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const handleStart = () => setIsAnimating(true);
      const handleStop = () => setIsAnimating(false);
  
      // setup events for listening router and animate progress bar
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
      router.events.on("routeChangeError", handleStop);
  
      return () => {
        // clear the events
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleStop);
        router.events.off("routeChangeError", handleStop);
      };
    }, [router]);

    return <Progress isAnimating={isAnimating}/>
}

export default ProgressBar;
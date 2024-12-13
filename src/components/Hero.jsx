import { useState, useRef } from "react"
import { TiLocationArrow } from "react-icons/ti";
import {Button} from "./Button";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"

export const Hero = () => {
   const [currentIndex, setCurrentIndex] = useState(1);
   const [hasClicked, setHasClicked] = useState(false);
   const [isFileLoadingAllowed, setIsLoading] = useState(true);
   const [loadedVideo, setLoadedVideos] = useState(0);

   const totalVideos = 4;
   const nextVideoRef = useRef(null);

   const handleVideoLoad = () => {
    setLoadedVideos((prev)=> prev + 1);
   }
   
   const upcomingVideoIndex = (currentIndex % totalVideos) + 1; //for keeping the number below 3


  const handleMiniVdClick = () =>{
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);

   }
   useGSAP(()=>{
   if(hasClicked) {
   gsap.set('#next-video', {visibility: 'visible'})

   gsap.to('#next-video', {
     transformOrigin: 'center center',
     scale:1,
     width:'100%',
     height:'100%',
     duration:1,
     erase:'power1.inOut',
     onStart: ()=>nextVideoRef.current.play(),
   })
   gsap.from('#current-video',{
     transformOrigin: 'center center',
     scale:0,
     duration:1.5,
     ease: 'power1.inOut',
     onStart: ()=>nextVideoRef.current.play(),
   })
  }
   },{dependencies:[currentIndex], revertOnUpdate:true});

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
    <div id="video-frame" className="relative z-10 h-dvh w=screen overflow-hidden rounded-lg bg-blue-75">
      <div>
        <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer rounded-lg">
          <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
            <video ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)} muted loop id="current-video" className="size-64 origin-center scale-150 object-cover object-center" onLoadedData={handleVideoLoad}/>
          </div>
        </div>
        <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop muted id="next-video" className="absolute-center invisible absolute z-20 size-64 object-cover object-center" onLoadedData={handleVideoLoad}/>
        <video src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)} loop muted className="absolute left-0 top-0 size-full object-cover object-center" onLoadedData={handleVideoLoad}/>
      </div>
      <h1 className="special-font absolute bottom-5 right-5 z-40 text-blue-75 uppercase font-zentry font-black text-3xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]">G<b>a</b>ming</h1>
    <div className="absolute left-0 top-0 z-40 size-full">
      <div className="mt-24 px-5 sm:px-10">
        <h1 className="special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-blue-100">redefi<b>n</b>e</h1>
        <p className="mb-5 max-w-64 font-robber-regular text-blue-100">Enter the meta game layer <br/> Unleash  They Play Economy</p>
        <Button id="watch-trailer" title="Watch-Trailer" leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex-center gap-1">Click here</Button>
      </div>
    </div>
    </div>
    <h1 className="special-font absolute bottom-5 right-5 text-black uppercase font-zentry font-black text-3xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem]">G<b>a</b>ming</h1>
    </div>
  )
}

export default Hero
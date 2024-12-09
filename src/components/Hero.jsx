import { useState } from "react"


const Hero = () => {
   useState[currentIndex, setCurrentIndex] = useState(1);
   useState[hasClicked, setHasClicked] = useState(false);
   useState[isFileLoadingAllowed, setIsLoading] = useState(true);
   useState[loadedVideo, isLoadedVideo] = useState(0);


  const handleMiniVdClick = () =>{

  }
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
    <div id="video-frame" className="relative z-10 h-dvh w=screen overflow-hidden rounded-lg bg-blue-75">
      <div>
        <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer rounded-lg">
          <div>
            MiniVideoPlayer
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
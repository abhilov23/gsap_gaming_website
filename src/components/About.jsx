import { useGSAP } from '@gsap/react'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerEase(ScrollTrigger)

const About = () => {
   
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
         scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=800 center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
         }
        })
        clipAnimation.to('.mask-clip-path',{
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })



  return (
    <div id="about" className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general lg:text-2xl first-line: uppercase md:text-[12px]'>Welcome to zentry</h2>
       
       <AnimatedTitle title="Disc<b>o</b>ver the <br/> world's <br/> l<b>a</b>rgest shared adventure" containerClass="mt-5 !text-black text-center"/>

        <div className='absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]'>
             <p>The Game of Games begins-your life, now an epic MMORPG</p>
             <p>Zentry units every player from countless games and platform</p>
            </div>
      </div>
      <div className='h-dvh w-screen' id="clip">
        <div className='mask-clip-path about-image'>
            <img src="img/about.webp" alt='background' className='absolute left-0 top-0 size-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default About
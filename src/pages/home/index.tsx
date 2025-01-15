import { Link } from 'react-router-dom'
import './index.css'
import logo from "/images/OPLogo.png"
import videobg from "/videos/videobg.mp4"
import { useEffect, useRef, useState } from 'react'

const HomePage = () => {
    const [logoOffset, setLogoOffset] = useState(0);
    const videoRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
              const videoHeight = videoRef.current.offsetHeight;
              const scrollPosition = window.scrollY;
      
              if (scrollPosition < videoHeight) {
                const offset = Math.min(scrollPosition / 2, 150);
                setLogoOffset(offset);
              }
            }
          };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='relative  w-full'>
            

            <div 
                id="video-container" 
                ref={videoRef}
                className='bg-[black]  h-screen relative'
            >
        
                <video
                    autoPlay
                    loop
                    muted
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                >
                <source src={videobg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div   
                    className='absolute top-0 left-0 w-full h-screen flex justify-center items-center'
                    style={{
                        transform: `translateY(${logoOffset}px)`,
                        opacity: 1 - logoOffset / 150,
                      }}
                >
                    <img src={logo} alt='logo' className='max-w-[50%] mt-[20px]' />
                </div>
            </div>
            <div id='nav-bar' className='bg-[black] sticky w-[100%] h-[60px]'>
                <div className='Nav-icon'></div>
            </div>
            <div className='w-[90%] m-[auto] max-w-[1400px] pb-[500px] text-5xl'>
                <div className='flex justify-center mt-[60px] ' id="fruits">
                    
                    <Link to="/fruits">
                    <div className='nav-fruits bg-[white] bg-opacity-50 cursor-pointer  bg-cover bg-center  w-[950px] h-[200px] flex justify-center items-center'>
                    <label className='cursor-pointer'>Fruit</label>
                    </div>
                    
                    </Link>
                </div>


                <div className='flex justify-center mt-[40px]' id="character" >
                    
                    <Link to="/character">
                    <div className='nav-character bg-[white] bg-opacity-50 cursor-pointer bg-cover bg-center  w-[950px] h-[200px] flex justify-center items-center'>
                    <label className='cursor-pointer'>Character</label> 
                    
                    
                    </div>
                    </Link>
                </div>

                <div className='flex justify-center mt-[40px]' id="Ship">
                    <Link to="/boat">
                    <div className='bg-[white] bg-opacity-50 cursor-pointer bg-cover bg-center w-[950px] h-[200px] flex justify-center items-center'>
                    <label className='cursor-pointer'>Ship</label>
                    </div>
                    </Link>
                </div>

                {/* <div className='flex justify-center mt-[25px]' id="Ship">
                    <Link to="/location">
                    <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-[778.75px] h-[125px]'>
                    <label>Location</label>
                    </div>
                    </Link>
                </div> */}
                
            </div>
        </div>
    )
}

export default HomePage
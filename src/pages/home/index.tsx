import { Link } from 'react-router-dom'
import './index.css'
import logo from "/images/OPLogo.png"
import videobg from "/videos/videobg.mp4"
import icon from "/images/logoophead.png"
import { useEffect, useRef, useState } from 'react'
import bgfruit from "/images/bgfruit.png"
import bgcharacter from "/images/bgcharacter.png"
import bgship from "/images/bgshipsunny.png"

const HomePage = () => {
    const [logoOffset, setLogoOffset] = useState(0);
    const [navBarOpacity, setNavBarOpacity] = useState(0);
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
              const navOpacity = Math.min(scrollPosition / 450, 1);  
              setNavBarOpacity(navOpacity);
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
            <div 
                id='welcomebar' 
                className='bg-[black] sticky top-0 w-[100%] h-[80px] transition-all duration-500 flex items-center justify-center z-50'
                style={{
                    opacity: navBarOpacity,  
                    transition: 'opacity 0.7s ease',
                }}
            >
                <div className='flex justify-center items-center gap-4 '>
                    <div className='Nav-icon flex items-center justify-center w-[50px] h-[50px]'>
                        <img src={icon} alt="icon-navbar" className='max-w-full max-h-full object-contain' />
                    </div>
                    <label className='text-2xl font-serif'>Welcome to One Piece Wiki</label>
                    <div className='Nav-icon flex items-center justify-center w-[50px] h-[50px]'>
                        <img src={icon} alt="icon-navbar" className='max-w-full max-h-full object-contain' />
                    </div>
                </div>
                
            </div>
            <div className='w-[90%] m-[auto] max-w-[1400px] pb-[150px] text-5xl '>
                <div className='flex justify-center mt-[60px] ' id="fruits">
                    
                    <Link to="/fruits">
                    <div className="nav-fruits bg-[white] bg-opacity-50 relative w-[900px] h-[300px] group overflow-hidden flex justify-center items-center">
                    <div
                        className="background-overlay absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center"
                        style={{
                        backgroundImage: `url(${bgfruit})`,
                        }}
                    >
                    </div>
                    <label className="label-text relative z-20 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        FRUIT DEVIL
                    </label>
                    </div>
                    
                    </Link>
                </div>


                <div className='flex justify-center mt-[40px]' id="character" >
                    
                    <Link to="/character">
                    <div className="nav-fruits bg-[white] bg-opacity-50 relative w-[900px] h-[300px] group overflow-hidden flex justify-center items-center">
                    <div
                        className="background-overlay absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center"
                        style={{
                        backgroundImage: `url(${bgcharacter})`,
                        }}
                    >
                    </div>
                    <label className="label-text relative z-20 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        CHARACTER
                    </label>
                    </div>
                    </Link>
                </div>

                <div className='flex justify-center mt-[40px]' id="Ship">
                    <Link to="/boat">
                    <div className="nav-fruits bg-[white] bg-opacity-50 relative w-[900px] h-[300px] group overflow-hidden flex justify-center items-center">
                    <div
                        className="background-overlay absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center"
                        style={{
                        backgroundImage: `url(${bgship})`,
                        }}
                    >
                    </div>
                    <label className="label-text relative z-20 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        SHIP
                    </label>
                    </div>
                    </Link>
                </div>

                
                
            </div>
        </div>
    )
}

export default HomePage
import { Link } from 'react-router-dom'
import './index.css'
import logo from "/images/OPLogo.png"

const HomePage = () => {

    return (
        <div>
        <div className='bg-[black] w-[100%]'>
                <div className='Nav-home'></div>

        </div>
        <div className='w-[90%] m-[auto] max-w-[1400px] pb-[500px] text-5xl'>
            

            <div className='flex flex-col justify-center items-center'>
                <img src={logo} alt='logo' className='max-w-[50%] mt-[20px]'/>
                <div className='mt-[60px]'>
                    <iframe 
                    width="560" height="315" 
                    src="https://www.youtube.com/embed/5UNBl3Bmsuk?si=AK97nYUjq3dvrAQS" 
                    title="YouTube video player" 
                    className="autoplay" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; mute"  > 
                    </iframe>
                    {/* <div>Watch on 
                        <button className='w-50 h-50'>Netflix</button> </div> */}
                </div>
            </div>


            
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
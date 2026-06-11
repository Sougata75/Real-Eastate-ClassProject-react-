import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { myNav } from '../services/json/navbarOpt';

const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <nav className='w-full flex flex-wrap md:p-2'>
        <div className='w-[100%] h-[60px] bg-black rounded-full mb-2 px-20 hidden md:flex justify-between items-center '>
            <div className='flex justify-between w-[25%]'>
                <div className='text-white flex'><p className='mr-2 text-yellow-500'><i className="fa-solid fa-phone-volume"></i></p>+91 9182736456</div>
                <div className='text-white flex'><p className='mr-2 text-yellow-500'><i className="fa-regular fa-envelope"></i></p> realstatedummy26@gmail.com</div>
            </div>
            <div className='w-[10%] flex justify-between'>
                <NavLink to="#">
                    <span className='text-white flex'>English <p className='text-yellow-500'><i className="fa-solid fa-angle-down"></i></p></span>
                </NavLink>
                <NavLink to="/login">
                    <span className='text-white flex'>Log In <p className='text-yellow-500'><i className="fa-solid fa-angle-down"></i></p></span>
                </NavLink>
            </div>
        </div>

        <div className='w-full flex justify-between'>
            <div className='w-full md:w-[88%] h-[60px] bg-black flex flex-wrap md:items-center justify-between md:rounded-full px-3 md:px-20'>
            <div className='h-[100%] flex items-center'>
                <img className='w-[90px]' src={Logo} alt="Logo-Img" />
            </div>
            <div className='w-full hidden md:w-[80%] md:flex justify-between '>

               {myNav?.map((navItems,index) => (
                <NavLink key={index} to={navItems.path}>
            {({isActive}) => (
                <span className={`${isActive? "bg-white/10  backdrop-blur-md border-y-[1px] border-yellow-500":""} text-white text-[18px] px-6 py-2 rounded-full`}>{navItems.label}</span>
            )}
            </NavLink>
               ))} 
            </div>

            <div className={`${isActive?"block":"hidden"} right-2 top-[70px] absolute h-[88vh] text-center gap-5 pt-5 w-[150px] flex flex-col bg-black/30 backdrop-blur-sm rounded-3xl`}>

               {myNav?.map((navItems,index) => (
                <NavLink key={index} to={navItems.path}>
            {({isActive}) => (
                <span onClick={()=>setIsActive(false)} className={`${isActive? "bg-white/10  backdrop-blur-md border-y-[1px] border-yellow-500":""} text-white text-[18px] px-6 py-2 rounded-full`}>{navItems.label}</span>
            )}
            </NavLink>
               ))} 

                <div className='flex flex-wrap  gap-5 justify-center'>
                <NavLink to="#">
                    <span className='text-white flex'>English <p className='text-yellow-500'><i className="fa-solid fa-angle-down"></i></p></span>
                </NavLink>
                <NavLink to="/login">
                    <span className='text-white flex'>Log In <p className='text-yellow-500'><i className="fa-solid fa-angle-down"></i></p></span>
                </NavLink>
            </div>
               
            </div>
            <button onClick={() => setIsActive((prev) => !prev)} className='md:hidden text-white text-xl'><i className="fa-solid fa-bars"></i></button>
            </div>

            <div className='px-1 h-[60px] bg-black rounded-full hidden md:flex justify-center items-center '>
                <NavLink to='/contactUs'>
                <span className='text-yellow-400 w-[200px] flex justify-between items-center pl-9 text-lg'>Contact US <p className='ml-3 bg-white px-5 pt-3 pb-3 rounded-full'>➚</p></span>
                </NavLink>
            </div>

            
        </div>
    </nav>
  )
}

export default Header
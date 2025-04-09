import { assets } from '../assets/assets 2'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => 
{
    /* This function useNavigate() ™hook™ provides a way for your application to transition between screens and manage navigation history  */
    const navigate = useNavigate();                    

  return (
    <div className='flex items-center justify-between text-sm mb-2 border-b border-b gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1 gray-400'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/booking'>
                <li className='py-1 gray-400'>BOOKING</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1 gray-400'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1 gray-400'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {   
                <button onClick={()=>navigate('/myappointments')} className='bg-secondary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-primary'>My Appointments</button>
            }
        </div>
    </div>
  )
}

export default NavBar
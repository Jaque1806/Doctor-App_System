import React from 'react'
import { specialityData } from '../assets/assets 2'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>

        <h1 className='text-3x1 font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Find top doctors and book your appointment in just a few clicks.</p>
        
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item)=>(
              /* Whenever the user clicks on this menu 'Find by Speciality' then it will redirect to 'All doctors' page and scroll to the top of the page  */
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Speciality
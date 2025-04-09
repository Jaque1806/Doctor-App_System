import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContextProvider from '../context/AppContextProvider'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4  text-gray-900 md:mx-10'>
        {/* Create the UI */}
        <h1 className='text-3x1 font-medium'>Top Doctors</h1>
        
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate('/booking')} className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    {/* Display the doctors profile */}
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg ont-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopDoctors
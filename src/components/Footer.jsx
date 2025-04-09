import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[2fr_2fr_2fr] gap-10 my-100 mt-20 text-sm mb-5'>
            {/* LEFT SECTION */}
            <div className=''>
            <p className='text-md font-medium mb-2'>Opening Hours</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>
                        <span>Mon - Fri: </span>
                        <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li>
                        <span>Saturday - Sunday: </span>
                        <span>Closed</span>
                    </li>
                </ul>
            </div>

            {/* CENTER SECTION */}
            <div>
                <p className='text-md font-medium mb-2'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <NavLink to={'/'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <li>About Us</li>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
            </div>

            {/* RIGHT SECTION */}
            <div>
                <p className='text-md font-medium mb-2'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+353 (01) 239-7890</li>
                    <li>info@vitacare.ie</li>
                </ul>
            </div>
        </div>
        {/* COPYRIGHT TEXT */}
        <div>
            <hr />
            <p className='py-5 text-xs text-center'>Copyright 2024@ VitaCare - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const GithubLogin = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className='sm:w-full justify-start items-start'>
            
            {user
                ? 
                // <div className='flex flex-end justify-end gap-4 items-center sm:items-start'>
                //     <Link href="/user/dashboard" className='items-center sm:items-start'>
                //         <div className='flex flex-end items-center sm:items-start gap-2'>
                //             <Image className='w-[50px] h-[50px] rounded-full' src={user.image} alt="..." width={25} height={25} />
                //             {user.name}
                //         </div>
                //     </Link>
                //     <Link href="/api/auth/signout" className='items-center sm:items-start'>
                //         Sign Out
                //     </Link>
                // </div>
                <div>
                    <button id="dropdownDefaultButton" 
                        data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleDropdown}
                    >
                        <Image className='w-[50px] h-[50px] rounded-full' src={user.image} alt="..." width={25} height={25} />
                        {user.name}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                
                    <div id="dropdown" className={`z-10 absolute bg-color-dark text-color-accent divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isOpen ? '' : 'hidden'}`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> */}
                            <Link href="/user/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> */}
                            <Link href="/api/auth/signout" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Sign Out
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
                : <Link href="/sign-in">
                    Sign in
                </Link>}
        </div>
    )
}

export default GithubLogin
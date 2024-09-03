import { Auth } from '@/app/libs/auth'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async () => {
    const user = await Auth()
    return (
        // <div className='flex md:flex-row flex-col h-screen w-full text-color-accent'>
        //     <section className='flex justify-center items-start border border-color-accent w-full md:w-1/6'>
        //         <nav className='flex flex-row md:flex-col gap-4 justify-start items-start p-4'>
        //             <span className='bg-color-accent text-color-dark px-4 py-2 rounded-md w-full'>
        //                 Saved Anime
        //             </span>

        //             <span className='bg-color-accent text-color-dark px-4 py-2 rounded-md w-full'>
        //                 Comments
        //             </span>
        //         </nav>
        //     </section>
        //     <section className='p-4'>
        //         <div className='bg-color-primary text-color-dark p-4 w-full'>
        //             List of Saved Anime
        //         </div>
        //     </section>
        // </div>
        <div className="mt-8 text-color-accent flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <div className="py-8 flex gap-4 flex-wrap">
                <Link className="bg-color-accent text-color-dark font-bold py-4 px-4 text-xl" href="/user/dashboard/collection">My Collection</Link>

                <Link className="bg-color-accent text-color-dark font-bold py-4 px-4 text-xl" href="/user/dashboard/comment">My Comments</Link>
            </div>
        </div>
    )
}

export default page
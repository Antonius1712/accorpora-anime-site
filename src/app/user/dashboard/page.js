import { Auth } from '@/app/libs/auth'
import Image from 'next/image';
import React from 'react'

const page = async () => {
    const user = await Auth()
    console.log(user);
    return (
        <div className='text-color-accent'>
            <h3>WELCOME, {user.name}</h3>
            <Image className='w-1/12 rounded-full' src={user.image} alt="..." width={250} height={250} />
        </div>
    )
}

export default page
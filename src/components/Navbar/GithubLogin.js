import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GithubLogin = async ({ user }) => {
    return (
        <div>
            {user
                ? <div className='flex gap-4 justify-between items-center w-[100%]'>
                    <Link href="/user/dashboard" className='flex w-full items-center'>
                        <Image className='w-1/12 rounded-full' src={user.image} alt="..." width={250} height={250} />
                        {user.name}
                    </Link>
                    <Link href="/api/auth/signout" className='flex w-1/3 items-center'>
                        Sign Out
                    </Link>
                </div>
                : <Link href="/api/auth/signin">
                    Sign in
                </Link>}
        </div>
    )
}

export default GithubLogin
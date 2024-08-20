'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Section = ({ title, routeTo }) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(routeTo)
    }

    return (
        <div className='text-color-accent text-2xl flex justify-between'>
            <div>
                {title}
            </div>
            <div>
                {routeTo !== null
                    ? <button className='hover:text-color-primary' onClick={handleClick}>
                        Lihat Semua
                    </button>
                    : ''}
            </div>
        </div>
    )
}

export default Section
"use client"

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();
    const handleBack = (e) => {
        e.preventDefault();
        router.back()
    }
    return (
        <div className='flex items-center justify-between'>
            <button onClick={handleBack} className='border-2 border-color-accent text-color-primary px-4 py-2 rounded-md'>
                Back
            </button>

            <h3 className="text-color-primary text-2xl text-center">My Collection</h3>
        </div>
    )
}

export default BackButton
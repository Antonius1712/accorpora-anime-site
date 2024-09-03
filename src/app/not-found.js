"use client"
import { useRouter } from 'next/navigation';
import RootLayout from './(root)/layout';

const NotFound = () => {
    const router = useRouter();

    // Function to go back in history
    const handleGoBack = () => {
        router.back();
    };

    return (
        // <RootLayout>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <h1 className="text-3xl text-center text-color-accent">
                    Not Found
                </h1>

                <button 
                    onClick={handleGoBack} 
                    className='border-2 border-color-accent px-4 py-2 rounded-md mt-2'
                >
                    <h5 className="text-color-accent">Back</h5>
                </button>
            </div>
        // </RootLayout>
    );
};

export default NotFound;

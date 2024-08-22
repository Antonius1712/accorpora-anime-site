import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <section className='text-color-accent flex justify-center items-center h-screen w-full bg-gray-100'>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
                <div className='p-4 border border-color-accent shadow-xl rounded-lg flex flex-col'>
                    <div className='p-2'>
                        <label className='mb-2 text-sm'>
                            Email Address
                        </label>
                        <input className='rounded-md w-full px-3 py-1 text-sm text-color-dark' type='text'/>
                    </div>
                    <div className='p-2'>
                        <label className='mb-2 text-sm'>
                            Password
                        </label>
                        <input className='rounded-md w-full px-3 py-1 text-sm text-color-dark' type='password'/>
                    </div>
                    <div className='p-2 flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <label className='text-sm'>Remember me</label>
                        </div>
                        <button className='text-sm'>Forgot Password?</button>
                    </div>
                    <button className='w-full bg-color-secondary rounded-md p-2'>
                        Sign in
                    </button>
                    <div>
                        <div className="relative flex items-center justify-center mt-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-2 text-gray-500 bg-white text-sm">Or continue with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 11v2h5.6c-.2 1.2-.8 2.2-1.6 2.8l-.1.1 2.4 1.8c1.4-1.3 2.3-3.2 2.3-5.6 0-.5 0-1-.1-1.5h-8.5z"/>
                                        <path d="M11.9 13.6c-.9 0-1.8-.3-2.5-.8v-2.6h-2.4l-.4 2.3c.9 1.5 2.6 2.5 4.9 2.5 1.3 0 2.4-.4 3.3-1.1l-1.6-1.3c-.4.3-.9.5-1.3.5h-.1z"/>
                                        <path d="M6 10.3c-.3.8-.5 1.6-.5 2.7s.2 1.8.5 2.7l2.4-2.3z"/>
                                        <path d="M13.6 6.7c.9.8 1.5 2 1.5 3.3h2.4c0-.4 0-.9-.1-1.3h-3.8v-2h-2.5l-.4 2.2c-.6-1.1-1.8-1.9-3.3-1.9-1.3 0-2.4.4-3.3 1.1l1.6 1.3c.4-.3.9-.5 1.3-.5.9 0 1.8.3 2.5.8v2.6l2.4-2.3c.7-1.1 1.1-2.3 1.1-3.7 0-1.2-.4-2.2-1.2-3z"/>
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <Link href="/api/auth/signin" className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                    <span className="sr-only">Sign in with GitHub</span>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.3 7.8 10.8.6.1.7-.2.7-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8 0-.8 0-.8 1.3 0 2 1.3 2 1.3 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.5-.3-5.2-1.2-5.2-5.2 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 .9 1.7-.5 3.5-.5 5.2 0 2.1-1.2 3-.9 3-.9.7 1.6.2 2.7.1 3 .7.7 1.1 1.6 1.1 2.7 0 4-2.7 4.9-5.2 5.2.4.4.8 1.2.8 2.4v3.6c0 .3.2.6.7.5 4.4-1.5 7.8-5.7 7.8-10.8C23.5 5.6 18.4.5 12 .5z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
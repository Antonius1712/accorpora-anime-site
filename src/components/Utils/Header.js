import React from 'react'

const Header = ({ page }) => {
    return (
        <div className='bg-color-primary w-full text-center p-8 text-3xl'>
            Anime Populer #{page}
        </div>
    )
}

export default Header
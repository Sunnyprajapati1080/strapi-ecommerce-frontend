import React from 'react'
import {BsFillCartFill} from "react-icons/bs"

const Navbar = () => {
    return (
        <div className='p-4 shadow-lg'>
            <div className='flex justify-around items-center'>
                <div className='flex space-x-2 items-center'>
                    <BsFillCartFill className='text-pink-500 text-3xl relative right-1'/>
                    <h1 className="text-2xl select-none text-pink-500 relative right-2 font-semibold">myEcommerce</h1>
                    <div className='flex space-x-4 mt-2 relative'>
                        <p className='font-semibold text-pink-500 transition-colors cursor-pointer'>Home</p>
                        <p className='font-semibold text-pink-500 transition-colors cursor-pointer'>Products</p>
                        <p className='font-semibold text-pink-500 relative transition-colors cursor-pointer '>Category</p>
                        <p className='font-semibold text-pink-500 transition-colors cursor-pointer'>Cart</p>
                    </div>
                </div>
                <div className='flex space-x-3 items-center'>
                        <p className='text-pink-500 font-semibold transition-colors cursor-pointer'>SignIn</p>
                        <p className='border-2 border-pink-500 p-1 px-3 hover:bg-pink-500 rounded-lg hover:text-white text-pink-500 font-semibold transition-colors cursor-pointer'>SignUp</p>
                    </div>
            </div>
        </div>
    )
}

export default Navbar

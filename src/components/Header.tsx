'use client';

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    const { status, data } = useSession()
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const handleLoginClick = () => signIn();
    const handleLogoutClick = () => {
        setMenuIsOpen(false);
        signOut();
    };
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <div className="relative h-[32px] w-[182px]">
                <Image src="/logo.png" alt='Full Stack Week' fill />
            </div>

            {status === "unauthenticated" && (
                <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>Login</button>
            )}

            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayLighter p-2 px-3 border border-solid rounded-full relative">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer" />
                    <Image height={35} width={35} src={data.user.image!} alt={data.user.name!} className='rounded-full shadow-md' />

                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0 w-full h-[50px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className="text-primary pt-2 text-sm font-semibold" onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            )}
        </div>
    )
}

export default Header
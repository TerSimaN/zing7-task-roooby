'use client';

import Image from "next/image"
import { rooobyLogo } from "../../../public/assets/logos"
import Link from "next/link"
import Button from "../ui/Button"
import { useState } from "react"

const links = [
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Company', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
]

const MainHeader = () => {
    const [visible, setVisible] = useState(-1);
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-roooby-gray-100 py-6">
            <div className="max-md:relative flex flex-row items-center max-xl:justify-between container">
                <Link href={'/'} className="max-xl:ml-6 lg:mr-[6.25rem]" onClick={() => { setVisible(-1); setOpen(false); }}>
                    <Image
                        src={rooobyLogo}
                        alt="Roooby Logo"
                    />
                </Link>
                <ul className="md:flex max-md:hidden lg:gap-12 gap-6 font-inter font-medium text-sm mt-1">
                    {links.map((link, i) => (
                        <div key={i} className="flex flex-col items-center gap-y-1">
                            <li>
                                <Link href={link.href} onClick={() => setVisible(i)}>{link.name}</Link>
                            </li>
                            <div className={`${visible === i ? `visible` : `invisible`} border-t-[3px] border-black w-10`}></div>
                        </div>
                    ))}
                </ul>
                <div className="md:flex max-md:hidden sm:flex-row items-center lg:gap-5 gap-3 xl:ml-auto max-xl:mr-6">
                    <Button
                        className="font-inter font-bold text-xs tracking-[-0.19px] bg-white border rounded border-roooby-gray-200 w-[4.75rem] h-8"
                        text="Log In"
                    />
                    <Button
                        className="font-inter font-bold text-white text-xs tracking-[-0.19px] bg-roooby-blue-dark rounded w-28 h-8"
                        text="Try For Free"
                    />
                </div>
                <div className="md:hidden flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? `hidden` : ``} mr-6 w-9 h-9`} onClick={() => setOpen(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? `` : `hidden`} mr-6 w-9 h-9`} onClick={() => setOpen(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <ul className={`absolute right-0 origin-top-right z-10 ${open ? `flex` : `hidden`} flex-col items-center max-md:gap-6 bg-roooby-gray-100 shadow-xl px-6 py-4 mt-9 w-full min-h-fit`}>
                        <ul className="flex flex-col sm:gap-y-3 gap-y-4 font-inter font-medium text-xl text-center w-full">
                            {links.map((link, i) => (
                                <li key={link.href + i}>
                                    <Link href={link.href} onClick={() => { setOpen(false); setVisible(i); }}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:gap-x-6 gap-y-4">
                            <Button
                                className="font-inter font-bold text-lg tracking-[-0.19px] bg-white border rounded border-roooby-gray-200 w-40 h-12"
                                text="Log In"
                            />
                            <Button
                                className="font-inter font-bold text-white text-lg tracking-[-0.19px] bg-roooby-blue-dark rounded w-40 h-12"
                                text="Try For Free"
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
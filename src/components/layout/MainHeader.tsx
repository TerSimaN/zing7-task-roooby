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
    const [selected, setSelected] = useState(-1);
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-roooby-gray-100 py-6">
            <div className="flex items-center xl:justify-normal justify-between container max-sm:px-6">
                <Link href={'/'} className="sm:max-xl:ml-6 lg:mr-[6.25rem]" onClick={() => { setOpen(false); setSelected(-1); }}>
                    <Image
                        src={rooobyLogo}
                        alt="Roooby Logo"
                    />
                </Link>
                <ul className="md:flex hidden lg:gap-12 gap-6 font-inter font-medium text-sm mt-2">
                    {links.map((link, i) => (
                        <li key={i}
                            className={`flex justify-center ${selected === i ? `border-b-[3px] border-black w-10` : `border-b-[3px] border-transparent w-10`} pb-2`}
                        >
                            <Link href={link.href} onClick={() => setSelected(i)}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="md:flex hidden sm:flex-row items-center lg:gap-5 gap-3 xl:ml-auto max-xl:mr-6">
                    <Button
                        className="font-inter font-bold text-xs tracking-[-0.19px] bg-white border rounded border-roooby-gray-200 w-[4.75rem] h-8"
                        text="Log In"
                    />
                    <Button
                        className="font-inter font-bold text-white text-xs tracking-[-0.19px] bg-roooby-blue-dark rounded w-28 h-8"
                        text="Try For Free"
                    />
                </div>
                <button className="md:hidden sm:mr-6" type="button" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? `hidden` : ``} w-6 h-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className={`md:hidden ${open ? `` : `hidden`}`}>
                    <div className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-roooby-gray-100 px-6 py-6 max-w-sm`}>
                        <div className="flex items-center justify-between">
                            <Link href={'/'} onClick={() => { setOpen(false); setSelected(-1); }}>
                                <Image
                                    src={rooobyLogo}
                                    alt="Roooby Logo"
                                />
                            </Link>
                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setOpen(!open)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? `` : `hidden`} w-6 h-6`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-200">
                                <div className="flex flex-col gap-y-2 py-6">
                                    <ul className="flex flex-col gap-y-2 font-inter font-medium text-base">
                                        {links.map((link, i) => (
                                            <li key={link.href + i} className="block px-3 py-3 -mx-3">
                                                <Link href={link.href} onClick={() => { setOpen(false); setSelected(i); }}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-y-2 py-6">
                                    <Button
                                        className="font-inter font-bold text-base tracking-[-0.19px] bg-white border rounded border-roooby-gray-200 w-full h-12"
                                        text="Log In"
                                    />
                                    <Button
                                        className="font-inter font-bold text-white text-base tracking-[-0.19px] bg-roooby-blue-dark rounded w-full h-12"
                                        text="Try For Free"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
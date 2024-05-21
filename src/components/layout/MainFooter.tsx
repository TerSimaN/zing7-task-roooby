import Image from "next/image"
import { languageIcon } from "../../../public/assets/icons"
import { rooobyLogo } from "../../../public/assets/logos";
import Link from "next/link"
import TwitterIcon from "../ui/TwitterIcon";
import FacebookIcon from "../ui/FacebookIcon";
import LinkedInIcon from "../ui/LinkedInIcon";

const links = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookies', href: '#' }
]

const sections = [
    {
        name: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Jobs', href: '#' },
            { name: 'Blog', href: '/blog' },
            { name: 'Careers', href: '#' }
        ]
    },
    {
        name: 'Product',
        links: [
            { name: 'Sales software', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Status', href: '#' },
            { name: 'API', href: '#' }
        ]
    },
    {
        name: 'Discover',
        links: [
            { name: 'Partner Program', href: '#' },
            { name: 'Get our newsletter', href: '#' },
            { name: 'Sales Pipeline', href: '#' },
            { name: 'What is CRM?', href: '#' },
            { name: 'CRM Comparison', href: '#' },
            { name: 'Resources', href: '#' }
        ]
    },
    {
        name: 'Help Center',
        links: [
            { name: 'Community', href: '#' },
            { name: 'Knowledge Base', href: '#' },
            { name: 'Academy', href: '#' },
            { name: 'Support', href: '#' }
        ]
    }
]

const MainFooter = () => {
    return (
        <footer className="sm:px-12 xl:px-0 lg:mt-[9.25rem] mt-[4.75rem]">
            <div className="flex lg:flex-row flex-col sm:justify-between max-sm:items-center gap-y-8 container">
                <div className="flex flex-col max-sm:items-center">
                    <Link href={'/'}>
                        <Image
                            src={rooobyLogo}
                            alt="Roooby Logo"
                        />
                    </Link>
                    <p className="font-inter font-normal text-roooby-gray-500 text-sm leading-6 max-sm:text-center mt-6 w-[16.5rem]">
                        We built an elegant solution.
                        <br />
                        Our team created a fully integrated sales and marketing solution for SMBs
                    </p>
                    <div className="flex flex-row sm:gap-4 justify-between lg:mt-6 mt-4 w-[6.5rem] h-6">
                        <TwitterIcon />
                        <FacebookIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:items-start items-center justify-between lg:max-xl:justify-around w-full max-w-[768px]">
                    {sections.map((section) => (
                        <div key={section.name} className="flex flex-col sm:gap-y-3 max-sm:mt-6">
                            <h2 className="font-inter font-bold text-base max-sm:text-center">{section.name}</h2>
                            <ul className="font-intet font-normal text-sm leading-9 tracking-[0.2px] max-sm:text-center">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-roooby-gray-300 border-opacity-25 sm:px-8 xl:px-0 pt-10 sm:mt-16 lg:mt-[6.25rem] mt-12 mb-10 mx-auto w-full max-w-[85rem]">
                <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between container">
                    <span className="font-inter font-normal text-roooby-gray-500 text-sm tracking-[0.2px]">© Copyright 2024</span>
                    <ul className="flex md:flex-row flex-col gap-y-3 items-center lg:justify-between justify-around font-inter font-normal text-sm tracking-[0.2px] w-[23rem]">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row items-center">
                        <Image
                            src={languageIcon}
                            alt="Language Icon"
                            width={24}
                            height={24}
                        />
                        <select className="bg-transparent font-inter font-medium text-sm tracking-[0.2px] select-none appearance-none ml-2 -mr-2 w-full" name="lang">
                            <option value={'en'}>English</option>
                            <option value={'bg'}>Bulgarian</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="fill-roooby-gray-300 w-6 h-4">
                            <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
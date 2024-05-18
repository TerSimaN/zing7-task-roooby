import Image from "next/image"
import { amazonLogo, atlassianLogo, cannonLogo, googleLogo, walmartLogo } from "../../../public/assets/logos"

const logos = [
    { imgSrc: googleLogo, imgAlt: 'Google logo' },
    { imgSrc: atlassianLogo, imgAlt: 'Atlassian logo' },
    { imgSrc: cannonLogo, imgAlt: 'Cannon logo' },
    { imgSrc: walmartLogo, imgAlt: 'Walmart logo' },
    { imgSrc: amazonLogo, imgAlt: 'Amazon logo' },
]

const Clients = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center lg:gap-x-6 max-sm:gap-y-8 gap-y-6 lg:px-6 lg:mt-[7.5rem] mt-16 mb-[5.25rem]">
            <span className="font-inter font-medium text-base tracking-[-0.22px]">Trusted by 1,000+ customers</span>
            <div className="flex md:flex-row flex-col items-center justify-between sm:gap-x-10 md:gap-x-12 gap-y-10 sm:mx-4">
                {logos.map((logo, i) => (
                    <Image
                        src={logo.imgSrc}
                        alt={logo.imgAlt}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default Clients
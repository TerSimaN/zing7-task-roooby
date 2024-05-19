import { asanaLogo, trello, zapier, googleMeetLogo, hubSpotLogo, intercomLogo, microsoftTeamsLogo, slackLogo, zendeskLogo, zoomLogo } from "../../../public/assets/logos";
import Image from "next/image"
import Button from "../ui/Button";

const logoImages = [
    { imgSrc: zapier, imgAlt: 'zapier logo' },
    { imgSrc: hubSpotLogo, imgAlt: 'HubSpot logo' },
    { imgSrc: zoomLogo, imgAlt: 'Zoom logo' },
    { imgSrc: googleMeetLogo, imgAlt: 'Google Meet logo' },
    { imgSrc: zendeskLogo, imgAlt: 'Zendesk logo' },
    { imgSrc: intercomLogo, imgAlt: 'Intercom logo' },
    { imgSrc: trello, imgAlt: 'trello logo' },
    { imgSrc: slackLogo, imgAlt: 'Slack logo' },
    { imgSrc: asanaLogo, imgAlt: 'Asana logo' },
    { imgSrc: microsoftTeamsLogo, imgAlt: 'Microsoft Teams logo' },
]

const Logos = () => {
    return (
        <div className="bg-roooby-gray-100">
            <div className="flex flex-col container sm:px-0 px-4 lg:py-[7.5rem] py-16 mt-[7.5rem]">
                <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px] max-sm:text-center mx-auto">Over 300+ integrations</h1>
                <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 max-sm:text-center mx-auto mt-3">
                    Expand the capabilities of <span className="font-inter font-black text-roooby-gray-600 text-lg leading-7">Roooby</span> with hundreds of apps and integrations
                </span>
                <div className="flex sm:flex-row flex-col max-sm:items-center flex-wrap gap-2 md:px-12 lg:px-20 xl:px-0 px-8 sm:mt-[4.5rem] mt-9">
                    {logoImages.map((logo, i) => (
                        <Image
                            src={logo.imgSrc}
                            alt={logo.imgAlt}
                            key={i}
                        />
                    ))}
                </div>
                <Button
                    className="font-inter font-medium text-2xl tracking-[0.51px] sm:mx-auto mx-12 mt-[4.5rem]"
                    text="See all apps and extensions"
                    hasIcon="true"
                    iconColor="fill-roooby-blue-dark"
                    iconMargin="mt-1"
                />
            </div>
        </div>
    )
}

export default Logos
import { asanaLogo, chartsLogo, gearLogo, googleMeetLogo, hubSpotLogo, intercomLogo, microsoftTeamsLogo, slackLogo, zendeskLogo, zoomLogo } from "../../../public/assets/logos";
import Image from "next/image"
import Button from "../ui/Button";

const extensions = [
    { imgSrc: gearLogo, imgAlt: 'gear logo' },
    { imgSrc: hubSpotLogo, imgAlt: 'HubSpot logo' },
    { imgSrc: zoomLogo, imgAlt: 'Zoom logo' },
    { imgSrc: googleMeetLogo, imgAlt: 'Google Meet logo' },
    { imgSrc: zendeskLogo, imgAlt: 'Zendesk logo' },
    { imgSrc: intercomLogo, imgAlt: 'Intercom logo' },
    { imgSrc: chartsLogo, imgAlt: 'chart logo' },
    { imgSrc: slackLogo, imgAlt: 'Slack logo' },
    { imgSrc: asanaLogo, imgAlt: 'Asana logo' },
    { imgSrc: microsoftTeamsLogo, imgAlt: 'Microsoft Teams logo' },
]

const Logos = () => {
    return (
        <div className="bg-roooby-gray-100">
            <div className="flex flex-col container sm:py-[7.5rem] py-16 mt-[7.5rem]">
                <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px] max-sm:text-center mx-auto">Over 300+ integrations</h1>
                <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 max-sm:text-center mx-auto mt-3">
                    Expand the capabilities of <span className="font-inter font-black text-roooby-gray-600 text-lg leading-7">Roooby</span> with hundreds of apps and integrations
                </span>
                <div className="flex sm:flex-row flex-col max-sm:items-center flex-wrap gap-2 sm:mt-[4.5rem] mt-9">
                    {extensions.map((extension, i) => (
                        <Image
                            src={extension.imgSrc}
                            alt={extension.imgAlt}
                            key={i}
                        />
                    ))}
                </div>
                <Button
                    className="font-inter font-medium text-2xl tracking-[0.51px] mx-auto mt-[4.5rem]"
                    text="See all apps and extensions"
                    hasIcon="true"
                    iconColor="fill-roooby-blue-dark"
                />
            </div>
        </div>
    )
}

export default Logos
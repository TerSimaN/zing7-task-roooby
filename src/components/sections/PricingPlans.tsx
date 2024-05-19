import Image from "next/image"
import { checkmarkIcon } from "../../../public/assets/icons"
import Button from "../ui/Button"

const cards = [
    {
        name: 'Starter',
        info: 'Get organized and set up simple sales processes lorem ipsum',
        price: '$8,90',
        features: [
            { name: '2 team members' },
            { name: '1,000 Contacts & Companies' },
            { name: '5 Campaign Workflows' },
            { name: '10 Nodes Per Campaign' },
            { name: '5 Automation Rules (Triggers)' },
            { name: '3 Plugins/Integrations' },
            { name: 'Marketing Automation', notAvailable: true },
            { name: 'Custom Deal Tracks', notAvailable: true },
            { name: 'Automated Voicemails', notAvailable: true },
            { name: 'Post-call Automation', notAvailable: true }
        ]
    },
    {
        name: 'Professional',
        isRecommended: true,
        info: 'Everything you need to boost performance and revenue lorem ipsum',
        price: '$29,90',
        features: [
            { name: '10 team members' },
            { name: '2,500 Contacts & Companies' },
            { name: '5 Campaign Workflows' },
            { name: '10 Nodes Per Campaign' },
            { name: '5 Automation Rules (Triggers)' },
            { name: '3 Plugins/Integrations' },
            { name: 'Marketing Automation' },
            { name: 'Custom Deal Tracks' },
            { name: 'Automated Voicemails', notAvailable: true },
            { name: 'Post-call Automation', notAvailable: true }
        ]
    },
    {
        name: 'Enterprise',
        info: 'Customize without limits and access unrivaled support lorem ipsum',
        price: '$39,90',
        features: [
            { name: 'Unlimited team members' },
            { name: '5,000 Contacts & Companies' },
            { name: '25 Campaign Workflows' },
            { name: '20 Nodes Per Campaign' },
            { name: '15 Automation Rules (Triggers)' },
            { name: '10 Plugins/Integrations' },
            { name: 'Marketing Automation' },
            { name: 'Custom Deal Tracks' },
            { name: 'Automated Voicemails' },
            { name: 'Post-call Automation' }
        ]
    }
]

const PricingPlans = () => {
    return (
        <div className="flex lg:flex-row flex-col max-lg:items-center sm:gap-x-2 gap-y-4 xl:mt-[6.25rem] mt-12">
            {cards.map((card, i) => (
                <div key={i} className="flex flex-col bg-white rounded-xl xl:px-8 px-5 py-8 sm:max-xl:mx-auto sm:w-full sm:max-w-[23.5rem] max-w-80">
                    <div className="flex flex-row items-center">
                        <h1 className="font-inter font-bold text-2xl">{card.name}</h1>
                        <span
                            className={`${card.isRecommended ? `block` : `hidden`} rounded bg-roooby-green-100 
                                            font-inter font-bold text-roooby-green-400 text-xs tracking-[1.2px] px-2 py-1 ml-3 h-6`}>
                            Recommended
                        </span>
                    </div>
                    <p className="font-inter font-normal text-base leading-7 mt-2">{card.info}</p>
                    <div className="flex flex-row justify-center mt-6">
                        <span className="font-inter font-bold text-5xl leading-[3.75rem] tracking-[-0.67px]">{card.price}</span>
                        <span className="font-inter font-bold text-roooby-gray-400 text-base leading-7 mt-auto">/month</span>
                    </div>
                    <Button
                        text="Try for Free"
                        className={`${card.isRecommended ? `bg-roooby-blue-dark text-white` : `bg-white`} 
                                        border rounded-lg font-inter font-bold text-lg tracking-[-0.25px] mt-6 w-full h-14`}
                    />
                    <span className="font-inter font-normal text-roooby-gray-400 text-sm tracking-[0.16px] max-sm:text-center mt-3">Free 14-day trial. No credit card required.</span>
                    <ul className="flex flex-col gap-y-4 border-t border-roooby-gray-300 font-inter font-normal text-base leading-7 tracking-[0.18px] pt-6 mt-8">
                        {card.features.map((feature, j) => (
                            <li key={j} className={`flex flex-row items-center gap-x-3 ${feature.notAvailable ? `opacity-25` : ``}`}>
                                <Image
                                    src={checkmarkIcon}
                                    alt="checkmark icon"
                                />
                                <span className={`${feature.notAvailable ? `line-through` : ``}`}>{feature.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingPlans
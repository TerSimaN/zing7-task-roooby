import Cta from "@/components/layout/Cta";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { checkmarkIcon } from "../../../public/assets/icons";

export default function Pricing() {
    /* 
        let elements = document.querySelectorAll("[data-menu]");
        for (let i = 0; i < elements.length; i++) {
            let main = elements[i];
    
            main.addEventListener("click", function () {
                let element = main.parentElement.parentElement;
                let indicators = main.querySelectorAll("img");
                let child = element.querySelector("#menu");
                let h = element.querySelector("#mainHeading>div>p");
    
                h.classList.toggle("font-semibold");
                child.classList.toggle("hidden");
                // console.log(indicators[0]);
                indicators[0].classList.toggle("rotate-180");
            });
        }
     */

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

    return (
        <main>
            <div className="bg-roooby-gray-100 pt-[4.5rem] pb-[7.5rem]">
                <div className="border-t-[3px] border-black w-10"></div>
                <div className="flex flex-col container">
                    <div className="flex flex-row items-center gap-x-[5.75rem]">
                        <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px]">
                            Choose the right plan
                            <br />
                            <span className="text-roooby-gray-300">for your business</span>
                        </h1>
                        <p className="font-inter font-normal text-lg leading-7 mt-auto max-w-[22.5rem]">
                            Built with love for growing businesses.
                            Check out the Roooby CRM pricing grid below.
                            Switch between plans at any time.
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-2 mt-[6.25rem]">
                        {cards.map((card, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-xl px-8 py-8 max-w-[23.5rem]">
                                <div className="flex flex-row items-center">
                                    <h1 className="font-inter font-bold text-2xl">{card.name}</h1>
                                    <span
                                        className={
                                            `${card.isRecommended ? `block` : `hidden`} 
                                            rounded bg-roooby-green-100 
                                            font-inter font-bold text-roooby-green-400 text-xs tracking-[1.2px] px-2 py-1 ml-3 h-6`
                                        }>Recommended</span>
                                </div>
                                <p className="font-inter font-normal text-base leading-7 mt-2">{card.info}</p>
                                <div className="flex flex-row justify-center mt-6">
                                    <span className="font-inter font-bold text-5xl leading-[3.75rem] tracking-[-0.67px]">{card.price}</span>
                                    <span className="font-inter font-bold text-roooby-gray-400 text-base leading-7 mt-auto">/month</span>
                                </div>
                                <Button
                                    text="Try for Free"
                                    className={
                                        `${card.isRecommended ? `bg-roooby-blue text-white` : `bg-white`} 
                                        border rounded-lg font-inter font-bold text-lg tracking-[-0.25px] mt-6 w-full h-14`
                                    }
                                />
                                <span className="font-inter font-normal text-roooby-gray-400 text-sm tracking-[0.16px] mt-3">Free 14-day trial. No credit card required.</span>
                                <div className="border-t border-roooby-gray-300 mt-8 h-[1px]"></div>
                                <ul className="flex flex-col gap-y-4 font-inter font-normal text-base leading-7 tracking-[0.18px] mt-6">
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
                    <div className="border-t border-roooby-gray-300 mt-[6.25rem] h-[1px]"></div>
                    <div className="flex flex-row gap-x-11 items-center mt-12">
                        <h1 className="font-inter font-bold text-[2rem] leading-10 tracking-[-0.44px]">Need help choosing the right plan?</h1>
                        <div className="flex flex-row gap-x-7 ml-auto">
                            <Button
                                text="Contact sales"
                                className="bg-white border border-roooby-gray-200 rounded-lg font-inter font-bold text-lg tracking-[-0.25px] w-[10.5rem] h-14"
                            />
                            <Button
                                text="Compare plans"
                                className="bg-roooby-blue rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] w-[10.5rem] h-14"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col container my-[9.25rem]">
                <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-w-[37.25rem]">Frequently asked questions</h1>
                <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
                    <div className="lg:w-8/12 w-full mx-auto">
                        <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                        <div className="w-full md:px-6">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"><span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?</p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                                    <img className="transform dark:hidden " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />
                                    <img className="transform dark:block hidden " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler" />
                                </button>
                            </div>
                            <div id="menu" className="hidden mt-6 w-full">
                                <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                        <hr className="w-full lg:mt-10 my-8" />
                    </div>
                </div>
            </div>
            <Cta />
        </main>
    );
}
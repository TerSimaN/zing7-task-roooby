'use client';

import Cta from "@/components/layout/Cta";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { checkmarkIcon, iconAdd } from "../../../public/assets/icons";
import { useState } from "react";

export default function Pricing() {
    const [open, setOpen] = useState(-1);

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

    const accordions = [
        {
            header: 'How Does Roooby CRM Compare To The Competition?',
            info: `Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey,
            from generating leads, to closing deals and supporting your customers. With a full suite of CRM,
            sales enablement, marketing automation, and help desk/customer support capabilities,
            it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products,
            leaving you with the headache of integrating them and increasing the overall price point.`
        },
        {
            header: 'Can I Change Plans Or Cancel My Subscription At Any Time?',
            info: `Integer a molestie felis. Fusce euismod elit orci, ac euismod augue semper sit amet. 
            Etiam mattis suscipit laoreet. Aenean dolor turpis, suscipit commodo fermentum in, suscipit eget magna. 
            Nullam ac convallis sapien. Cras pellentesque faucibus lacus laoreet luctus. Ut laoreet ipsum et sapien gravida auctor. 
            Curabitur quis ante nec enim vulputate bibendum ut a lectus. Pellentesque euismod in est a consequat. 
            Phasellus non sodales nibh. Vivamus porta lacus eget lorem lacinia sodales.`
        },
        {
            header: 'How Secure Is My Data With Roooby CRM?',
            info: `Integer pretium faucibus eros, vel faucibus libero placerat nec. Maecenas est metus, posuere a nisl in, tempus ullamcorper est. 
            Sed scelerisque ligula at nisi accumsan, sit amet placerat felis tempor. Integer consectetur lacus ac leo ornare volutpat. 
            Quisque eget sem sapien. Curabitur suscipit iaculis sapien id vestibulum. Phasellus eget nisl nec ligula posuere fringilla. 
            Duis sagittis felis sed ligula sagittis sodales. Mauris ullamcorper nisl nec eleifend posuere. In hac habitasse platea dictumst.
            Phasellus vitae posuere quam. Suspendisse vitae mattis mi. Aenean id congue lorem.`
        },
        {
            header: 'What Is The Uptime Guarantee?',
            info: `Aliquam pellentesque leo at felis malesuada volutpat. Maecenas nec metus nisi. Morbi pharetra luctus ante et aliquet. 
            Morbi pellentesque ipsum eu orci molestie scelerisque. Pellentesque suscipit mauris id ex tristique, et dictum risus mattis. 
            Nunc sed scelerisque magna. Fusce in aliquam est, sit amet dictum metus. Etiam pretium sapien eros, eget porttitor sapien tempor vitae. 
            Cras tincidunt lectus vitae dui convallis, at imperdiet libero lacinia. Integer sodales porta laoreet. Morbi mollis placerat lectus, 
            in scelerisque justo gravida at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`
        },
        {
            header: 'How Can I Add More Emails To My Account?',
            info: `Pellentesque rutrum imperdiet nisl, id sodales augue faucibus ac. Aenean id nibh sit amet sem ultrices rutrum. 
            Aliquam mattis, nisi non condimentum accumsan, dolor ante commodo nibh, vel gravida augue turpis vitae risus. 
            Nam molestie justo ac libero ullamcorper tincidunt. Aliquam vel sollicitudin tellus. Etiam vel accumsan arcu. Sed massa dolor, 
            scelerisque sed turpis ac, fringilla tempor ex. Sed vel tellus at felis rhoncus porta. Sed luctus consectetur elit, 
            eu ornare sem sollicitudin vel. Morbi varius, dui quis maximus viverra, mi magna porta eros, quis fermentum nibh dolor ac arcu.`
        },
    ]

    return (
        <main>
            <div className="bg-roooby-gray-100 sm:pt-[4.5rem] pt-9 sm:pb-[7.5rem] pb-14">
                <div className="flex flex-col container">
                    <div className="flex sm:flex-row flex-col items-center sm:gap-x-[5.75rem] gap-y-9">
                        <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-sm:text-center">
                            Choose the right plan
                            <br />
                            <span className="text-roooby-gray-300">for your business</span>
                        </h1>
                        <p className="font-inter font-normal text-lg leading-7 max-sm:text-center mt-auto max-w-[22.5rem]">
                            Built with love for growing businesses.
                            Check out the Roooby CRM pricing grid below.
                            Switch between plans at any time.
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-x-2 gap-y-4 sm:mt-[6.25rem] mt-12">
                        {cards.map((card, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-xl px-8 py-8 max-sm:mx-auto max-w-[23.5rem]">
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
                                        `${card.isRecommended ? `bg-roooby-blue-dark text-white` : `bg-white`} 
                                        border rounded-lg font-inter font-bold text-lg tracking-[-0.25px] mt-6 w-full h-14`
                                    }
                                />
                                <span className="font-inter font-normal text-roooby-gray-400 text-sm tracking-[0.16px] max-sm:text-center mt-3">Free 14-day trial. No credit card required.</span>
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
                    <div className="border-t border-roooby-gray-300 sm:mt-[6.25rem] mt-12 h-[1px]"></div>
                    <div className="flex sm:flex-row flex-col sm:gap-x-11 gap-y-11 items-center mt-12">
                        <h1 className="font-inter font-bold text-[2rem] leading-10 tracking-[-0.44px] max-sm:text-center">Need help choosing the right plan?</h1>
                        <div className="flex sm:flex-row flex-col sm:gap-x-7 gap-y-4 sm:ml-auto">
                            <Button
                                text="Contact sales"
                                className="bg-white border border-roooby-gray-200 rounded-lg font-inter font-bold text-lg tracking-[-0.25px] sm:w-[10.5rem] w-64 h-14"
                            />
                            <Button
                                text="Compare plans"
                                className="bg-roooby-blue-dark rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] sm:w-[10.5rem] w-64 h-14"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col container max-sm:px-4 sm:my-[7.5rem] my-[4.5rem]">
                <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-sm:text-center max-w-[37.25rem]">Frequently asked questions</h1>
                <div className="flex flex-col gap-y-12 ml-auto mt-[4.5rem] max-w-[59.185rem]">
                    {accordions.map((accordion, i) => (
                        <div key={i} className="border-t border-roooby-gray-300 pt-[3.25rem]">
                            <button className="flex items-start justify-between w-full" onClick={() => setOpen(i)}>
                                <h1 className="font-inter font-medium text-[2rem] leading-10 tracking-[-0.44px]">{accordion.header}</h1>
                                <Image
                                    src={iconAdd}
                                    alt="icon add"
                                    className="ml-auto"
                                />
                            </button>
                            <p className={`${open === i ? `` : `hidden`} font-inter font-normal text-lg leading-7 mt-9 w-full max-w-[53.75rem]`}>{accordion.info}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Cta />
        </main>
    );
}
'use client';

import Image from "next/image"
import { useState } from "react";
import { iconAdd } from "../../../public/assets/icons";

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

const FAQs = () => {
    const [open, setOpen] = useState(-1);

    return (
        <div className="flex flex-col container sm:px-8 xl:px-0 px-4 xl:my-[7.5rem] my-[4.5rem]">
            <h1 className="font-inter font-bold xl:text-[4rem] text-6xl leading-[4.5rem] tracking-[-0.89px] max-sm:text-center max-w-[37.25rem]">Frequently asked questions</h1>
            <div className="flex flex-col gap-y-12 ml-auto mt-[4.5rem] max-w-[59.185rem]">
                {accordions.map((accordion, i) => (
                    <div key={i} className="border-t border-roooby-gray-300 pt-[3.25rem]">
                        <button className="flex items-center justify-between w-full" onClick={() => setOpen(i)}>
                            <h1 className="font-inter font-medium text-[2rem] leading-10 tracking-[-0.44px]">{accordion.header}</h1>
                            <Image
                                src={iconAdd}
                                alt="icon add"
                                className={`${open === i ? `rotate-45` : `rotate-0`} ml-auto`}
                            />
                        </button>
                        <p className={`${open === i ? `` : `hidden`} font-inter font-normal text-lg leading-7 mt-9 w-full max-w-[53.75rem]`}>{accordion.info}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs
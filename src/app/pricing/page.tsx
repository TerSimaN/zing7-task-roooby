import Button from "@/components/ui/Button";
import Cta from "@/components/sections/Cta";
import FAQs from "@/components/sections/FAQs";
import PricingPlans from "@/components/sections/PricingPlans";
import Image from "next/image";
import { ctaImage } from "../../../public/assets/images";

export default function Pricing() {
    return (
        <main>
            <div className="bg-roooby-gray-100 lg:pt-[4.5rem] pt-9 lg:pb-[7.5rem] pb-14">
                <div className="flex flex-col container sm:px-6 xl:px-0 px-4">
                    <div className="flex xl:flex-row flex-col max-lg:items-center sm:gap-x-[5.75rem] gap-y-9">
                        <h1 className="font-inter font-bold sm:text-[4rem] text-5xl leading-[4.5rem] tracking-[-0.89px] max-lg:text-center sm:max-xl:text-balance">
                            Choose the right plan <span className="text-roooby-gray-300">for your business</span>
                        </h1>
                        <p className="font-inter font-normal text-lg leading-7 max-sm:text-center xl:ml-0 lg:ml-auto mt-auto lg:max-w-[22.5rem]">
                            Built with love for growing businesses.
                            Check out the Roooby CRM pricing grid below.
                            Switch between plans at any time.
                        </p>
                    </div>
                    <PricingPlans />
                    <div className="flex lg:flex-row flex-col sm:gap-x-11 gap-y-11 items-center border-t border-roooby-gray-300 lg:px-24 sm:pt-12 pt-6 lg:mt-[6.25rem] mt-16">
                        <h1 className="font-inter font-bold text-[2rem] leading-10 tracking-[-0.44px] max-sm:text-center max-sm:px-4">Need help choosing the right plan?</h1>
                        <div className="flex sm:flex-row flex-col sm:gap-x-7 gap-y-4 lg:ml-auto">
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
            <FAQs />
            <div className="relative mx-auto w-full max-w-full">
                <Image
                    src={ctaImage}
                    alt="cta bg image"
                    className="absolute inset-0 -z-10 object-cover w-full h-full"
                />
                <Cta />
            </div>
        </main>
    );
}
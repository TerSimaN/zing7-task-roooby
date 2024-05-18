import Button from "@/components/ui/Button";
import Cta from "@/components/sections/Cta";
import FAQs from "@/components/sections/FAQs";
import PricingPlans from "@/components/sections/PricingPlans";

export default function Pricing() {
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
                    <PricingPlans />
                    <div className="flex sm:flex-row flex-col sm:gap-x-11 gap-y-11 items-center border-t border-roooby-gray-300 sm:px-24 sm:pt-12 pt-6 mt-[6.25rem]">
                        <h1 className="font-inter font-bold text-[2rem] leading-10 tracking-[-0.44px] max-sm:text-center max-sm:px-4">Need help choosing the right plan?</h1>
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
            <FAQs />
            <Cta />
        </main>
    );
}
import Clients from "@/components/layout/Clients";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Contact() {
    return (
        <main>
            <div className="bg-roooby-gray-100 sm:pt-[4.5rem] pt-9 sm:pb-[7.5rem] pb-14">
                <div className="flex flex-col sm:gap-y-[4.5rem] gap-y-9 container">
                    <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-sm:text-center max-w-[34.75rem]">
                        Get in touch with our lovely team
                    </h1>
                    <div className="flex sm:flex-row flex-col items-center gap-x-32 max-sm:gap-y-16 max-sm:px-4">
                        <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col gap-y-1">
                                <span className="font-inter font-bold text-lg">Roooby Technologies</span>
                                <span className="font-inter font-medium text-roooby-gray-500 text-lg leading-7">
                                    Plovdiv, Bulgaria, bul Vasil Levski 96
                                </span>
                            </div>
                            <Image
                                src="/assets/images/map-placeholder-image.svg"
                                alt="map-placeholder-image"
                                width={458}
                                height={288}
                            />
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-x-4">
                                    <div className="border-l-2 border-roooby-gray-300 h-12"></div>
                                    <div className="flex flex-col">
                                        <span className="font-inter font-bold text-lg">General</span>
                                        <span className="font-inter font-medium text-roooby-gray-500 text-lg">hello@me.com</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-x-4">
                                    <div className="border-l-2 border-roooby-gray-300 h-12"></div>
                                    <div className="flex flex-col">
                                        <span className="font-inter font-bold text-lg">Support</span>
                                        <span className="font-inter font-medium text-roooby-gray-500 text-lg">support@me.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="flex flex-col sm:gap-y-6 gap-y-4 w-full max-w-[34.75rem]">
                            <div className="bg-white rounded-xl px-6 py-6 h-[4.5rem]">
                                <input className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none w-full" placeholder="Your name" type="text" name="name"/>
                            </div>
                            <div className="bg-white rounded-xl px-6 py-6 h-[4.5rem]">
                                <input className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none w-full" placeholder="Your email" type="email" name="email"/>
                            </div>
                            <div className="bg-white rounded-xl px-6 py-5 h-48">
                                <textarea className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none resize-none w-full" placeholder="Message" name="message" rows={5}></textarea>
                            </div>
                            <Button
                                text="Send message"
                                hasIcon="true"
                                iconColor="fill-white"
                                iconMargin="sm:ml-4 ml-2"
                                className="bg-roooby-green-400 rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] pl-6 max-sm:px-[6.75rem] w-52 max-sm:w-full h-14"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <Clients />
            </div>
        </main>
    );
}
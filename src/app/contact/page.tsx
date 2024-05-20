import Clients from "@/components/sections/Clients";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Contact() {
    return (
        <main>
            <div className="bg-roooby-gray-100 lg:pt-[4.5rem] pt-9 lg:pb-[7.5rem] pb-14">
                <div className="container flex flex-col max-lg:items-center sm:gap-y-[4.5rem] gap-y-9 sm:px-16 xl:px-0 px-1">
                    <h1 className="font-inter font-bold sm:text-[4rem] text-5xl leading-[4.5rem] tracking-[-0.89px] max-lg:text-center max-w-[34.75rem]">
                        Get in touch with our lovely team
                    </h1>
                    <div className="flex lg:flex-row flex-col items-center xl:gap-x-32 gap-x-16 lg:gap-y-0 gap-y-16 sm:px-0 px-4">
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
                                <div className="flex flex-col border-l border-roooby-gray-300 pl-4">
                                    <span className="font-inter font-bold text-lg h-6">General</span>
                                    <span className="font-inter font-medium text-roooby-gray-500 text-lg h-6">hello@me.com</span>
                                </div>
                                <div className="flex flex-col border-l border-roooby-gray-300 pl-4">
                                    <span className="font-inter font-bold text-lg h-6">Support</span>
                                    <span className="font-inter font-medium text-roooby-gray-500 text-lg h-6">support@me.com</span>
                                </div>
                            </div>
                        </div>
                        <form className="flex flex-col sm:gap-y-6 gap-y-4 w-full xl:max-w-[34.75rem] max-w-md">
                            <div className="bg-white rounded-xl px-6 py-6 h-[4.5rem]">
                                <input className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none w-full" placeholder="Your name" type="text" name="name" />
                            </div>
                            <div className="bg-white rounded-xl px-6 py-6 h-[4.5rem]">
                                <input className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none w-full" placeholder="Your email" type="email" name="email" />
                            </div>
                            <div className="bg-white rounded-xl px-6 py-5 h-48">
                                <textarea className="font-inter font-medium text-xl tracking-[-0.29px] placeholder:text-roooby-gray-300 focus:outline-none resize-none w-full" placeholder="Message" name="message" rows={5}></textarea>
                            </div>
                            <Button
                                text="Send message"
                                hasIcon="true"
                                iconColor="fill-white"
                                iconMargin="sm:ml-4 ml-2"
                                className="sm:justify-normal justify-center bg-roooby-green-400 rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] sm:pl-6 sm:w-52 h-14"
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
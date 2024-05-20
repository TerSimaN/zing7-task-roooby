import Image from "next/image";
import { headerImage } from "../../public/assets/images";
import Cta from "@/components/sections/Cta";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import Articles from "@/components/sections/Articles";
import HomepageContent from "@/components/sections/HomepageContent";

export default function Home() {
  return (
    <main>
      <div className="bg-roooby-gray-100 overflow-hidden sm:pt-[4.5rem] pt-9">
        <div className="lg:flex container max-lg:px-6 lg:max-xl:px-8 px-0">
          <div className="lg:flex-shrink-0 lg:mx-0 mx-auto lg:max-w-[40rem] max-w-2xl">
            <h1 className="font-inter font-bold text-roooby-blue-dark sm:text-[4rem] text-[3rem] leading-[4.75rem] tracking-[-0.89px] max-sm:text-center">
              Bringing companies and customers together, anywhere
            </h1>
            <p className="font-inter font-normal text-lg leading-7 max-sm:text-center max-sm:px-2 mt-6 max-w-[30rem]">
              An awesome & powefull tools for your business,
              increase business revenue with enterprise-grade links
              built to acquire and engage cutomers.
            </p>
            <div className="flex flex-col gap-y-3 sm:mt-16 mt-8 max-w-[28.5rem]">
              <form>
                <div className="flex sm:flex-row flex-col justify-between items-center sm:bg-white sm:border sm:border-roooby-gray-200 sm:rounded-xl pr-2">
                  <input className="max-sm:bg-white max-sm:border max-sm:border-roooby-gray-200 max-sm:rounded-xl sm:rounded-l-lg font-inter font-medium text-lg tracking-[-0.25px] placeholder:text-roooby-gray-300 focus:outline-none max-sm:pl-4 sm:ml-6 w-[19rem] h-[4.5rem]" placeholder="Enter your email" type="email" name="email" />
                  <button className="bg-roooby-blue-dark rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] max-sm:mt-2 sm:w-[8.75rem] max-sm:w-[19rem] h-14" type="submit">Try For Free</button>
                </div>
              </form>
              <span className="font-inter font-normal text-roooby-gray-500 text-sm max-sm:text-center sm:pl-4">Full access. No credit card required.</span>
            </div>
          </div>
          <div className="flex lg:flex-none lg:ml-11 lg:mr-0 sm:mt-24 lg:mt-0 mt-16 mx-auto lg:max-w-none max-w-2xl">
            <div className="flex sm:max-w-5xl lg:max-w-none max-w-3xl">
              <Image
                src={headerImage}
                alt="header image"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <Clients />
        </div>
      </div>
      <Features />
      <HomepageContent />
      <Logos />
      <div className="flex flex-col container lg:gap-y-[15rem] gap-y-[7.5rem] sm:px-10 md:px-12 xl:px-0 px-2 mx-auto lg:mt-[7.5rem] mt-16">
        <Articles />
        <Stats />
      </div>
      <Testimonials />
      <Cta />
    </main>
  );
}

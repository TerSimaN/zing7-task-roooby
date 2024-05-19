import Image from "next/image";
import { headerImage, salesImage, serviceImage } from "../../public/assets/images";
import Button from "@/components/ui/Button";
import CheckmarkItem from "@/components/ui/CheckmarkItem";
import Cta from "@/components/sections/Cta";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import Articles from "@/components/sections/Articles";

export default function Home() {
  return (
    <main>
      <div className="bg-roooby-gray-100 overflow-hidden sm:pt-[4.5rem] pt-9">
        <div className="lg:flex container max-lg:px-6 lg:max-xl:px-8 px-0">
          <div className="lg:flex-shrink-0 lg:mx-0 mx-auto lg:max-w-[40rem] max-w-2xl">
            <h1 className="font-inter font-bold text-roooby-blue sm:text-[4rem] text-[3rem] leading-[4.75rem] tracking-[-0.89px] max-sm:text-center">
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
      <div className="flex flex-col container sm:gap-y-[7.5rem] gap-y-16 sm:mt-[7.5rem] mt-20">
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex sm:flex-row flex-col sm:gap-24 gap-12 mt-12 max-sm:px-4">
            <div className="flex flex-col gap-y-4 mt-11">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-16 h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">SALES</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px]">Increase company revenue up to 65%</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-2">
                Automate your sales, marketing, and service in one platform.
                Avoid data leaks and enable consistent messaging.
              </p>
              <CheckmarkItem
                text="Close more deals with single-page contact management"
              />
              <CheckmarkItem
                text="Enjoy one-click calling, call scripts and voicemail automation"
              />
              <CheckmarkItem
                text="Track stages and milestones of your deals to keep the sales process on track"
              />
            </div>
            <Image
              src={salesImage}
              alt="sales image"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex sm:flex-row flex-col sm:gap-24 gap-12 mt-12 max-sm:px-4">
            <div className="bg-marketing-background rounded-xl place-content-end sm:pb-8 max-sm:pb-4 w-full max-w-[555px] h-[555px] max-sm:h-[23.75rem]">
              <div className="flex max-sm:flex-col max-sm:gap-y-2 items-center bg-roooby-blue-dark rounded-xl sm:pl-6 sm:pr-3 max-sm:px-4 max-sm:pt-2 mx-auto sm:w-[28.5rem] sm:h-20 max-sm:h-28">
                <span className="font-inter font-bold text-white text-lg tracking-[-0.25px]">Automate your sales & marketing</span>
                <Button
                  text="Start now"
                  className="bg-roooby-green-400 rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] sm:ml-2 sm:w-[126px] max-sm:w-full h-14"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 mt-[3.25rem]">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-28 h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">MARKETING</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px]">Marketing</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-2">
                Market like the most successful companies in the world
                with Agile CRM's marketing automation software.
              </p>
              <CheckmarkItem
                text="Marketing workflows with an easy drag-and-drop designer"
              />
              <CheckmarkItem
                text="Use our templates to create high converting, mobile responsive landing pages"
              />
              <CheckmarkItem
                text="Integrate social media easily into your marketing campaigns & contact views"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex sm:flex-row flex-col sm:gap-24 gap-12 mt-12 max-sm:px-4">
            <div className="flex flex-col gap-y-4 mt-11">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-[5.5rem] h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">SERVICE</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px]">Help Desk Software</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-2">
                Great customer support separates decent companies from excellent companies.
                A positive customer support experience is a crucially important piece of the customer journey.
              </p>
              <CheckmarkItem
                text="Resolve every issue in the shortest possible time with powerful ticketing features"
              />
              <CheckmarkItem
                text="Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)"
              />
              <CheckmarkItem
                text="Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard"
              />
            </div>
            <Image
              src={serviceImage}
              alt="service image"
            />
          </div>
        </div>
      </div>
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

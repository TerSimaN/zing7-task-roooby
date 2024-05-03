'use client';

import Image from "next/image";
import { deliverImage, employeeImage, fosterOval, gibbsOval, headerImage, phelpsOval, rossOval, salesImage, serviceImage, wilkinsOval } from "../../public/assets/images";
import { asanaLogo, chartsLogo, gearLogo, googleMeetLogo, hubSpotLogo, intercomLogo, microsoftTeamsLogo, slackLogo, zendeskLogo, zoomLogo } from "../../public/assets/logos";
import { quotationMarkIcon } from "../../public/assets/icons";
import Cta from "@/components/layout/Cta";
import Article from "@/components/layout/Article";
import Author from "@/components/ui/Author";
import CheckmarkItem from "@/components/ui/CheckmarkItem";
import Clients from "@/components/layout/Clients";
import Button from "@/components/ui/Button";
import { useState } from "react";
import HeadIcon from "@/components/ui/HeadIcon";
import LaptopIcon from "@/components/ui/LaptopIcon";
import MagicIcon from "@/components/ui/MagicIcon";

const extensions = [
  { imgSrc: gearLogo, imgAlt: 'gear logo' },
  { imgSrc: hubSpotLogo, imgAlt: 'HubSpot logo' },
  { imgSrc: zoomLogo, imgAlt: 'Zoom logo' },
  { imgSrc: googleMeetLogo, imgAlt: 'Google Meet logo' },
  { imgSrc: zendeskLogo, imgAlt: 'Zendesk logo' },
  { imgSrc: intercomLogo, imgAlt: 'Intercom logo' },
  { imgSrc: chartsLogo, imgAlt: 'chart logo' },
  { imgSrc: slackLogo, imgAlt: 'Slack logo' },
  { imgSrc: asanaLogo, imgAlt: 'Asana logo' },
  { imgSrc: microsoftTeamsLogo, imgAlt: 'Microsoft Teams logo' },
]

const cards = [
  {
    iconName: 'headIcon',
    header: 'Lead customers to happiness',
    paragraph: `Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.`
  },
  {
    iconName: 'laptopIcon',
    header: 'Support your support',
    paragraph: `Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.`
  },
  {
    iconName: 'magicIcon',
    header: 'Grow without growing pains',
    paragraph: `Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.`
  }
]

function getIcon(name: string, fill: string) {
  switch (name) {
    case 'headIcon':
      return <HeadIcon fillColor={`${fill}`} />;
    case 'laptopIcon':
      return <LaptopIcon fillColor={`${fill}`} />;
    case 'magicIcon':
      return <MagicIcon fillColor={`${fill}`} />;

    default:
      break;
  }
}

export default function Home() {
  const [isSelected, setSelected] = useState(0);

  return (
    <main>
      <div className="relative bg-roooby-gray-100 sm:pt-[4.5rem] pt-9">
        <div className="flex flex-col container">
          <h1 className="font-inter font-bold text-roooby-blue sm:text-[4rem] text-[3rem] leading-[4.75rem] tracking-[-0.89px] max-sm:text-center max-w-[40rem]">Bringing companies and customers together, anywhere</h1>
          <p className="font-inter font-normal text-lg leading-7 max-sm:text-center max-sm:px-2 mt-6 max-w-[29.75rem]">
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
          <Image
            src={headerImage}
            alt="header image"
            className="sm:absolute sm:top-[4.5rem] sm:right-0 max-sm:mt-12"
          />
          <Clients />
        </div>
      </div>
      <div className="bg-roooby-blue-dark sm:py-[7.5rem] py-16">
        <div className="flex flex-col container gap-y-20">
          <div className="flex sm:flex-row flex-col items-center max-sm:px-4">
            <h1 className="z-10 font-inter font-bold text-white text-5xl max-sm:text-center max-w-[39.5rem]">Here's how Roooby can benefit your business</h1>
            <p className="font-inter font-normal text-white text-lg leading-7 max-sm:text-center mt-9 max-w-[30.5rem]">
              Build more meaningful and lasting relationships — better
              understand their needs, identify new opportunities to
              help, address any problems faster.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-x-2 gap-y-2 max-sm:px-4 sm:h-[27.5rem]">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`flex flex-col ${isSelected === i ? `bg-roooby-yellow -translate-y-3` : `bg-roooby-blue-pale`} rounded-lg px-8 py-16`}
                onClick={() => setSelected(i)}>
                <div className="h-[4.5rem]">
                  {getIcon(card.iconName, `${isSelected === i ? 'black' : 'white'}`)}
                </div>
                <div className={`border-t ${isSelected === i ? `border-black opacity-70` : `opacity-25`} mt-14 h-[1px]`}></div>
                <h1 className={`font-inter font-bold ${isSelected === i ? `` : `text-white`} text-xl tracking-[0.38px] mt-4`}>
                  {card.header}
                </h1>
                <p className={`font-inter font-normal ${isSelected === i ? `` : `text-white`} text-base leading-6 mt-3`}>
                  {card.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      <div className="bg-roooby-gray-100">
        <div className="flex flex-col container sm:py-[7.5rem] py-16 mt-[7.5rem]">
          <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px] max-sm:text-center mx-auto">Over 300+ integrations</h1>
          <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 max-sm:text-center mx-auto mt-3">
            Expand the capabilities of <span className="font-inter font-black text-roooby-gray-600 text-lg leading-7">Roooby</span> with hundreds of apps and integrations
          </span>
          <div className="flex sm:flex-row flex-col max-sm:items-center flex-wrap gap-2 sm:mt-[4.5rem] mt-9">
            {extensions.map((extension, i) => (
              <Image
                src={extension.imgSrc}
                alt={extension.imgAlt}
                key={i}
              />
            ))}
          </div>
          <Button
            className="font-inter font-medium text-2xl tracking-[0.51px] mx-auto mt-[4.5rem]"
            text="See all apps and extensions"
            hasIcon="true"
            iconColor="fill-roooby-blue-dark"
          />
        </div>
      </div>
      <div className="flex flex-col container sm:gap-y-[15rem] gap-y-[7.5rem] mx-auto sm:mt-[7.5rem] mt-16 max-w-[71.25rem]">
        <div className="flex flex-col">
          <div className="flex sm:flex-row flex-col justify-between sm:items-end max-sm:items-center">
            <h1 className="font-inter font-bold sm:text-[4rem] text-5xl leading-[4.75rem] tracking-[-0.89px] max-sm:text-center">What’s new at Roooby?</h1>
            <Button
              className="font-inter font-medium text-xl tracking-[0.43px] max-sm:px-40 max-sm:w-full"
              text="See all"
              hasIcon="true"
              iconColor="fill-roooby-green-400"
              iconMargin="-ml-1"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-x-7 max-sm:gap-y-14 max-sm:px-4 sm:mt-[4.5rem] mt-10">
            <Article
              label="Service"
              imgSrc="/assets/images/deliver-image.svg"
              imgAlt="deliver image"
              imgWidth="555"
              header="How To Deliver a Successful Product Launch"
              date="05 Sep 2024"
              author="Joshua Nash"
              className="text-3xl leading-10 tracking-[-0.44px] max-w-[34.75rem]"
            />
            <Article
              label="Service"
              imgSrc="/assets/images/employee-image.svg"
              imgAlt="employee image"
              imgWidth="555"
              header="What Makes an Authentic Employee Profile, and Why Does It Matter?"
              date="07 Sep 2023"
              author="Ivan Neshev"
              className="text-3xl leading-10 tracking-[-0.44px] max-w-[34.75rem]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px] max-sm:text-center">Real-life results and revenue</h1>
          <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 max-sm:text-center mt-3">See how companies like yours have smashed their sales success goals</span>
          <div className="flex flex-col sm:mt-[4.5rem] mt-12 max-sm:px-4">
            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
            <div className="flex sm:flex-row flex-col gap-x-[9.25rem] mt-12">
              <div className="flex flex-col sm:gap-y-6 max-sm:gap-y-2">
                <h1 className="font-inter font-bold text-7xl leading-[4.5rem] tracking-[-1px]">$2.5 M</h1>
                <span className="font-inter font-bold text-xl">Generate sales</span>
              </div>
              <div className="flex flex-col gap-y-8 max-sm:mt-6">
                <p className="font-inter font-medium text-3xl leading-10 tracking-[-0.44px] w-full max-w-[47rem]">
                  Using Кирилица CRM is one of the best decisions we’ve ever made.
                  We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.
                </p>
                <Author
                  imgSrc={fosterOval}
                  imgAlt="foster oval"
                  authorName="Nellie Foster"
                  authorInfo="Founder & CEO, Foster Business Strategies"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:mt-[4.5rem] mt-12 max-sm:px-4">
            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
            <div className="flex sm:flex-row flex-col gap-x-[9.25rem] mt-12">
              <div className="flex flex-col sm:gap-y-6 max-sm:gap-y-2">
                <h1 className="font-inter font-bold text-7xl leading-[4.5rem] tracking-[-1px]">45%</h1>
                <span className="font-inter font-bold text-xl">Grew revenue</span>
              </div>
              <div className="flex flex-col gap-y-8 ml-auto max-sm:mt-6">
                <p className="font-inter font-medium text-3xl leading-10 tracking-[-0.44px] w-full max-w-[47rem]">
                  Yoora is created for sales people. It’s the kind of software that just works.
                  I don’t have to try to make it work. It already does. It’s just perfect.
                </p>
                <Author
                  imgSrc={gibbsOval}
                  imgAlt="gibbs oval"
                  authorName="Lawrence Gibbs"
                  authorInfo="Marketing Director"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-roooby-gray-100 sm:mt-[11.25rem] mt-20">
        <div className="flex flex-col max-sm:items-center container sm:py-[7.5rem] max-sm:py-16">
          <div className="flex sm:flex-row flex-col justify-between sm:items-end max-sm:items-center">
            <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] max-sm:text-center w-full max-w-[35.5rem]">We love our Customers and They love us too</h1>
            <Button
              className="font-inter font-medium text-xl tracking-[0.43px] max-sm:px-40 max-sm:mt-4 max-sm:w-full"
              text="See all"
              hasIcon="true"
              iconColor="fill-roooby-green-400"
              iconMargin="-ml-1"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-x-7 max-sm:gap-y-14 sm:mt-[4.5rem] mt-9">
            <div className="flex flex-col max-w-[22.5rem]">
              <Image
                src={quotationMarkIcon}
                alt="quotation mark icon"
              />
              <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
              <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                The best thing we love about Yoora is it does two-way sync with Google Apps.
                It has helped us to better organize and keep everything on track.
              </p>
              <Author
                imgSrc={rossOval}
                imgAlt="ross oval"
                authorName="Lola Ross"
                authorInfo="Marketing Director"
              />
            </div>
            <div className="flex flex-col max-w-[22.5rem]">
              <Image
                src={quotationMarkIcon}
                alt="quotation mark icon"
              />
              <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
              <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                It has made our sales department more effective and efficient.
                It’s easy to use and it’s constantly updated.
              </p>
              <Author
                imgSrc={phelpsOval}
                imgAlt="phelps oval"
                authorName="Daisy Phelps"
                authorInfo="Speaker and Author, Lifeiseasy"
              />
            </div>
            <div className="flex flex-col max-w-[22.5rem]">
              <Image
                src={quotationMarkIcon}
                alt="quotation mark icon"
              />
              <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
              <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!
              </p>
              <Author
                imgSrc={wilkinsOval}
                imgAlt="wilkins oval"
                authorName="Andrew Wilkins"
                authorInfo="Managing Director, Nirma Studio"
              />
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </main>
  );
}

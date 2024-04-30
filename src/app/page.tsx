import Image from "next/image";
import { deliverImage, employeeImage, fosterOval, gibbsOval, headerImage, marketingImage, phelpsOval, rossOval, salesImage, serviceImage, wilkinsOval } from "../../public/assets/images";
import { asanaLogo, chartsLogo, gearLogo, googleMeetLogo, hubSpotLogo, intercomLogo, microsoftTeamsLogo, slackLogo, zendeskLogo, zoomLogo } from "../../public/assets/logos";
import { headIcon, laptopIcon, magicIcon, quotationMarkIcon } from "../../public/assets/icons";
import Cta from "@/components/layout/Cta";
import Article from "@/components/layout/Article";
import Author from "@/components/ui/Author";
import CheckmarkItem from "@/components/ui/CheckmarkItem";
import Clients from "@/components/layout/Clients";
import Button from "@/components/ui/Button";

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
    iconSrc: headIcon,
    iconAlt: 'head icon',
    header: 'Lead customers to happiness',
    paragraph: `Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.`
  },
  {
    iconSrc: laptopIcon,
    iconAlt: 'laptop icon',
    header: 'Support your support',
    paragraph: `Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.`
  },
  {
    iconSrc: magicIcon,
    iconAlt: 'magic icon',
    header: 'Grow without growing pains',
    paragraph: `Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.`
  }
]

export default function Home() {
  return (
    <main>
      <div className="relative bg-roooby-gray-100 pt-[4.5rem]">
        <div className="flex flex-col container">
          <h1 className="font-inter font-bold text-roooby-blue text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-w-[40rem]">Bringing companies and customers together, anywhere</h1>
          <p className="font-inter font-normal text-lg leading-7 max-w-[29.75rem] mt-6">
            An awesome & powefull tools for your business,
            increase business revenue with enterprise-grade links
            built to acquire and engage cutomers.
          </p>
          <div className="flex flex-col gap-y-3 mt-16">
            <form>
              <div className="flex flex-row justify-between items-center bg-white border border-roooby-gray-200 rounded-xl pl-6 pr-2 py-2 max-w-[28.5rem]">
                <input className="focus:outline-none placeholder:font-inter placeholder:font-medium placeholder:text-lg placeholder:tracking-[-0.25px] placeholder:text-roooby-gray-300" placeholder="Enter your email" type="email" name="email" id="email" />
                <button className="bg-roooby-blue rounded-lg font-inter font-bold text-white text-lg tracking-[-0.25px] w-36 h-14" type="submit">Try For Free</button>
              </div>
            </form>
            <span className="font-inter font-normal text-roooby-gray-500 text-sm pl-4">Full access. No credit card required.</span>
          </div>
          <Clients />
        </div>
        <Image
          src={headerImage}
          alt="header image"
          className="absolute top-[4.5rem] right-0"
        />
      </div>
      <div className="bg-roooby-blue py-[7.5rem]">
        <div className="flex flex-col container gap-y-20">
          <div className="flex flex-row items-center">
            <h1 className="z-10 font-inter font-bold text-white text-5xl max-w-[39.5rem]">Here's how Roooby can benefit your business</h1>
            <p className="font-inter font-normal text-white text-lg leading-7 mt-9 max-w-[30.5rem]">
              Build more meaningful and lasting relationships — better
              understand their needs, identify new opportunities to
              help, address any problems faster.
            </p>
          </div>
          <div className="flex flex-row gap-x-2">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col bg-roooby-yellow rounded-lg px-8 py-16">
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  className="h-[4.5rem]"
                />
                <div className="border-t border-black mt-14 h-[1px]"></div>
                <h1 className="font-inter font-bold text-xl tracking-[0.38px] mt-4">{card.header}</h1>
                <p className="font-inter font-normal text-base leading-6 mt-3">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col container gap-y-[7.5rem] bg-white mt-[7.5rem]">
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex flex-row gap-24 mt-12">
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
          <div className="flex flex-row gap-24 mt-12">
            <Image
              src={marketingImage}
              alt="marketing image"
            />
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
          <div className="flex flex-row gap-24 mt-12">
            <div className="flex flex-col gap-y-4 mt-20">
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
        <div className="flex flex-col container py-[7.5rem] mt-[7.5rem]">
          <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px] mx-auto">Over 300+ integrations</h1>
          <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 mx-auto mt-3">
            Expand the capabilities of <span className="font-inter font-black text-roooby-gray-600 text-lg leading-7">Roooby</span> with hundreds of apps and integrations
          </span>
          <div className="flex flex-row flex-wrap gap-2 mt-[4.5rem]">
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
            iconColor="fill-roooby-blue"
          />
        </div>
      </div>
      <div className="flex flex-col container gap-y-[15rem] bg-white mx-auto mt-[7.5rem] max-w-[71.25rem]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-end">
            <h1 className="font-inter font-bold text-[4rem] leading-[4.75rem] tracking-[-0.89px]">What’s new at Roooby?</h1>
            <Button
              className="font-inter font-medium text-xl tracking-[0.43px]"
              text="See all"
              hasIcon="true"
              iconColor="fill-roooby-green-400"
              iconMargin="-ml-1"
            />
          </div>
          <div className="flex flex-row gap-x-7 mt-[4.5rem]">
            <Article
              label="Service"
              imgSrc={deliverImage}
              imgAlt="deliver image"
              imgWidth="555"
              header="How To Deliver a Successful Product Launch"
              date="05 Sep 2024"
              author="Joshua Nash"
              className="text-3xl leading-10 tracking-[-0.44px] max-w-[34.75rem]"
            />
            <Article
              label="Service"
              imgSrc={employeeImage}
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
          <h1 className="font-inter font-bold text-5xl leading-[4.25rem] tracking-[-0.67px]">Real-life results and revenue</h1>
          <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 mt-3">See how companies like yours have smashed their sales success goals</span>
          <div className="flex flex-col mt-[4.5rem]">
            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
            <div className="flex flex-row gap-x-[9.25rem] mt-12">
              <div className="flex flex-col gap-y-6">
                <h1 className="font-inter font-bold text-7xl leading-[4.5rem] tracking-[-1px]">$2.5 M</h1>
                <span className="font-inter font-bold text-xl">Generate sales</span>
              </div>
              <div className="flex flex-col gap-y-8">
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
          <div className="flex flex-col mt-[4.5rem]">
            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
            <div className="flex flex-row gap-x-[9.25rem] mt-12">
              <div className="flex flex-col gap-y-6">
                <h1 className="font-inter font-bold text-7xl leading-[4.5rem] tracking-[-1px]">45%</h1>
                <span className="font-inter font-bold text-xl">Grew revenue</span>
              </div>
              <div className="flex flex-col gap-y-8 ml-auto">
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
      <div className="bg-roooby-gray-100 mt-[11.25rem]">
        <div className="flex flex-col container py-[7.5rem]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] w-full max-w-[35.5rem]">We love our Customers and They love us too</h1>
            <Button
              className="font-inter font-medium text-xl tracking-[0.43px]"
              text="See all"
              hasIcon="true"
              iconColor="fill-roooby-green-400"
              iconMargin="-ml-1"
            />
          </div>
          <div className="flex flex-row gap-x-7 mt-[4.5rem]">
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

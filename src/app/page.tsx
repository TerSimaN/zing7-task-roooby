import Image from "next/image";
import { heroImage, marketingImage, salesImage, serviceImage } from "../../public/assets/images";
import { amazonLogo, atlassianLogo, cannonLogo, googleLogo, walmartLogo } from "../../public/assets/logos";
import { headIcon, laptopIcon, magicIcon } from "../../public/assets/icons";

const logos = [
  { imgSrc: googleLogo, imgAlt: 'Google logo' },
  { imgSrc: atlassianLogo, imgAlt: 'Atlassian logo' },
  { imgSrc: cannonLogo, imgAlt: 'Cannon logo' },
  { imgSrc: walmartLogo, imgAlt: 'Walmart logo' },
  { imgSrc: amazonLogo, imgAlt: 'Amazon logo' },
]

const cards = [
  {
    icon: {
      iconSrc: headIcon,
      iconAlt: 'head icon',
      iconWidth: 63,
      iconHeight: 72
    },
    header: 'Lead customers to happiness',
    paragraph: `Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.`
  },
  {
    icon: {
      iconSrc: laptopIcon,
      iconAlt: 'laptop icon',
      iconWidth: 72,
      iconHeight: 56
    },
    header: 'Support your support',
    paragraph: `Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.`
  },
  {
    icon: {
      iconSrc: magicIcon,
      iconAlt: 'magic icon',
      iconWidth: 72,
      iconHeight: 72
    },
    header: 'Grow without growing pains',
    paragraph: `Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.`
  }
]

export default function Home() {
  return (
    <main className="col-span-12">
      <div className="flex flex-col">
        <h1 className="font-inter font-bold text-roooby-blue text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-w-[40rem]">Bringing companies and customers together, anywhere</h1>
        <p className="font-inter font-normal text-lg leading-7 max-w-[29.75rem] mt-6">
          An awesome & powefull tools for your business,
          increase business revenue with enterprise-grade links
          built to acquire and engage cutomers.
        </p>
        <div className="mt-16">
          <form>Add a form</form>
          <span className="font-inter font-normal text-roooby-gray-500 text-sm">Full access. No credit card required.</span>
        </div>
      </div>
      <Image
        src={heroImage}
        alt="hero image"
        width={482}
        height={675}
        className="absolute top-32 right-0"
      />
      <div className="flex flex-row items-center justify-between mt-32">
        <span className="font-inter font-medium text-base tracking-[-0.22px]">Trusted by 1,000+ customers</span>
        {logos.map((logo, i) => (
          <Image
            src={logo.imgSrc}
            alt={logo.imgAlt}
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-col bg-roooby-blue px-[9.5rem] py-[7.5rem] mt-[5.25rem] h-[55rem]">
        <div className="flex flex-row items-center">
          <h1 className="font-inter font-bold text-white text-5xl">Here's how Roooby can benefit your business</h1>
          <p className="font-inter font-normal text-white text-lg leading-7">
            Build more meaningful and lasting relationships — better
            understand their needs, identify new opportunities to
            help, address any problems faster.
          </p>
        </div>
        <div className="flex flex-row gap-2 h-[27.5rem]">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col bg-roooby-yellow rounded-lg px-8 py-16">
              <Image
                src={card.icon.iconSrc}
                alt={card.icon.iconAlt}
                width={card.icon.iconWidth}
                height={card.icon.iconHeight}
              />
              <div className="border-t border-black mt-14 h-[1px]"></div>
              <h1 className="font-inter font-bold text-xl tracking-[0.38px] mt-4">{card.header}</h1>
              <p className="font-inter font-normal text-base leading-6 mt-3">{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[7.5rem] bg-white mt-[7.5rem]">
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex flex-row gap-24 mt-12">
            <div className="flex flex-col mt-11">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-16 h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">SALES</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] mt-4">Increase company revenue up to 65%</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-6">
                Automate your sales, marketing, and service in one platform.
                Avoid data leaks and enable consistent messaging.
              </p>
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
            <div className="flex flex-col mt-[3.25rem]">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-28 h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">MARKETING</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] mt-4">Marketing</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-6">
                Market like the most successful companies in the world
                with Agile CRM's marketing automation software.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-t border-roooby-gray-300 h-[1px]"></div>
          <div className="flex flex-row gap-24 mt-12">
            <div className="flex flex-col mt-20">
              <div className="flex items-center justify-center rounded bg-roooby-yellow w-[5.5rem] h-8">
                <span className="font-inter font-bold text-roooby-gray-500 text-sm tracking-[1.4px]">SERVICE</span>
              </div>
              <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] mt-4">Help Desk Software</h1>
              <p className="font-inter font-normal text-lg leading-7 mt-6">
                Great customer support separates decent companies from excellent companies.
                A positive customer support experience is a crucially important piece of the customer journey.
              </p>
            </div>
            <Image
              src={serviceImage}
              alt="service image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

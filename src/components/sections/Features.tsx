'use client';

import { useState } from "react";
import HeadIcon from "../ui/HeadIcon";
import LaptopIcon from "../ui/LaptopIcon";
import MagicIcon from "../ui/MagicIcon";

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

const Features = () => {
  const [isSelected, setSelected] = useState(0);

  return (
    <div className="bg-roooby-blue-dark lg:py-[7.5rem] py-16">
      <div className="flex flex-col container gap-y-20">
        <div className="flex lg:flex-row flex-col items-center sm:gap-y-6 gap-y-9 sm:px-20 px-4">
          <h1 className="lg:z-10 max-lg:self-start font-inter font-bold text-white text-5xl max-sm:text-center max-w-[39.5rem]">
            Here's how Roooby can benefit your business
          </h1>
          <p className="max-lg:self-end font-inter font-normal text-white text-lg leading-7 max-sm:text-center lg:mt-9 max-w-[30.5rem]">
            Build more meaningful and lasting relationships — better
            understand their needs, identify new opportunities to
            help, address any problems faster.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col sm:gap-x-2 gap-y-3 sm:px-20 lg:px-0 px-4 lg:h-[27.5rem]">
          {cards.map((card, i) => (
            <div key={i}
              className={
                `flex flex-col
                ${isSelected === i ? `bg-roooby-yellow -translate-y-3` : `bg-roooby-blue-pale`}
                rounded-lg sm:px-16 lg:px-8 px-8 sm:py-8 lg:py-16 py-16 cursor-pointer`}
              onClick={() => setSelected(i)}>
              <div className="h-[4.5rem]">
                {getIcon(card.iconName, `${isSelected === i ? 'black' : 'white'}`)}
              </div>
              <h1 className={`border-t ${isSelected === i ? `border-black border-opacity-70` : `border-white border-opacity-25 text-white`}
              font-inter font-bold text-xl tracking-[0.38px] pt-4 sm:mt-10 lg:mt-14 mt-14`}>
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
  )
}

export default Features
import Image from "next/image"

const Article = ({ label = '', imgSrc = '', imgAlt = '', header = '', textSize = '', lineHeight = '', letterSpacing = '', date = '', author = '', width = '' }) => {
  return (
    <article className={`flex flex-col max-w-[${(width === '') ? `22.5rem` : width}]`}>
        <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">{label}</span>
        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
        <Image
            src={imgSrc}
            alt={imgAlt}
            className="mt-6"
        />
        <h1 className={`font-inter font-bold text-[${(textSize === '') ? `1.5rem` : textSize}] leading-[${(lineHeight === '') ? `34px` : lineHeight}] tracking-[${(letterSpacing === '') ? `-0.33px` : letterSpacing}] mt-4 max-w-[34.75rem]`}>{header}</h1>
        <span className="font-inter font-medium text-base mt-6">
            {date},<span className="font-inter font-medium text-roooby-gray-300 text-base">   by {author}</span>
        </span>
    </article>
  )
}

export default Article
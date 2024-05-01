import Image from "next/image"

const Article = ({ label = '', imgSrc = '', imgAlt = '', imgWidth = '', imgHeight = '', header = '', date = '', author = '', className = '' }) => {
  let classArr = className.split(' ');
  let maxW: string = '';
  for (const el of classArr) {
    if (el.includes('max-w-')) {
      maxW = el;
      break;
    }
  }

  return (
    <article className={`flex flex-col ${((className !== '') && (maxW !== '')) ? `${maxW}` : `max-w-[22.5rem]`}`}>
      <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">{label}</span>
      <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={`${(imgWidth !== '') ? parseInt(imgWidth) : 360}`}
        height={`${(imgHeight !== '') ? parseInt(imgHeight) : 240}`}
        className="mt-6"
      />
      <h1 className={`font-inter font-bold ${(className !== '') ? `${className}` : `text-2xl leading-[34px] tracking-[-0.33px]`} mt-4 max-w-[34.75rem]`}>{header}</h1>
      <span className="font-inter font-medium text-base mt-6">{date}, <span className="font-inter font-medium text-roooby-gray-300 text-base">by {author}</span></span>
    </article>
  )
}

export default Article
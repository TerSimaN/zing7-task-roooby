import Image from "next/image"

const Slug = ({ className = '', label = '', header = '', date = '', author = '', imgSrc = '', imgAlt = '', imgWidth = '', imgHeight = '' }) => {
    return (
        <div className="bg-roooby-gray-100 pt-[4.5rem]">
            <div className="flex flex-col items-center gap-y-12 container">
                <div className="flex flex-col max-w-[46.75rem]">
                    <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">{label}</span>
                    <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                    <h1 className={`font-inter font-bold ${(className !== '') ? `${className}` : `text-2xl leading-[34px] tracking-[-0.33px]`} mt-4`}>{header}</h1>
                    <span className="font-inter font-medium text-base mt-6">{date}, <span className="text-roooby-gray-300">by {author}</span></span>
                </div>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={`${(imgWidth !== '') ? parseInt(imgWidth) : 360}`}
                    height={`${(imgHeight !== '') ? parseInt(imgHeight) : 240}`}
                />
            </div>
        </div>
    )
}

export default Slug
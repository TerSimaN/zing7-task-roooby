import Image from "next/image"

const Author = ({ imgSrc = '', imgAlt = '', authorName = '', authorInfo = '' }) => {
    return (
        <div className="flex flex-row">
            <Image
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="flex flex-col gap-y-1 ml-3">
                <h1 className="font-inter font-bold text-base">{authorName}</h1>
                <span className="font-inter font-normal text-roooby-gray-500 text-base">{authorInfo}</span>
            </div>
        </div>
    )
}

export default Author
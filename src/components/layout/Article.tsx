import Image from "next/image"

const Article = () => {
  return (
    <article className="flex flex-col max-w-[22.5rem]">
        <span className="font-inter font-bold text-roooby-gray-300 text-sm tracking-[1.4px]">NEWS</span>
        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
        <Image
            src={'imageSrc'}
            alt={'imageAlt'}
            width={361}
            height={241}
            className="mt-6"
        />
        <h1 className="font-inter font-bold text-2xl leading-9 tracking-[-0.33px] mt-4">Learn from My Mistakes: 7 Digital Course Pitfalls to Skip</h1>
        <span className="font-inter font-medium text-base mt-6">
            29 Jun 2024,<span className="font-inter font-medium text-roooby-gray-300 text-base">   by Joshua Nash</span>
        </span>
    </article>
  )
}

export default Article
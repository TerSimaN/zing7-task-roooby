import Image from "next/image";
import Link from "next/link";

const Article = (props: {
  postId?: number,
  articleAtr: {
    label: string,
    imgSrc: string,
    imgAlt: string,
    imgWidth?: number,
    imgHeight?: number,
    header: string,
    date: string,
    author: string
  },
  classNameAtr: {
    headingAtr?: string,
    articleMaxWidth?: string
  },
  text?: string
}) => {

  let searchParams = new URLSearchParams();
  const queryParams: string[][] = [
    ["label", props.articleAtr.label],
    ["imgSrc", props.articleAtr.imgSrc],
    ["imgAlt", props.articleAtr.imgAlt],
    ["header", props.articleAtr.header],
    ["date", props.articleAtr.date],
    ["author", props.articleAtr.author]
  ];

  if (!props.postId) {
    searchParams = new URLSearchParams(queryParams);
  }

  return (
    <article
      className={
        `relative flex flex-col 
        ${props.classNameAtr.articleMaxWidth ? `${props.classNameAtr.articleMaxWidth}` : `xl:max-w-[22.5rem] max-w-80`}`
      }>
      <span className="border-b border-roooby-gray-300 font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px] pb-4">
        {props.articleAtr.label}
      </span>
      <Image
        src={props.articleAtr.imgSrc}
        alt={props.articleAtr.imgAlt}
        width={`${props.articleAtr.imgWidth ? props.articleAtr.imgWidth : 360}`}
        height={`${props.articleAtr.imgHeight ? props.articleAtr.imgHeight : 240}`}
        className="mt-6"
      />
      <h1 className={`font-inter font-bold ${props.classNameAtr.headingAtr ? `${props.classNameAtr.headingAtr}` : `text-2xl leading-[34px] tracking-[-0.33px]`} mt-4 max-w-[34.75rem]`}>
        <Link href={{
          pathname: `/blog/${props.postId ? props.postId : props.articleAtr.label}`,
          query: searchParams.toString()
        }}>
          <span className="absolute inset-0"></span>
          {props.articleAtr.header}
        </Link>
      </h1>
      <p className={`${props.text ? `` : `hidden`} font-inter font-normal text-md leading-[34px] tracking-[-0.33px]`}>
        {props.text}
      </p>
      <span className="font-inter font-medium text-base mt-6">{props.articleAtr.date},
        <span className="font-inter font-medium text-roooby-gray-300 text-base"> by {props.articleAtr.author}</span>
      </span>
    </article>
  )
}

export default Article
import Head from 'next/head';
import Link from 'next/link';

export default function Article({
  hero,
  title,
  tags,
  date,
  body,
  img,
  link,
  linktxt,
}) {
  return (
    <>
      <img className="w-11/12 sm:w-10/12" src={hero} />
      <div className="w-10/12 sm:p-6 pt-8 sm:pt-16 pb-8 sm:pb-16">
        <div>
          <h1 className="text-4xl font-medium tracking-widest pb-8 sm:pb-12">
            {title}
          </h1>
        </div>
        <h6 className="text-base font-medium pb-1">TECH</h6>
        <ul className="flex flex-col sm:flex-row justify-between text-base font-light pb-8 sm:pb-12">
          {tags.map((tag) => (
            <li key={tag.toString()} className="text-sm pb-1">
              {tag}
            </li>
          ))}
        </ul>
        <h6 className="text-base font-medium pb-1">ABOUT THE PROJECT</h6>
        <p className="text-sm font-light pb-4">{date}</p>
        <p className="text-base font-light pb-6">{body}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-start gap-4 md:gap-8 pb-12">
          {img.map((img) => (
            <img
              key={img.toString()}
              className="flex w-11/12 md:w-8/12 lg:w-5/12"
              src={img}
            ></img>
          ))}
        </div>
        {link && (
          <Link
            className="underline text-base font-medium hidden lg:block"
            href={link}
          >
            {linktxt}
          </Link>
        )}

        <Link
          className="underline text-base font-medium block sm:hidden"
          href="/"
        />
      </div>
    </>
  );
}

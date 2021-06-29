import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../components/layout";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex flex-wrap items-center justify-start">
        <Link href="/projects/color-generator">
          <a className="h-56 w-56 sm:h-72 sm:w-72 xl:h-96 xl:w-96 bg-yellow-100 flex flex-row justify-center items-center">
            <p className="text-xl text-yellow-900">color generator</p>
          </a>
        </Link>
        <Link href="/projects/portfolio-website">
          <a className="h-56 w-56 sm:h-72 sm:w-72 xl:h-96 xl:w-96 flex flex-row justify-center items-center bg-pink-100">
            <p className="text-xl text-pink-900">portfolio website</p>
          </a>
        </Link>
        <Link href="/about">
          <a className="h-56 w-56 sm:h-72 sm:w-72 xl:h-96 xl:w-96 flex flex-row justify-center items-center  bg-purple-100">
            <p className="text-xl text-purple-900">about</p>
          </a>
        </Link>
        <Link href="/projects/house-studio">
          <a className="h-56 w-56 sm:h-72 sm:w-72 xl:h-96 xl:w-96 flex flex-row justify-center items-center  bg-blue-100">
            <p className="text-xl text-blue-900">house studio</p>
          </a>
        </Link>
      </div>
    </>
  );
}

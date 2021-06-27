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

      <div className="flex flex-wrap">
        <Link href="/projects/project-one">
          <a className="h-96 w-96  bg-yellow-100 flex flex-row justify-center items-center">
            <p className="text-xl">house studio</p>
          </a>
        </Link>
        <Link href="/projects/project-two">
          <a className="h-96 w-96 flex flex-row justify-center items-center bg-pink-100">
            <p className="text-xl">portfolio website</p>
          </a>
        </Link>
        <Link href="/about">
          <a className="h-96 w-96 flex flex-row justify-center items-center  bg-purple-100">
            <p className="text-xl">about</p>
          </a>
        </Link>
        {/* <Link href="/projects/project-three">
          <a className="h-96 w-96 flex flex-row justify-center items-center  bg-blue-100">
            <p className="text-xl">future</p>
          </a>
        </Link> */}
      </div>
    </>
  );
}

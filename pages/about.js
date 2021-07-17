import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faReact,
  faFigma,
  faGit,
  faNpm,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="w-11/12 sm:w-10/12 flex flex-col lg:flex-row items-start lg:items-center lg:justify-items-center mb-8">
        <img
          className="w-full sm:6/12 md:w-5/12 xl:w-4/12 2xl:w-3/12"
          src="/images/profile_pic.png"
        ></img>
        <div className="w-full lg:w-8/12 lg:pl-10 lg:pr-10 lg:pb-10 pt-16">
          <h1 className="text-2xl sm:text-4xl font-medium	tracking-widest pb-8">
            Hey there! I'm Emi.
          </h1>
          <p className="text-base font-light">
            I'm a designer and developer. After falling in love with coding in
            high school, I took a small detour until I started working in an IT
            company. Since then I have worked on designing websites, revising my
            knowledge and improving upon it with courses and through practice.{" "}
          </p>
        </div>
      </div>
      <div className="w-10/12 pt-4 md:pt-16 pb-16">
        <h6 className="text-base font-medium pb-4">
          Technologies I've been working with:
        </h6>
        <ul className="flex flex-row flex-wrap text-base font-light items-start justify-start gap-8 pb-12">
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li className="h-6 w-10 pb-1">
            <FontAwesomeIcon icon={faNode} />
          </li>
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faGit} />
          </li>
          <li className="h-6 w-8 pb-1">
            <FontAwesomeIcon icon={faNpm} />
          </li>
          <li className="h-6 w-6 pb-1">
            <FontAwesomeIcon icon={faYarn} />
          </li>
          <li className="h-6 w-5 pb-1">
            <FontAwesomeIcon icon={faFigma} />
          </li>
        </ul>
        <Link className="pb-2" href="/">
          <a className="underline text-base font-medium block sm:hidden">
            back
          </a>
        </Link>
      </div>
    </>
  );
}

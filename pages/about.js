import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="w-11/12 flex flex-col lg:flex-row items-start md:items-center md:justify-items-center">
        <img
          className="w-8/12 sm:6/12 md:w-4/12 "
          src="/images/profile_pic.png"
        ></img>
        <div className="w-11/12 lg:w-8/12 lg:p-10 pt-16">
          <h1 className="text-4xl font-medium	tracking-widest pb-12">
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
      <div className="w-11/12 md:p-4 pt-16 pb-16">
        <h6 className="text-base font-medium pb-4">
          Technologies I've been working with:
        </h6>
        <ul className="flex flex-col lg:flex-row justify-between text-base font-light pb-12">
          <li className="pb-1">HTML/CSS</li>
          <li className="pb-1">JavaScript</li>
          <li className="pb-1">TailwindCSS</li>
          <li className="pb-1">React</li>
          <li className="pb-1">Next.js</li>
          <li className="pb-1">Node.js</li>
        </ul>
        <Link className="pb-4" href="/">
          <a className="underline text-base font-medium">back</a>
        </Link>
      </div>
    </>
  );
}

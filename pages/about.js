import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div>
        <img
          className="w-11/12"
          src="https://images.unsplash.com/photo-1603665185806-510f5376ce99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ></img>
        <div className="w-11/12 p-6 pt-16 pb-16">
          <h1 className="text-4xl font-bold	pb-12">Hey there! I'm Emi.</h1>
          <p className="text-base pb-6">
            I'm a designer and developer. After falling in love with coding in
            high school, I took a small detour until I started working in an IT
            company. Since then I have worked on designing websites, revising my
            knowledge and improving upon it with courses and through practice.{" "}
          </p>
          <h6 className="text-base font-semibold pb-4">
            Technologies I've been working with:
          </h6>
          <ul className="flex flex-col sm:flex-row justify-between text-base font-light pb-12">
            <li className="pb-1">HTML/CSS</li>
            <li className="pb-1">JavaScript</li>
            <li className="pb-1">TailwindCSS</li>
            <li className="pb-1">React</li>
            <li className="pb-1">Next.js</li>
            <li className="pb-1">Node.js</li>
          </ul>
          <Link className="text-base font-bold pb-4" href="/">
            <a className="underline">back</a>
          </Link>
        </div>
      </div>
    </>
  );
}

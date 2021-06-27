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
          <h1 className="text-4xl font-bold	pb-12">ABOUT</h1>
          <p className="text-base pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link className="text-base font-bold pb-4" href="/">
            <a className="underline">back</a>
          </Link>
        </div>
      </div>
    </>
  );
}

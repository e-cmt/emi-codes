import Head from "next/head";
import { siteTitle } from "../components/layout";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex flex-wrap">
        <div className="h-96 w-96  bg-yellow-100 flex flex-row justify-center items-center">
          <p className="">Boooo</p>
        </div>
        <div className="h-96 w-96  bg-pink-100">
          <div className="">Booo2</div>
        </div>
        <div className="h-96 w-96  bg-purple-100">
          <div className="">Booo3</div>
        </div>
        <div className="h-96 w-96  bg-blue-100">
          <div className="">Booo4</div>
        </div>
      </div>
    </>
  );
}

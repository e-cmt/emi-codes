import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../../components/layout";
import { useRouter } from "next/router";

const One = {
  id: "project-one",
  title: "HOUSE STUDIO",
  tags: ["HTML", "CSS", "React", "Next.JS", "TailwindCSS", "Git"],
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

const Two = {
  id: "project-two",
  title: "PORTFOLIO WEBSITE",
  tags: ["HTML", "CSS", "React", "Next.JS", "TailwindCSS", "Git"],
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "/images/Portfolio Wireframes.png",
};

// const Three = {
//   id: "project-three",
//   title: "FUTURE",
//   text:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   img:
//     "https://images.unsplash.com/photo-1565099999544-27eca1cf8d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
// };

const ProjectList = [One, Two];
function ProjectLayout({ id }) {
  const project = ProjectList.find((element) => element.id === id);
  if (!project) {
    return null;
  }
  return (
    <>
      <img className="w-11/12" src={project.img}></img>
      <div className="w-11/12 p-6 pt-16 pb-16">
        <div className="">
          <h1 className="text-4xl font-bold	pb-12">{project.title}</h1>
        </div>
        <h6 className="text-base font-bold pb-4">TECH</h6>
        <ul className="flex flex-row justify-between text-base pb-12">
          {project.tags.map((tag) => (
            <li className="text-sm pb-1">{tag}</li>
          ))}
        </ul>
        <h6 className="text-base font-bold pb-4">ABOUT THE PROJECT</h6>
        <p className="text-base pb-6">{project.text}</p>
        <Link className="text-base font-bold pb-4" href="/">
          <a className="underline">back</a>
        </Link>
      </div>
    </>
  );
}

export default function Project() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ProjectLayout id={id} />
    </>
  );
}

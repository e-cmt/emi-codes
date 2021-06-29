import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../../components/layout";
import { useRouter } from "next/router";

const One = {
  id: "color-generator",
  title: "COLOR GENERATOR",
  tags: ["HTML", "CSS", "JavaScript", "Git"],
  text: "While trying to mix design and code, I created a color generator. The background color is randomly generated as you click. On the right side of the screen you can save up to 4 colors from the generator. In the upper left corner you can find an Easter Egg where you have your entire screen filled with smaller colored squares. On the rainbow page the colors of the squares will refresh just like the background of the homepage. The website also includes a custom circular cursor.",
  hero: "/images/rainbow_hero.png",
  img: ["/images/colorful.png", "/images/rainbow.png"],
};

const Two = {
  id: "portfolio-website",
  title: "PORTFOLIO WEBSITE",
  tags: ["AdobeXD", "HTML", "CSS", "React", "Next.JS", "TailwindCSS", "Git"],
  text: "After playing with vanilla JavaScript, I decided to try my hand at using a library. React was a great choice because of the focus on reusable components. After creating the wireframes in AdobeXD, I moved on to coding with Next.js and React. To help in creating a cohesive modern look, I worked with TailwindCSS.",
  hero: "/images/portfolio_hero.png",
  img: ["/images/portfolio_0.png", "/images/portfolio_1.png"],
};

const Three = {
  id: "house-studio",
  title: "HOUSE STUDIO",
  tags: ["AdobeXD", "HTML", "CSS", "Bootstrap", "Express", "EJS", "Git"],
  text: "This was the first project designed and implemented from scratch. Working with technologies learned through a developement course I created a business website. Designed in AdobeXD, and then implemented a homepage, about, and contact page using Bootstrap, Express, and EJS.",
  hero: "/images/house_studio_hero.png",
  img: [
    "/images/house_studio_1.png",
    "/images/house_studio_2.png",
    "/images/house_studio_3.png",
    "/images/house_studio_about.png",
    "/images/house_studio_contact.png",
  ],
};

const ProjectList = [One, Two, Three];
function ProjectLayout({ id }) {
  const project = ProjectList.find((element) => element.id === id);
  if (!project) {
    return null;
  }
  return (
    <>
      <img className="w-10/12" src={project.hero}></img>
      <div className="w-10/12 p-6 pt-16 pb-16">
        <div>
          <h1 className="text-4xl font-medium	tracking-widest	pb-12">
            {project.title}
          </h1>
        </div>
        <h6 className="text-base font-medium pb-4">TECH</h6>
        <ul className="flex flex-col sm:flex-row justify-between text-base font-light pb-12">
          {project.tags.map((tag) => (
            <li className="text-sm pb-1">{tag}</li>
          ))}
        </ul>
        <h6 className="text-base font-medium pb-4">ABOUT THE PROJECT</h6>
        <p className="text-base font-light pb-6">{project.text}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-start gap-8 pb-12">
          {project.img.map((img) => (
            <img className="flex w-11/12 md:w-8/12 lg:w-5/12" src={img}></img>
          ))}
        </div>
        <Link className="pb-4" href="/">
          <a className="underline text-base font-medium">back</a>
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

import Image from "next/image";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";

export default function Projects() {
    return (
      <>
      
      <section className="w-[80%] md:w-[66%] mx-auto md:mt-0 mt-16">
      <h2 className="text-center pb-7 text-2xl">Projects</h2>

      <div className="md:flex flex-row justify-between space-x-3">
        <div className="">
        <Image src={project2} width={400} height={600} className="mb-4"/>
        <a className="underline text-blue-900 text-xl" href="https://www.udown.netlify.app">Udown</a>
        <p>Udown is a youtube video downloader. I used a free video api to build udown</p>
        </div>

        <div className="">
        <Image src={project3} width={400} height={600} className="mb-4"/>
        <a className="underline text-blue-900 text-xl" href="https://github.com/guyasong2">UrlShortener</a>
        <p>UrlShortener is a site build to help users shorten their websites url to forward to someone</p>
        </div>

      </div>
      </section>
      </>
    );
  }
  
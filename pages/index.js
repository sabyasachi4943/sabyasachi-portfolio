import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import sabyasachi from "../public/Sabysachi-Sarkar.jpg";
import { useState } from "react";
import LearntoCode from "../public/LearnToCode.png";
import Cardeals from "../public/car-deals.png";
import TravelServices from "../public/travel-services.png";
import Link from "next/link";
import bg from "../public/Laptop-man1.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-full">
        <Head>
          <title className="">Sabyasachi Sarkar</title>
          <meta name="description" content="Web Developer, Data Analyst, Quick Learner" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="h-full bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="h-full">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl dark:text-white text-black">
                Sabyasachi Sarkar
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => {
                      setDarkMode(!darkMode);
                      console.log("clicked");
                    }}
                    className=" cursor-pointer shadow-2xl text-2xl dark:text-white text-black"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r shadow-2xl from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md ml-4"
                    href=" https://drive.google.com/file/d/1IQbwDu-ycQHrvJ1gVAvk7BxLVJCrW3Ud/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <Link
                    className="bg-gradient-to-r shadow-2xl from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md ml-4"
                    href="/blog"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-gradient-to-r shadow-2xl from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md ml-4"
                    href="/about"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <a
                    href="#contactme"
                    className="bg-gradient-to-r shadow-2xl from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md ml-4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                <p className=" drop-shadow-lg shadow-black">
                  Sabyasachi Sarkar
                </p>
              </h2>
              <h3 className="text-2xl py-2 dark:text-white text-black md:text-3xl">
                Developer and designer.
              </h3>
              <div className="mx-auto items-center">
                <Image
                  src={bg}
                  alt="man"
                  className="mx-auto items-center animate-pulse "
                ></Image>
              </div>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelancer providing services for programming and design content
                needs. Join me down below and let&apos;s get cracking!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  href="https://github.com/sabyasachi4943"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://twitter.com/sabyasachiCodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="https://www.linkedin.com/in/sabyasachisarkar001"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="mx-auto flex items-center justify-center outline outline-offset-2 outline-4 outline-cyan-400 shadow-2xl bg-gradient-to-b from-teal-500 rounded-full lg:w-80 lg:h-80 w-40 h-40 relative overflow-hidden mt-20 md:h-80 md:w-80">
                <Image
                  src={sabyasachi}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* projects section */}
          <section>
            <div>
              <h2 className="text-5xl text-center mx-auto flex items-center justify-center py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl m-24">
                My Projects
              </h2>
            </div>
            <div className="flex flex-wrap gap-12 items-center justify-center">
              {/* project 1 */}
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={Cardeals}
                    alt="Cardeals"
                    width={500}
                    height={300}
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Cardeals
                    <div className="badge badge-secondary">react</div>
                  </h2>
                  <p>A Car Reselling Website</p>
                  <div className="card-actions justify-end flex flex-col">
                    <a
                      href="https://cardeals-44d74.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary m-2">LIve link</button>
                    </a>

                    <Link href="projects/cardeals">
                      <button className="btn btn-primary m-2">
                        see details
                      </button>
                    </Link>

                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/cardeals-client"
                          target="_blank"
                          rel="noreferrer"
                        >
                          client
                        </a>
                      </div>
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/cardeals-server"
                          target="_blank"
                          rel="noreferrer"
                        >
                          server
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project 2 */}
              <div className="card w-96  bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={TravelServices}
                    alt="Travel-services"
                    width={500}
                    height={300}
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Travel-services
                    <div className="badge badge-secondary">react</div>
                  </h2>
                  <p>A Tourist Service Review Website</p>
                  <div className="card-actions justify-end flex flex-col">
                    <a
                      href="https://travel-services-f5be1.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary m-2">LIve link</button>
                    </a>

                    <Link href="projects/travelservices">
                      <button className="btn btn-primary m-2">
                        see details
                      </button>
                    </Link>

                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/travel-services-client"
                          target="_blank"
                          rel="noreferrer"
                        >
                          client
                        </a>
                      </div>
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/travel-services-server"
                          target="_blank"
                          rel="noreferrer"
                        >
                          server
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project 3 */}
              <div className="card w-96  bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={LearntoCode}
                    alt="LearnToCode"
                    width={500}
                    height={300}
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    LearnToCode
                    <div className="badge badge-secondary">react</div>
                  </h2>
                  <p>An Online Educational Website</p>
                  <div className="card-actions justify-end flex flex-col">
                    <a
                      href="https://learntocode-88f5e.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary m-2">LIve link</button>
                    </a>

                    <Link href="projects/learntocode">
                      <button className="btn btn-primary m-2">
                        see details
                      </button>
                    </Link>

                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/learntocode-client"
                          target="_blank"
                          rel="noreferrer"
                        >
                          client
                        </a>
                      </div>
                      <div className="badge badge-outline">
                        <a
                          href="https://github.com/sabyasachi4943/learntocode-server"
                          target="_blank"
                          rel="noreferrer"
                        >
                          server
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* contact me */}
          <section className="mx-auto flex items-center justify-center">
            <div className="" id="contactme">
              <button className="btn m-32">
                <a
                  href="https://form.jotform.com/223432796330455"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact me
                </a>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

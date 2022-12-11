import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const about = () => {
  return (
    <div className="h-screen bg-white px-10 md:px-20 lg:px-40">
      <div className="bg-white">
        <h1 className="text-black p-48 text-center text-4xl">About Me</h1>
        <div className="w-3/6 text-justify mx-auto">
          <p className="text-black text-center">
            I am a passionate web developer. Currently, studying in BUP. Right
            now I am in my Senior Year. I started learning programming in my 1st
            year of university life. I have completed some projects you can find
            it on my github.
          </p>
          <br />
          <p className="text-black text-center">
            I have worked with React, Node, Mongodb, React-Bootstrap,
            TailwindCss and with many more web technologies. In my free time i am learning Golang.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/sabyasachi4943"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="mx-auto text-center">

        <Link href="/" className="btn btn-primary p-2 text-center mx-auto">Home</Link>
        </div>
        <br />
        
      </div>
    </div>
  );
};

export default about;

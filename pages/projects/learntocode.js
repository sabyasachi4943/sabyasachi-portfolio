import React from 'react';
import learntocode0 from "../../public/LearnToCode.png"
import learntocode1 from "../../public/LearnToCode-loggedin-1.png"
import learntocode2 from "../../public/LearnToCode-register-4.png"
import learntocode3 from "../../public/LearnToCode-checkout-3.png"
import learntocode4 from "../../public/LearnToCode-course-2.png"
import Image from 'next/image';
import Link from 'next/link';

const learntocode = () => {
  return (
    <div className="h-screen bg-white px-10 md:px-20 lg:px-40">
      <div>
        <h1 className="text-black p-16 text-center text-6xl">learntocode </h1>
        <p className="text-center text-black my-2">
          An Online Educational Website
        </p>
      </div>
      <div>
        <ul class="list-disc text-black">
          <li>The site is all about learning courses.</li>
          <li>
            There are 6 courses available you have to select one to view the
            details.
          </li>
          <li>You have to login or signup for getting premium access.</li>
          <li>You can login with google, github and also email.</li>
          <li>Unknown route will take you to 404 page.</li>
        </ul>
      </div>

      <a
        href="https://learntocode-88f5e.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-primary m-2">LIve link</button>
      </a>
      <div>
        <div className="">
          <div className="btn btn-primary m-2">
            <a
              href="https://github.com/sabyasachi4943/learntocode-client"
              target="_blank"
              rel="noreferrer"
            >
              client
            </a>
          </div>
          <div className="btn btn-primary m-2">
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
      <div className="flex flex-grow gap-5">
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={learntocode0}
              alt="learntocode"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>learntocode Home</p>
              <div className="badge badge-secondary">react</div>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={learntocode1}
              alt="loggedin"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Logged In</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={learntocode2}
              alt="register"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Register</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={learntocode3}
              alt="checkout"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Checkout</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={learntocode4}
              alt="course details"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Course details</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center">
        <Link href="/" className="btn btn-primary p-2 text-center mx-auto">
          Home
        </Link>
      </div>
    </div>
  );
};

export default learntocode;
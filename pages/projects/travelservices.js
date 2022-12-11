import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import travelservice0 from "../../public/travel-services.png"
import travelservice1 from "../../public/travel-services-1.png"
import travelservice2 from "../../public/travel-services-2.png"
import travelservice3 from "../../public/travel-services-3.png"
import travelservice4 from "../../public/travel-services-4.png"

const travelservices = () => {
  return (
    <div className="h-screen bg-white px-10 md:px-20 lg:px-40">
      <div>
        <h1 className="text-black p-16 text-center text-6xl">
          Travel-services
        </h1>
        <p className="text-center text-black my-2">
          A Tourist Service Review Website
        </p>
      </div>
      <div>
        <ul class="list-disc text-black">
          <li>
            The checkout and the adding review page will not work if you are not
            logged in.
          </li>
          <li>
            You can click the picture of the services to enlarge the picture.
          </li>
          <li>
            The navbar will shoe the hidden navlinks if you are logged in.
          </li>
          <li>You can login with Google.</li>
          <li>
            You can view the services and read the blog without logging in.
          </li>
        </ul>
      </div>

      <a
        href="https://travel-services-f5be1.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-primary m-2">LIve link</button>
      </a>
      <div>
        <div className="">
          <div className="btn btn-primary m-2">
            <a
              href="https://github.com/sabyasachi4943/travel-services-client"
              target="_blank"
              rel="noreferrer"
            >
              client
            </a>
          </div>
          <div className="btn btn-primary m-2">
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
      <div className="flex flex-grow gap-5">
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={travelservice0}
              alt="travelservice"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Travel-services Home</p>
              <div className="badge badge-secondary">react</div>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={travelservice1}
              alt="services"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Some services</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={travelservice2}
              alt="all services"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>All services</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={travelservice3}
              alt="Service details"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Service details</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={travelservice4}
              alt="reviews"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Reviews</p>
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

export default travelservices;
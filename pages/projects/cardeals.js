import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cardeals from "../../public/car-deals.png";
import Cardeals1 from "../../public/cardeals-dashboard-seller-1.png";
import Cardeals2 from "../../public/cardeals-dashboard-seller-2.png";
import Cardeals3 from "../../public/cardeals-dashboard-seller-3.png";
import Cardeals4 from "../../public/cardeals-dashboard-seller-4.png";

const cardeals = () => {
  return (
    <div className="h-screen bg-white px-10 md:px-20 lg:px-40">
      <div>
        <h1 className="text-black p-16 text-center text-6xl">Cardeals </h1>
        <p className="text-center text-black my-2">A Car Reselling Website</p>
      </div>
      <div>
        <ul class="list-disc text-black">
          <li>You have to be a admin user to view and delete users</li>
          <li>
            You have to signup as a buyer or seller with email but if you signup
            with google then you will be a buyer as default.
          </li>
          <li>If you are a seller you can advertise your cars.</li>
          <li>Cars are only in 3 categories.</li>
          <li>You can delete any car you added as a seller.</li>
        </ul>
      </div>

      <a
        href="https://cardeals-44d74.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-primary m-2">LIve link</button>
      </a>
      <div>
        <div className="">
          <div className="btn btn-primary m-2">
            <a
              href="https://github.com/sabyasachi4943/cardeals-client"
              target="_blank"
              rel="noreferrer"
            >
              client
            </a>
          </div>
          <div className="btn btn-primary m-2">
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
      <div className="flex flex-grow gap-5">
        <div className="card w-96 bg-base-100 shadow-xl my-16">
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
              <p>Cardeals Home</p>
              <div className="badge badge-secondary">react</div>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={Cardeals1}
              alt="Cardeals"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Add a product</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={Cardeals2}
              alt="Cardeals"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Add a product</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={Cardeals3}
              alt="Cardeals"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Cars in Sports category</p>
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-16">
          <figure>
            <Image
              src={Cardeals4}
              alt="Cardeals"
              width={500}
              height={300}
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p>Buying Car</p>
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

export default cardeals;

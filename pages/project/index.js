import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import email from "../../public/icons8-gmail.svg";
import github from "../../public/icons8-github.svg";
import linkedin from "../../public/icons8-linkedin.svg";
import hamburger from "../../public/hamburger.svg";
import sapro from "../../public/sa-pro.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Projects - Arsha Setya Pradita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icoku.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="flex flex-col w-screen h-screen md:flex md:flex-row md:divide-white
          md:divide-x-2 md:divide-dashed lg:flex xl:flex "
      >
        <div
          className="px-5 py-3 w-full flex absolute z-10 justify-between border-dashed border-b border-b-gray-500 md:border-none md:w-4/12 md:py-10 md:relative md
        :h-screen md:flex md:flex-col xl:px-20 lg:px-10 md:px-8"
        >
          <Link href="/">
            <div className="font-sans font-bold text-base leading-4 md:font-bold cursor-pointer md:text-2xl w-2/12 md:leading-5 text-black xl:w-4/12 lg:w-3/12 md:w-3/12">
              ARSHA SETYA PRADITA
            </div>
          </Link>
          <div className="hidden md:block">
            <a href="/">
              <h1 className="font-sans font-normal text-lg text-gray-400 hover:text-black md:text-base lg:text-lg">
                Back to home
              </h1>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex md:flex">
              <div className="mr-2">
                <a href="mailto:arshapradita@gmail.com" target="blank">
                  <Image src={email}></Image>
                </a>
              </div>
              <div className="mr-2">
                <a
                  href="https://www.linkedin.com/in/arsha-setya-pradita/"
                  target="blank"
                >
                  <Image src={linkedin}></Image>
                </a>
              </div>
              <div>
                <a href="https://github.com/arshapradita" target="blank">
                  <Image src={github}></Image>
                </a>
              </div>
            </div>
            <h1 className="font-sans font-normal text-lg text-gray-400 md:text-base lg:text-lg">
              Designed & Built by Arsha
            </h1>
          </div>
          <div className="h-8 w-8 my-auto rounded-lg border-gray-400 border-solid border-2 md:hidden">
            <Menu as="div">
              <div>
                <Menu.Button>
                  <Image src={hamburger}></Image>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 right-4 mt-2 w-11/12 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 hover:bg-gray-400">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/">
                          <button
                            className={`${
                              active
                                ? "bg-gray-400 text-white"
                                : "text-gray-900"
                            } group w-full items-center rounded-md px-2 py-2 text-sm text-center`}
                          >
                            Back to home
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="h-full w-full z-0 relative top-16 mt-2 overflow-x-hidden px-5 flex flex-col md:mt-0 md:top-0 lg:top-0 md:py-10 md:w-8/12 bg-gray-900">
          {/* <h1 className="font-sans pb-5 pt-3 text-base md:text-xl text-white font-regular">
            Project --
          </h1> */}
          <div className="flex flex-wrap gap-5 pt-3 md:pt-0 w-full">
            <div className=" w-full h-96 md:w-full lg:w-full lg:h-96 xl:w-5/12 px-5 py-5 flex flex-col justify-between bg-white rounded-xl hover:drop-shadow-xl">
              <div className="w-full h-48 rounded-lg bg-sapro bg-cover"></div>
              <p className="text-gray-800 font-sans text-lg font-normal leading-5">
                An e-commerce website to sell products
              </p>
              <div className="flex flex-wrap w-full gap-2 ">
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-blue-500">
                  Bootstrap
                </div>
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-red-500">
                  Laravel
                </div>
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-green-500">
                  Vue
                </div>
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-red-500">
                  Scss
                </div>
              </div>
              <div className="flex justify-between w-full">
                <a href="https://safra-ars.netlify.app/" target="blank">
                  <button
                    type="button"
                    className=" w-36 h-10 border-2 mx-auto rounded-lg text-gray-800 border-gray-300 border-solid text-center hover:bg-black hover:border-0 hover:text-white ease-in transition"
                  >
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/arshapradita/Laravel-vue.js"
                  target="blank"
                >
                  <button
                    type="button"
                    className=" w-36 h-10 border-2 mx-auto rounded-lg text-gray-800 border-gray-300 border-solid text-center hover:bg-black hover:border-0 hover:text-white ease-in transition"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className=" w-full h-96 md:w-full lg:w-full lg:h-96 xl:w-5/12 px-5 py-5 flex flex-col justify-between bg-white rounded-xl hover:drop-shadow-xl">
              <div className="w-full h-48 rounded-lg bg-wepro bg-cover"></div>
              <p className="text-gray-800 font-sans text-lg font-normal leading-5">
                A website that displays live budget charts
              </p>
              <div className="flex flex-wrap w-full gap-2 ">
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-blue-500">
                  Bootstrap
                </div>
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-red-500">
                  Laravel
                </div>
                <div className="px-3 md:py-0 py-1 rounded-full font-sans text-xs md:text-base text-white bg-red-500">
                  Scss
                </div>
              </div>
              <div className="flex justify-between w-full">
                <a href="https://dinas-ars.netlify.app/" target="blank">
                  <button
                    type="button"
                    className=" w-36 h-10 border-2 mx-auto rounded-lg text-gray-800 border-gray-300 border-solid text-center hover:bg-black hover:border-0 hover:text-white ease-in transition"
                  >
                    Preview
                  </button>
                </a>
                <a className="cursor-not-allowed">
                  <button
                    type="button"
                    className=" w-36 h-10 border-2 cursor-not-allowed mx-auto rounded-lg text-gray-800 border-gray-300 border-solid text-center hover:bg-black hover:border-0 hover:text-white ease-in transition"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

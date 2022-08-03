import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import email from "../../public/icons8-gmail.svg";
import github from "../../public/icons8-github.svg";
import linkedin from "../../public/icons8-linkedin.svg";
import hamburger from "../../public/hamburger.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - Arsha Setya Pradita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icoku.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="flex flex-col w-screen h-screen md:flex md:flex-row md:divide-slate-600
          md:divide-x md:divide-dashed lg:flex xl:flex "
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
            <h1 className="font-sans font-normal text-lg text-gray-400 md:text-base lg:text-lg">
              Profile
            </h1>
            <h1 className="font-sans font-normal text-lg text-gray-400 md:text-base lg:text-lg">
              Experience
            </h1>
            <h1 className="font-sans font-normal text-lg text-gray-400 md:text-base lg:text-lg">
              Skill
            </h1>
            <div>
              <h1 className="font-sans font-normal text-lg text-gray-400 md:text-base lg:text-lg">
                Back to home
              </h1>
            </div>
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
                  <div className="px-1 py-1 hover:bg-gray-400 ">
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
        <div className="h-full w-full z-0 overflow-x-hidden px-5 flex flex-col justify-center md:top-0 md:py-10 md:w-8/12">
          <div className="w-full lg:w-4/5 lg:mx-auto">
            <h1 className="font-sans font-medium text-2xl text-center md:text-2xl text-black mb-1">
              Get In Touch
            </h1>
            <p className="font-sans font-normal text-sm md:text-base text-center text-gray-500 mt-3 mb-3">
              Although I’m currently looking for any new opportunities, my inbox
              is always open. Whether you have a question or just want to say
              hi, I’ll try my best to get back to you!
            </p>
            <a href="mailto:arshapradita@gmail.com" target="blank">
              <div class="flex space-x-1 justify-center">
                <button
                  type="button"
                  className=" w-24 h-10 border-2 mx-auto rounded-lg text-black border-black border-solid text-center hover:bg-black hover:border-0 hover:text-white ease-in transition"
                >
                  Say Hello!
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

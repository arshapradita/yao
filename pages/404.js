import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import svg404 from "../public/svg404.svg";

const PageNotFound = () => {
  return (
    <section>
      {" "}
      <Head>
        <title>404 - Arsha Setya Pradita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icoku.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen h-screen bg-black flex flex-col justify-center">
        <Image src={svg404}></Image>
        <Link href="/">
          <div class="flex space-x-1 justify-center">
            <button
              typ="button"
              className="w-32 h-10 border-2 mx-auto rounded-full text-black bg-white  text-center hover:bg-black hover:border-2 hover:border-solid hover:border-white  hover:text-white ease-in transition"
            >
              Back To Home
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;

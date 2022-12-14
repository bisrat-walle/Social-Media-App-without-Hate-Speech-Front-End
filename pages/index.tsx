import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar />
        {/* SideBar */}

        {/* Feed */}

        {/* Widgets */}
      </main>
    </div>
  );
};

export default Home;

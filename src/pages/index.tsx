import Head from "next/head";
import { getSession, signOut, useSession } from "next-auth/react";
import { NextPageContext } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="contentful cms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins"
        }}
      >
        Home Page
      </main>
    </>
  );
}

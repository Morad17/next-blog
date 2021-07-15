import Head from "next/head";
import Navbar from "./navbar";
import Hero from "./hero"

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

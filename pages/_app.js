import Layout from "../components/layout";
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
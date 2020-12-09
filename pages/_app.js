import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="w-5/6 m-auto">
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;

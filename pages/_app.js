import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;

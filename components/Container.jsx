import Navigation from "./Navigation";
import Head from "next/head";
import "./Container.module.css";
const Container = ({ children }) => {
  return (
    <div>
      <Head>
        <title>HectorDev Next 🔥</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css"
        />
      </Head>
      <Navigation className="navigation" />
      {children}
    </div>
  );
};

export default Container;

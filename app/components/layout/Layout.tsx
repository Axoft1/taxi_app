/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import { FC, useEffect, useState } from "react";
import FavIcon from "../../assets/images/preloader.png";
// import Loader from '../ui/Loader'

interface ILayout {
  children: any;
  title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>{title} | Myski Taxi</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" />
        <link rel="shortcup icon" href={FavIcon.src} type="image/png" />
      </Head>
      {children}
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src={`https://api-maps.yandex.ru/2.1/?apikey=dc80584b-ed71-428d-98d5-cb7ef7ff5693&lang=ru_RU`}
      />
      {/* <div
        style={{ maxWidth: 480 }}
        className="mx-auto relative overflow-hidden"
      >
        {isLoading ? <Loader /> : children}
      </div> */}
    </div>
  );
};

export default Layout;

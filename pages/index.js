import Head from "next/head";
import Image from "next/image";
import TopContainer from "../components/TopContainer";
import Navbar from "../components/NavigationBar";
import MiddleContainer from "../components/MiddleContainer";
import BottomContainer from "../components/BottomContainer";
import About from "../components/About";
import NewCardContainer from "../components/NewCardContainer";
import History from "../components/History";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";
import OtherServices from "../components/OtherServices";
import ServiceWeProvide from "../components/ServiceWeProvide";
import ChooseUs from "../components/ChooseUs";
import PopularCourses from "../components/PopularCourses";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useState } from "react";
import Maintainence from "../components/Maintenence";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>ER EXPERT CONSULTATIONS</title>
        <meta name="description" content="ER Expert Consultants LLP" />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href="https:erexpertconsultants.com"
          key="canonical"
        />
        <link rel="icon" href="/ER.ico" />{" "}
      </Head>
      {loading ? (
        <div className="app">
          <Image
            className="mb-4"
            src="/bufferlogo.png"
            width={200}
            height={250}
            alt="Er Buffer Logo"
          />
          <BeatLoader
            color={"#548CA8"}
            loading={loading}
            size={20}
            speedMultiplier={2}
          ></BeatLoader>
        </div>
      ) : (
        <div className="row text-center">
          <Navbar />
          <TopContainer />
          <ServiceWeProvide />
          <About />
          <ChooseUs />
          {/* <MiddleContainer /> */}
          <PopularCourses />
          <OtherServices />
          <NewCardContainer />
          {/* <BottomContainer /> */}
          <History />
          <Faq />
          <Consultation />
          <Maintainence />
          <Footer />
        </div>
      )}
    </div>
  );
}

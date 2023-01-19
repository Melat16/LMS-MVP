import Navbar from "../components/Navbar";
import Home2 from "../components/HomeSection";
import Footer from "../components/Footer";
import Who from "../components/WhoSection";
import Courses from "../components/CoursesSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LUCY - BUILDING FUTURE GENERATIONS OF ENGINEERS</title>
      </Head>
      <Home2 />
      <Courses />
      <Who />
      <Footer />
    </>
  );
}

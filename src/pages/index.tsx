import About from "@/components/landing-page/About";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RideShare</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <HowItWorks />
        <About />
      </div>
    </>

  );
}

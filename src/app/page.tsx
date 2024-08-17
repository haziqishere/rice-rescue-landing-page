import Image from "next/image";
import '../../styles/global.css'
import '../../styles/animations.css'
import Head from "next/head";
import Hero from "../component/Hero";
import AboutSection from "@/component/AboutSection";
import FeaturesSection from "@/component/FeaturesSection";
import PricingSection from "@/component/PricingSection";
import CommentSection from "@/component/CommentSection";

function HomePage() {
    return (
        <>
            <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                rel="stylesheet"
            />
            </Head>
            <Hero/>
            <main>
              <AboutSection />
              <FeaturesSection />
              <PricingSection />
              <CommentSection />
            </main>
        </>
    );
}

export default HomePage;
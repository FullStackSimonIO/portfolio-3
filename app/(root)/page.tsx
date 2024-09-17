import AboutMe from "@/components/home/AboutMe";
import { Features } from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <AboutMe />
    </>
  );
};

export default Home;


import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/aboutme/AboutMe";
import Company from "@/components/companies/Company";
import Projects from "@/components/projects-section/Projects";
import Testimonials from "@/components/testimonials-section/Testimonials";
import WhyUs from "@/components/why-us-section/WhyUs";
import Contact from "@/components/contact-section/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Company />
      <Projects />
      <Testimonials />
      <WhyUs />
      <Contact />
    </main>
  );
}

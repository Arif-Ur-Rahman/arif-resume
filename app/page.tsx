import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          intro="From deep learning research to shipped web and mobile apps. Featured projects come first."
        >
          <Projects />
        </Section>
        <Section id="github" eyebrow="GitHub" title="Activity on GitHub" intro="Live stats from the public GitHub API.">
          <GitHubActivity />
        </Section>
        <Skills />
      </main>
      <Contact />
    </>
  );
}

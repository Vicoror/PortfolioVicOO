import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWithBubbles from "../components/SectionWithBubbles";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
 return (
    <>
    <Navbar />
    <main className="pt-16">
      <SectionWithBubbles title="Proyectos">
        <p className=" mt-2
          text-center
          text-[clamp(1rem,2.5vw,20px)]
          text-[#054172]">
          ← Desliza para ver más proyectos →
        </p>
    <div  className="
        mt-10
        mb-10
        flex
        gap-10
        overflow-x-auto
        pb-6
        snap-x snap-mandatory
        items-start
      ">
      <ProjectCard
          title="E-commerce React"
          stack="React, Java Script, Tailwind CSS"
          ide="Visual Studio Code"
          database="MySQL, Railway"
          githubUrl="https://github.com/tuusuario/ecommerce"
          demoVideoUrl="/SampleVideo_1280x720_1mb.mp4"
        />

      <ProjectCard
          title="App Android Educativa"
          stack="Kotlin"
          ide="Android Studio"
          database="Firebase, archivos locales json"
          githubUrl="https://github.com/tuusuario/ecommerce"
          demoVideoUrl="/demo-ecommerce.mp4"
        />

      <ProjectCard
          title="App iOS Educativa"
          stack="Firebase, archivos locales json"
          ide="Xcode"
          database="Firebase"
          githubUrl="https://github.com/tuusuario/ecommerce"
          demoVideoUrl="/demo_video_ohlaline.MP4"
        />

        <ProjectCard
          title="App iOS Educativa"
          stack="Firebase, archivos locales json"
          ide="Xcode"
          database="Firebase"
          githubUrl="https://github.com/tuusuario/ecommerce"
          demoVideoUrl="/demo_video_ohlaline.MP4"
        />
        <ProjectCard
          title="App iOS Educativa"
          stack="Firebase, archivos locales json"
          ide="Xcode"
          database="Firebase"
          githubUrl="https://github.com/tuusuario/ecommerce"
          demoVideoUrl="/demo_video_ohlaline.MP4"
        />
        
    </div>
      </SectionWithBubbles>

      <Footer />
    </main>

    </>
  );
}

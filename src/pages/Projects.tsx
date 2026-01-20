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
          title="Portfolio React"
          stack="React, Type Script, Tailwind CSS"
          ide="Visual Studio Code"
          database="Render, Resend. Cloudinary"
          githubUrl="https://github.com/Vicoror/contact-backend.git, https://github.com/Vicoror/PortfolioVicOO.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/Joyeria_harwhv.mp4"
        />
      <ProjectCard
          title="E-commerce React"
          stack="React, Java Script, Tailwind CSS, Stripe"
          ide="Visual Studio Code"
          database="MySQL, Railway, Nodemailer, Cloudinary"
          githubUrl="https://github.com/Vicoror/proyecto-final.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/Joyeria_qkjeua.mp4"
        />
  
      <ProjectCard
          title="App Android Educativa"
          stack="Kotlin"
          ide="Android Studio"
          database="Firebase, archivos locales json"
          githubUrl="https://github.com/Vicoror/AdroidProyectoFinalOh.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/v1768608843/EduFrAndroid_ijp4oc.mp4"

        />

      <ProjectCard
          title="App iOS Educativa"
          stack="Swift"
          ide="Xcode"
          database="Firebase, json"
          githubUrl="https://github.com/Vicoror/OhlalineIOS.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/v1768608829/iOSEduApp_t4y0qt.mp4"
        />

        <ProjectCard
          title="App Android Flores Aromáticas"
          stack="Kotlin"
          ide="Android Studio"
          database="Apiary"
          githubUrl="https://github.com/Vicoror/PracticaAndroidModulo7.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/v1768608830/FloresArAndroid_kwi3sb.mp4"
        />
        <ProjectCard
          title="App iOS Mascotas"
          stack="Consumo de Api"
          ide="Xcode"
          database="Api"
          githubUrl="https://github.com/Vicoror/Mascotas.git"
          demoVideoUrl="https://res.cloudinary.com/cargarfotos/video/upload/v1768608833/AdopMasiOS_pq36jc.mp4"
        />
        
    </div>
      </SectionWithBubbles>

      <Footer />
    </main>

    </>
  );
}

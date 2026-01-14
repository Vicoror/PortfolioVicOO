import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWithBubbles from "../components/SectionWithBubbles";

export default function About() {
  return (
     <>
        <Navbar />
        <main className="pt-16 min-h-screen">
           <SectionWithBubbles title="Sobre mí">
          <p>Apasionada de la creación tecnológica, ocupada en dar soluciones
              que satisfagan al usuario bribdándole una experiencia única y agradable.</p>
          
          <h3> Estudios</h3>
          <p>Estudios en Ingeniería en desarrollo de software en la  
              Universidad Abierta y a Distancia de México "UNADM".</p>
          <p>Comunicóloga egresada de la Universidad Nacional Autónoma de México "UNAM". </p>

          <h3>Mis Hobbies</h3>
          <ul>
              <li>Crear aplicaciones móviles.</li>
              <li>Practicar francés.</li>
              <li>Hacer velas.</li>
              <li>Bailar.</li>
              <li>Badminton.</li>
          </ul>
            </SectionWithBubbles>
    
          <Footer />
        </main>
    
        </>
   );
}

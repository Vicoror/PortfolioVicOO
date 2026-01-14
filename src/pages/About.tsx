import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWithBubbles from "../components/SectionWithBubbles";
import { 
  Heart, 
  GraduationCap, 
  BookOpen, 
  Code, 
  Globe, 
  Smartphone,
  Languages,
  CandlestickChart,
  Music,
  BalloonIcon,
  Sparkles,
  BookMarked,
  ChessQueen
} from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <SectionWithBubbles title="Sobre mí">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Sección principal */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Apasionada de la creación tecnológica, ocupada en dar soluciones
                  que satisfagan al usuario brindándole una experiencia única y agradable.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Columna izquierda */}
              <div className="space-y-10">
                {/* Estudios */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Estudios</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <BookMarked className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Ingeniería en Desarrollo de Software</span><br/>
                        Universidad Abierta y a Distancia de México "UNADM"
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <BookMarked className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Comunicación</span><br/>
                        Universidad Nacional Autónoma de México "UNAM"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cursos */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 rounded-xl">
                      <BookOpen className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Cursos</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      { icon: Smartphone, text: "Diplomado desarrollo de aplicaciones móviles iOS y Android UNAM" },
                      { icon: Code, text: "Java Script Escuela de Código" },
                      { icon: Code, text: "Programador Jr. Escuela de Código" },
                      { icon: Globe, text: "UX Google" },
                      { icon: Code, text: "React Mimo" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna derecha - Hobbies */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-100 rounded-xl">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Mis Hobbies</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { icon: Smartphone, text: "Crear aplicaciones móviles", color: "text-purple-500" },
                    { icon: Languages, text: "Practicar francés", color: "text-blue-500" },
                    { icon: ChessQueen, text: "Juegos de mesa", color: "text-gray-500" },
                    { icon: Music, text: "Bailar", color: "text-rose-500" },
                    { icon: BalloonIcon, text: "Badminton", color: "text-emerald-500" },
                    { icon: CandlestickChart, text: "Hacer velas", color: "text-amber-500" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className={`p-2 rounded-lg bg-white ${item.color.replace('text-', 'bg-')} bg-opacity-20`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="font-medium text-gray-800">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cita inspiradora */}
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-4">
                <Heart className="w-8 h-8 text-purple-500" />
                <p className="text-lg italic text-gray-700">
                  "La tecnología no es solo sobre código, es sobre crear experiencias que inspiren y conecten con las personas."
                </p>
              </div>
            </div>
          </div>
        </SectionWithBubbles>
        <Footer />
      </main>
    </>
  );
}
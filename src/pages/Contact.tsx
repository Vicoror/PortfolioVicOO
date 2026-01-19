import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useError } from "../context/ErrorContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWithBubbles from "../components/SectionWithBubbles";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
   const { showError } = useError();

  const subjectRegex = /^[a-zA-ZÀ-ÿ0-9\s]{3,60}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const messageRegex = /^[\s\S]{10,500}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!subjectRegex.test(subject)) {
      toast.error("El asunto debe tener entre 3 y 60 caracteres");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Correo electrónico inválido");
      return;
    }

    if (!messageRegex.test(message)) {
      toast.error("El mensaje debe tener entre 10 y 500 caracteres");
      return;
    }

    try {
      setLoading(true);

       const response = await fetch(
            "https://contact-backend-w6mo.onrender.com/api/contact",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ subject, email, message }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Error al enviar");
          }

          toast.success("Mensaje enviado con éxito ✨");

      // Limpiar formulario
      setSubject("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      //toast.error("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

   const loadData = async () => {
    try {
      throw new Error();
    } catch {
      showError("Error al cargar datos ❌");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <main className="pt-16 min-h-screen">
        <SectionWithBubbles title="Contacto">
          <div className="mt-10 mb-10 mx-auto max-w-lg rounded-2xl bg-[#f9f9f9] p-6 sm:p-8 shadow-xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#054172]">
              Enviar mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Asunto */}
              <div>
                <label className="block text-sm font-medium text-[#054172]">
                  Asunto
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Asunto del mensaje"
                  className="mt-1 w-full bg-white rounded-lg border border-gray-300 p-3 focus:border-[#054172] focus:outline-none"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-sm font-medium text-[#054172]">
                  Correo
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="mt-1 w-full bg-white rounded-lg border border-gray-300 p-3 focus:border-[#054172] focus:outline-none"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-[#054172]">
                  Mensaje
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                  className="mt-1 w-full bg-white rounded-lg border border-gray-300 p-3 focus:border-[#054172] focus:outline-none"
                />
              </div>

              <button
                onClick={loadData}
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#054172] py-3 font-semibold text-white transition hover:bg-[#04345c] disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </SectionWithBubbles>
        <Footer />
      </main>
    </>
  );
}

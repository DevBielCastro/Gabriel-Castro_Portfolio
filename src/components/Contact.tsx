import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: string }>({
    message: "",
    type: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    setFormStatus({ message: "", type: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus({ message: "Mensagem enviada com sucesso!", type: "success" });
          form.current?.reset();
        },
        (error) => {
          setFormStatus({ message: "Falha ao enviar. Tente novamente.", type: "error" });
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary mb-4">
          Entre em Contato
        </h2>
        <p className="text-secondary/80 text-center mb-10">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me
          enviar uma mensagem.
        </p>

        <div className="bg-primary/30 border border-primary/30 rounded-2xl p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="user_name"
                placeholder="Seu Nome"
                required
                className="bg-primary/40 border border-primary/40 rounded-md px-4 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent/60"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Seu E-mail"
                required
                className="bg-primary/40 border border-primary/40 rounded-md px-4 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent/60"
              />
            </div>

            <textarea
              name="message"
              placeholder="Sua Mensagem"
              required
              rows={6}
              className="w-full bg-primary/40 border border-primary/40 rounded-md px-4 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent/60"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-background font-bold py-3 px-6 rounded-md hover:bg-accent/80 transition-colors disabled:bg-primary disabled:cursor-not-allowed"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>

          {formStatus.message && (
            <p
              className={`mt-4 text-center ${
                formStatus.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/DevBielCastro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-castro-9a9745209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://wa.me/5583993165252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>

          <a
            href="https://wa.me/5583993165252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/80 hover:text-accent transition-colors text-sm"
          >
            Preferir WhatsApp? Clique aqui.
          </a>
        </div>
      </div>
    </section>
  );
}

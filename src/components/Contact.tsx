import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true);
    setFormStatus({ message: '', type: '' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus({ message: 'Mensagem enviada com sucesso!', type: 'success' });
          form.current?.reset();
        },
        (error) => {
          setFormStatus({ message: 'Falha ao enviar. Tente novamente.', type: 'error' });
          console.error('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-24 px-12">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">Entre em Contato</h2>
        <p className="text-secondary/70 mb-12">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem.
        </p>

        <div className="bg-primary/30 p-8 rounded-lg">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" name="from_name" placeholder="Seu Nome" required className="w-full bg-primary/50 p-3 rounded-md text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="email" name="from_email" placeholder="Seu E-mail" required className="w-full bg-primary/50 p-3 rounded-md text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <textarea name="message" placeholder="Sua Mensagem" rows={6} required className="w-full bg-primary/50 p-3 rounded-md text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" disabled={isLoading} className="bg-accent text-background font-bold py-3 px-6 rounded-md hover:bg-accent/80 transition-colors disabled:bg-primary disabled:cursor-not-allowed">
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
          {formStatus.message && (
            <p className={`mt-4 text-center ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {formStatus.message}
            </p>
          )}
        </div>

        <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/DevBielCastro" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/devbielcastro/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <FaLinkedin size={32} />
            </a>
        </div>
      </div>
    </section>
  );
}
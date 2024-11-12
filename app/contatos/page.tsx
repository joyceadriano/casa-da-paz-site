"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';

export default function Contatos() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 relative overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}></div>

        <motion.h2
          className="text-4xl font-bold text-[#89b72d] z-10 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contatos
        </motion.h2>
        
        <motion.p
          className="text-lg max-w-xl mt-4 z-10 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          Entre em contato conosco através do e-mail ou telefone.
        </motion.p>

        <motion.div
          className="mt-10 z-10 relative bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mt-8">Informações de Contato</h3>
          <p className="text-lg mt-2">Email: contato@casadapaz.com</p>
          <p className="text-lg mt-2">Telefone: (00) 12345-6789</p>
        </motion.div>

        <motion.div
          className="mt-10 z-10 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mt-8">Siga-nos</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#89b72d] transition-transform transform hover:scale-110">
              📘
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#89b72d] transition-transform transform hover:scale-110">
              📷
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#89b72d] transition-transform transform hover:scale-110">
              🐦
            </a>
          </div>
        </motion.div>

        <motion.form
          className="mt-10 bg-white shadow-lg rounded-lg p-6 z-10 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Envie uma Mensagem</h3>
          <input type="text" placeholder="Seu Nome" className="mt-4 p-2 border rounded w-full" />
          <input type="email" placeholder="Seu Email" className="mt-4 p-2 border rounded w-full" />
          <textarea placeholder="Sua Mensagem" className="mt-4 p-2 border rounded w-full h-32" />
          <button type="submit" className="mt-4 bg-[#89b72d] text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Enviar
          </button>
        </motion.form>
      </section>
    </Layout>
  );
}

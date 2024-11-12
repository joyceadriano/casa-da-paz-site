"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaHandsHelping, FaGift } from 'react-icons/fa';

export default function ComoAjudar() {
  return (
    <Layout>
      <section className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#89b72d]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Como Ajudar
          </motion.h2>
          <motion.p
            className="text-lg max-w-xl mx-auto mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            Sua contribuição faz a diferença! Veja como você pode nos ajudar.
          </motion.p>
        </div>

        {/* Seções de Como Ajudar */}
        <div className="container mx-auto mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/* Primeira Forma de Ajudar */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaMoneyBillWave className="w-16 h-16 mx-auto text-[#89b72d] mb-4" /> {/* Ícone de Apoio Financeiro */}
              <h3 className="text-xl font-bold">Apoio Financeiro</h3>
              <p>
                Contribua com doações financeiras para ajudar em nossos projetos e iniciativas.
              </p>
            </motion.div>

            {/* Segunda Forma de Ajudar */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaHandsHelping className="w-16 h-16 mx-auto text-[#89b72d] mb-4" /> {/* Ícone de Voluntariado */}
              <h3 className="text-xl font-bold">Voluntariado</h3>
              <p>
                Junte-se a nós como voluntário e faça a diferença em nossa comunidade.
              </p>
            </motion.div>

            {/* Terceira Forma de Ajudar */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaGift className="w-16 h-16 mx-auto text-[#89b72d] mb-4" /> {/* Ícone de Doações de Materiais */}
              <h3 className="text-xl font-bold">Doações de Materiais</h3>
              <p>
                Doe roupas, alimentos e outros materiais que podem beneficiar aqueles que precisam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

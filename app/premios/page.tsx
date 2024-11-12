"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';
import { FaTrophy, FaHandshake, FaStar } from 'react-icons/fa';

export default function Premios() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100">
        <motion.h2
          className="text-4xl font-bold text-[#89b72d]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prêmios
        </motion.h2>
        <motion.p
          className="text-lg max-w-xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          Reconhecemos e celebramos as contribuições de pessoas e organizações que impactam positivamente a nossa comunidade.
        </motion.p>

        {/* Seções de Prêmios */}
        <div className="container mx-auto mt-10 flex flex-wrap justify-center">
          {/* Primeiro Prêmio */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaTrophy className="text-5xl text-[#89b72d] mb-4" />
            <h3 className="text-xl font-bold">Melhor Contribuidor</h3>
            <p>
              Reconhecemos o esforço contínuo de nossos melhores contribuintes.
            </p>
          </motion.div>

          {/* Segundo Prêmio */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaHandshake className="text-5xl text-[#89b72d] mb-4" />
            <h3 className="text-xl font-bold">Prêmio de Solidariedade</h3>
            <p>
              Este prêmio é para aqueles que mostram o verdadeiro espírito de solidariedade.
            </p>
          </motion.div>

          {/* Terceiro Prêmio */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaStar className="text-5xl text-[#89b72d] mb-4" />
            <h3 className="text-xl font-bold">Prêmio Estrela</h3>
            <p>
              Homenageamos aqueles que se destacam em suas ações e contribuições.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-lg max-w-xl mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          Através de nossas premiações, incentivamos o engajamento e a solidariedade na sociedade.
        </motion.p>
      </section>
    </Layout>
  );
}

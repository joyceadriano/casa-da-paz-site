"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Bazar() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <motion.h2
          className="text-4xl font-bold text-[#89b72d] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bazar
        </motion.h2>
      

        {/* Novo Texto Adicionado em Duas Colunas */}
        <motion.div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <motion.div className="flex flex-col">
            <motion.p
              className="text-lg mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9 }}
            >
              A Casa da Paz organiza um Bazar Permanente Beneficente como uma das formas de arrecadar fundos para apoiar nossos programas e serviços. Em nosso bazar, você encontrará uma variedade de itens novos e usados, incluindo roupas, acessórios, livros, brinquedos e muito mais, tudo a preços acessíveis.
            </motion.p>

            <motion.h3
              className="text-2xl font-bold mt-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Como Funciona:
            </motion.h3>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2 }}
            >
              <strong>Localização:</strong> O bazar está localizado na Av. Rio de Janeiro, 4453, Zona II e está aberto ao público de terça a sexta das 8 às 17h e no sábado das 8 às 12h.
            </motion.p>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.3 }}
            >
              <strong>Doações:</strong> Aceitamos doações de itens em bom estado para revenda no bazar. Se você deseja contribuir, entre em contato conosco para agendar a entrega.
            </motion.p>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.4 }}
            >
              <strong>Voluntariado:</strong> Contamos com o apoio de voluntários para ajudar na organização e operação do bazar. Se você gostaria de se envolver, ficaremos felizes em recebê-lo em nossa equipe.
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col">
            <motion.h3
              className="text-2xl font-bold mt-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Benefícios:
            </motion.h3>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.6 }}
            >
              <strong>Para a Comunidade:</strong> O bazar oferece uma maneira de adquirir itens de qualidade a preços acessíveis, promovendo a sustentabilidade e o consumo consciente.
            </motion.p>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.7 }}
            >
              <strong>Para a Casa da Paz:</strong> Todos os recursos arrecadados no bazar são destinados diretamente aos nossos programas de apoio a crianças e adolescentes, contribuindo para a melhoria de suas vidas e o fortalecimento de nossos serviços.
            </motion.p>

            <motion.h3
              className="text-2xl font-bold mt-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Visite Nosso Bazar:
            </motion.h3>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.9 }}
            >
              Sua participação e apoio são fundamentais para o sucesso do nosso bazar. Venha nos visitar, faça compras, doe itens ou ofereça seu tempo como voluntário. Cada ação ajuda a fazer a diferença na vida das crianças e adolescentes atendidos pela Casa da Paz.
            </motion.p>

            <motion.p
              className="text-lg mt-4 font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 2.0 }}
            >
              Casa da Paz realiza 3ª edição do Bazar de Garagem no próximo dia 06/03/2024.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 2.2 }}
            >
              <a
                href="https://wa.me/55XXXXXXXXXXX" // Substitua pelo número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
              >
                <FaWhatsapp className="text-2xl mr-2" />
                <span>Fale conosco no WhatsApp</span>
              </a>
            </motion.div>
      </section>
    </Layout>
  );
}

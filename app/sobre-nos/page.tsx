"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Image = {
  id: number;
  type: string;
  path: string;
  created_at: string;
  updated_at: string;
};

export default function SobreNos() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/images');
        const galleryImages = response.data.filter((img: Image) => img.type === 'quem_somos');
        setImages(galleryImages);
      } catch (error) {
        console.error('Erro ao buscar as imagens:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Layout>
<section className="min-h-screen bg-gray-100 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4">
    <motion.img
      src={`http://127.0.0.1:8000/storage/${images[0]?.path}`}
      alt="Sobre nós"
      style={{ width: '400px', height: '400px' }}
      className="object-cover rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold text-[#89b72d]">Sobre Nós</h2>
      <p className="text-lg mt-4">
        A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
      </p>
      <p className="text-lg mt-4">
        Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.
      </p>
    </motion.div>
  </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 mt-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Nosso Objetivo</h3>
            <p className="mt-2">
              Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.
            </p>
          </motion.div>
          <motion.img
            src={`http://127.0.0.1:8000/storage/${images[1]?.path}`}
            alt="Nosso Objetivo"
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
            style={{ width: '400px', height: '400px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 mt-16">
          <motion.img
            src={`http://127.0.0.1:8000/storage/${images[2]?.path}`}
            alt="Nossos Valores"
            style={{ width: '400px', height: '400px' }}
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Nossos Valores</h3>
            <p className="mt-2">
              Acreditamos que é possível mudar o destino de crianças e adolescentes por meio do conhecimento. Oferecemos oficinas de artes, cultura, lazer e educação, integradas com noções de ética e cidadania. Nossa equipe é movida pela paixão em fazer a diferença e está sempre pronta para enfrentar novos desafios.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 mt-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Onde e como as atividades acontecem?</h3>
            <p className="mt-2">
              As atividades da Casa da Paz são realizadas no contraturno escolar tanto nas nossas instalações quanto em instituições parceiras. Contamos com a colaboração de voluntários e estagiários para a execução das oficinas. Apesar das dificuldades com recursos, garantimos que nossos participantes recebam uniformes, material escolar e lanches preparados com produtos de qualidade e segurança alimentar.
            </p>
          </motion.div>
          <motion.img
            src={`http://127.0.0.1:8000/storage/${images[3]?.path}`}
            alt="Onde e Como"
            style={{ width: '400px', height: '400px' }}
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 mt-16">
        <motion.img
            src={`http://127.0.0.1:8000/storage/${images[4]?.path}`}
            alt="Onde e Como"
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '400px', height: '400px'}}
          />
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">De onde vêm os recursos?</h3>
            <p className="mt-2">
              Os recursos para a manutenção dos projetos da Casa da Paz são obtidos através de doações de pessoas físicas e jurídicas, termo de colaboração com a Prefeitura Municipal de Umuarama, arrecadação do programa Nota Paraná e promoções realizadas pela entidade.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 mt-16">
          <motion.div
            className="md:w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Sede própria!</h3>
            <p className="mt-2">
              Com grande empenho, construímos nossa sede própria de 400 m² em dois pisos, em um terreno de 800 m² doado pelo poder público municipal, já devidamente escriturado em nome da Casa da Paz. Com a nova estrutura, aprimoramos a qualidade dos nossos serviços de convivência e fortalecimento de vínculos para crianças, adolescentes e suas famílias.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto flex flex-col text-center px-4 mt-16">
          <h3 className="text-2xl font-bold">Diretoria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
              src={`http://127.0.0.1:8000/storage/${images[5]?.path}`}
                alt="Maria da Paz"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-lg">Presidente: Maria da Paz</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
              src={`http://127.0.0.1:8000/storage/${images[6]?.path}`}
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-lg">Vice-presidente: João Silva</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
               src={`http://127.0.0.1:8000/storage/${images[7]?.path}`}
                alt="Ana Souza"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-lg">Tesoureiro: Ana Souza</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <img
              src={`http://127.0.0.1:8000/storage/${images[8]?.path}`}
                alt="Pedro Santos"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-lg">Secretário: Pedro Santos</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

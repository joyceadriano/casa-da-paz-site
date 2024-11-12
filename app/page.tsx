"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "./layout";
import axios from "axios";

type ImageType = {
  id: number;
  url: string;
  type: string;
  path: string;
};

export default function Inicio() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);

    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/images");
        const homeImage = response.data.find((img: ImageType) => img.type === "home");

        if (homeImage) {
          setBackgroundImage(`http://127.0.0.1:8000/storage/${homeImage.path}`);
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  if (!isClient) return null;

  return (
    <Layout>
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-100 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: 'blur(0.2px)',
              zIndex: -1,
            }}
          />
        )}
  
        <motion.h1
          className="text-6xl font-extrabold text-[#89b72d] relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Casa da Paz
        </motion.h1>
        <motion.p
          className="text-xl max-w-lg mt-4 text-white relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          “Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano
          seria menor" - Santa Teresa de Calcutá
        </motion.p>
        <motion.a
          href="/como-ajudar"
          className="mt-6 px-6 py-3 bg-[#89b72d] text-white rounded-lg hover:bg-green-600 transition duration-200 shadow-lg relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CONHEÇA A CASA DA PAZ
        </motion.a>
  
        {/* Seção de Recursos */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#89b72d]">
            No que acreditamos?            </h2>
            <p className="mt-2">
            Acreditamos que é possível mudar o destino de crianças e adolescentes por meio do conhecimento. 
            </p>
          </motion.div>
  
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#89b72d]">
            Onde e como as atividades acontecem?            </h2>
            <p className="mt-2">
            As atividades da Casa da Paz são realizadas no contraturno escolar tanto nas nossas instalações quanto em instituições parceiras.
            </p>
          </motion.div>
  
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-[#89b72d]">
            De onde vêm os recursos?            </h2>
            <p className="mt-2">
            Os recursos para a manutenção dos projetos da Casa da Paz são obtidos através de doações de pessoas físicas e jurídicas. </p>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
  
}

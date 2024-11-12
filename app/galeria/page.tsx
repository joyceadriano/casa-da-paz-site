"use client";


import Layout from '../layout';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Image = {
  id: number;
  type: string;
  path: string;
  created_at: string;
  updated_at: string;
};

export default function Galeria() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/images');
        const galleryImages = response.data.filter((img: Image) => img.type === 'galeria');
        setImages(galleryImages);
      } catch (error) {
        console.error('Erro ao buscar as imagens:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Layout>
      <section className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#89b72d]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa Galeria
          </motion.h2>
          <motion.p
            className="text-lg max-w-xl mx-auto mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            Explore algumas de nossas atividades e eventos através de nossas fotos.
          </motion.p>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`http://127.0.0.1:8000/storage/${image.path}`}
                alt={`Galeria ${image.id}`}
                className="w-full h-auto object-contain"
                style={{ width: '400px', height: '400px'}}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

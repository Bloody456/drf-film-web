import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { GoArrowRight, GoArrowLeft, GoArrowDown } from "react-icons/go";
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import Footer from '../components/Footer';
import Galeria from '../components/Galeria';


function PostDetail() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://drf-film-api.onrender.com/api/posts/${params.slug}/`);
        setData(response.data);

        const responseImages = await axios.get(`https://drf-film-api.onrender.com/api/fotos/${params.slug}`);
        setImages(responseImages.data);
      } catch (error) {
        console.log('Error');
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 0);

    return () => clearTimeout(timeout);
  }, [params.slug]);

  if (loading) {
    return (
      <div className='flex space-x-2 justify-center items-center h-[75vh]'>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>
    );
  }

  if (!data || !images) {
    return <div>Error</div>;
  }

  const formattedDate = format(new Date(data.fecha_creacion), 'dd MMMM yyyy', { locale: esLocale });

  return (
    <div className={`mx-auto  ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500 ease-in-out'}`}>

      <div className="relative">
        <img
          src={`${data.imageDetail}`}
          alt=""
          className="h-full w-full 2xl:h-[980px] object-top  object-cover mx-auto relative"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-[0%] left-1/2 transform translate-x-[-50%] -translate-y-[-18%] sm:translate-y-[65%] md:translate-y-[50%] xl:translate-y-[80%]">
          <div className='text-white'>
            <h2 className='text-[2rem]  sm:text-[3rem] md:text-[4rem] 2xl:text-[6rem]  text-center font-extralight font-playfair '>{data.nombre}</h2>
            <h2 className='text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] 2xl:text-[3rem] text-center font-extralight font-playfair'>{formattedDate}</h2>
          </div>

          <div className='mx-auto text-center text-[11px] lg:text-xl justify-center '>
            <a
              href='#galeria'
              className="font-playfair text-white font-extralight w-[130px] lg:w-[200px] mx-auto py-1 md:py-2 px-4 mt-[30px] transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-white hover:bg-white hover:text-black flex items-center justify-center "
            >
              Ver Fotos <GoArrowDown />
            </a>
          </div>

        </div>
      </div>



      <h2 id="galeria" className='text-center text-4xl font-playfair font-bold py-6 mb-2  pt-24 text-gray-900'>Galeria</h2>

        <Galeria images={images} galleryID="my-test-gallery" />


      <Footer />

    </div>




  );
}

export default PostDetail;
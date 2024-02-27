import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaVimeo

} from "react-icons/fa6";


function Home() {
  const [images, setImages] = useState(null);
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const [dark, setDark] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get("https://drf-film-api.onrender.com/api/blog/");
        setData(responseData.data);

        const postPromises = responseData.data[0].posts.map(postId =>
          axios.get(`https://drf-film-api.onrender.com/api/postsBlog/${postId}/`)
        );

        const postsData = await Promise.all(postPromises);
        setPosts(postsData.map(res => res.data));
      } catch (error) {
        console.log("Error");
      }

      try {
        const imagesResponse = await axios.get("https://drf-film-api.onrender.com/api/blogImages/");
        setImages(imagesResponse.data);
      } catch (error) {
        console.log("Error");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex space-x-2 justify-center items-center h-[75vh]'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
        </div>
      ) : (
        <div className='mx-auto'>
          {data &&
            data.map((blog) => (
              <div key={blog.id} className="relative animate-fade-up animate-duration-1000">
                <img
                  src={blog.imagenPrincipal}
                  alt=""
                  className=" sm:w-full 2xl:w-[1903px] h-[70vh]  md:h-[82vh] 2xl:h-[82vh] object-cover mx-auto"
                />

                <div className="absolute top-[0%] left-1/2 transform translate-x-[-50%] md:-translate-y-[-2%] -translate-y-[-3%]">
                  <div className='flex gap-x-2 md:gap-x-12  mb-24 ml-2  md:ml-10 '>
                    <img src="https://drf-film-api.onrender.com/static/laurel-wreath-illustration-PNG.webp" alt="" className='w-[100px] md:w-[130px] md:h-[130px] h-[100px] object-cover animate-fade-up animate-duration-1000' />
                    <img src="https://drf-film-api.onrender.com/static/laurel-wreath-illustration-PNG.webp" alt="" className='w-[100px] md:w-[130px] md:h-[130px] h-[100px] object-cover animate-fade-up animate-duration-1000' />
                    <img src="https://drf-film-api.onrender.com/static/laurel-wreath-illustration-PNG.webp" alt="" className='w-[100px] md:w-[130px] md:h-[130px] h-[100px] object-cover animate-fade-up animate-duration-1000' />
                  </div>

                  <div className='animate-fade-up animate-duration-1000'>
                    <h1 className={`text-[3.5rem]   md:text-[6rem] font-bold font-playfair ${dark ? 'text-black' : 'text-gray-50'}`}>GOWEEDING</h1>
                    <h2 className={`text-[2rem]  md:text-[5rem] text-center font-extralight font-playfair ${dark ? 'text-[#1A1F25]' : 'text-blue-100'}`}>FILMS</h2>
                  </div>

                  <div className={`text-center my-16 font-mono font-semibold animate-fade-up animate-duration-1000 text-lg ${dark ? 'text-[#1A1F25]' : 'text-blue-100'}`}>
                    VIDEO Y FOTOGRAFIA
                  </div>


                  <div className='animate-fade-up animate-duration-1000'>
                    <footer className={`${dark ? 'text-[#1A1F25]' : 'text-slate-100'} flex justify-center gap-x-2 text-4xl`}>
                      <FaFacebook />
                      <FaInstagram />
                      <FaLinkedin />
                      <FaVimeo />
                    </footer>
                  </div>
                </div>
              </div>
            ))}

          <div className='w-full flex justify-center my-24 '>
            {data &&
              data.map((blog) => (
                <iframe
                  key={blog.id}
                  src={blog.videoSecundario}
                  allowFullScreen
                  allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                  className=' w-[400px] h-[300px] sm:w-[600px] md:w-[900px] md:h-[600px] lg:w-[1400px] lg:h-[700px] p-4 shadow-xl'
                ></iframe>
              ))}
          </div>

          <section className='py-10 my-24 bodasDestacadas   2xl:w-[1503px] mx-auto'>
            <h2 className='text-2xl font-semibold text-center my-6 font-playfair scrollReveal md:text-4xl'>Bodas Destacadas</h2>
            <div className='grid md:flex md:gap-6 md:p-6  justify-center items-center mt-10'>
              {posts &&
                posts.map((post) => (
                  <a href={`http://localhost:5173/PortfolioBodas/${post.slug}`} key={post.id} className='mb-6 relative'>
                    <img src={`${post.imagePost}`} className='md:w-[300px] md:h-[500px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] lg:h-[800px]  hover:grayscale duration-500 transition-all ease-linear  object-cover brightness-50' />

                    <div className='absolute bottom-14 left-0 right-0 mx-auto text-center'>
                      <h3 className='text-white font-playfair text-2xl p-2 lg:text-[2.5rem]'>{post.nombre}</h3>
                      <h3 className='text-white font-playfair text-2xl p-2 lg:text-[2.5rem]'>Boda</h3>
                    </div>
                  </a>
                ))}
            </div>
          </section>

          <div className='font-playfair p-4 text-gray-900 italic font-semibold text-center   mx-auto   2xl:w-[1600px] xl:px-24'>
            <h1 className='my-20 text-2xl md:text-4xl'>
              "Instantes de amor eterno: Bodas Inolvidables".
            </h1>

            <section className='grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-2 justify-center mx-auto'>
              {images &&
                images.map((image) => (
                  <img
                    key={image.id}
                    src={`${image.imagen}`}
                    alt=""
                    className='w-full  h-96 object-cover duration-700 ease-out transition-all hover:grayscale'
                  />
                ))}
            </section>
          </div>

          <Footer />

        </div>
      )}
    </>
  );
}

export default Home;
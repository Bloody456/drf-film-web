import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const PortfolioBodas = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://drf-film-api.onrender.com/api/posts/");
        setData(response.data);
      } catch (error) {
        console.log('Error');
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
        <div className='min-h-[75vh] w-[368px] md:w-[755px] lg:w-[1000px] 2xl:w-[1603px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center  mx-auto my-16  portfoliobodas animate-fade-up animate-duration-1000'>
            {data &&
              data.map((post) => (
                <div key={post.id} onClick={() => navigate(`/PortfolioBodas/${post.slug}`)}>
                  <Post imagen={post.imagePost} titulo={post.nombre} />
                </div>
              ))}
          </div>
          <Footer />
        </div>
      )}

    </>


  )
}

export default PortfolioBodas
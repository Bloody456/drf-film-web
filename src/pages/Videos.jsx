import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'

function Videos() {

  const [data, setData] = useState(null)
  const [videos, setVideos] = useState(null)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://drf-film-api.onrender.com/api/video/");
        const videoData = response.data[0];
        setData(videoData);

        const videosResponse = await axios.get("https://drf-film-api.onrender.com/api/videos/");
        setVideos(videosResponse.data);
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

        <div className='mx-auto'>


          <div className='relative animate-fade-up animate-duration-1000'>

            <iframe
              className='w-full xl:w- 2xl:w-[1903px] h-[600px] sm:h-[750px] md:h-[860px] xl:h-[90vh] 2xl:h-[90vh] object-cover mx-auto aspect-video'
              src={`${data?.videoPrincipal}`}
            ></iframe>
          </div>

          <div className='text-center my-20 text-2xl font-semibold'>

            <h2 className='text-[2.5rem] text-center font-playfair my-16'>Videos</h2>

          </div>

          <div className='flex my-12  py-10'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-auto xl:gap-8 2xl:w-[1903px] 2xl:px-20 xl:px-10'>
              {videos &&
                videos.map((video) => (
                  <div key={video.id}>
                    <iframe
                      src={video.videoSeccion}
                      className='w-[340px] sm:w-[300px] h-48 md:w-[350px] mx-auto md:h-[200px] lg:h-[360px] lg:w-[500px] xl:w-[600px] 2xl:w-full object-cover'
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}

            </div>

          </div>


          <div className='grid items-center justify-center gap-5 h-full mx-auto'>
            <div className='my-4 justify-center mx-auto text-center self-center'>
              <h2 className='text-[2.5rem] text-center my-4 font-playfair font-bold'>Etalonaje</h2>


              <iframe
                src={data?.videoEtalonaje}
                allowFullScreen
                className='mx-auto w-[500px] h-[300px] sm:w-[600px] sm:h-[320px] lg:w-[1000px] lg:h-[550px] xl:w-[1300px] xl:h-[650px] 2xl:w-[1500px] 2xl:h-[750px]'
              ></iframe>

            </div>

            <div className='my-4 justify-center mx-auto text-center self-center'>
              <h2 className='text-[2.5rem] text-center my-4 font-playfair font-bold'>Drone</h2>


              <iframe
                src={data?.videoDrone}
                allowFullScreen
                className='mx-auto w-[500px] h-[300px] sm:w-[600px] sm:h-[320px] lg:w-[1000px] lg:h-[550px] xl:w-[1300px] xl:h-[650px] 2xl:w-[1500px] 2xl:h-[750px]'
              ></iframe>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>

  )
}

export default Videos
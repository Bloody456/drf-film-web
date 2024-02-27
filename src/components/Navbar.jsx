import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


function Navbar() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get("https://drf-film-api.onrender.com/api/blog/").then((response) => {
      setData(response.data)
    })

  }, [])


    return (
      <div className="pb-5 font-playfair animate-fade-up animate-duration-[2s]">
        <div className="max-w-7xl mx-auto py-5  px-4 sm:px-6 ">
          <div className="flex flex-col-reverse md:flex-row min-w-full justify-center md:justify-between  md:space-x-10">
            <div className="flex-1 md:self-start">
              <div className="flex justify-center ">
                <div className="flex justify-center items-center">
                  {data &&
                    data.map((blog) => (
                      <img key={blog.id} src={`${blog.logo}`} alt="" className="w-[170px]" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav id="bar" className="flex justify-center sticky">
          <div className=" flex flex-col md:flex-row justify-center md:space-y-0 my-2 space-y-2 uppercase text-center text-black">
            <Link to="/" className="mx-4 font-bold text-sm duration-300">Inicio</Link>
            <Link to="/videos" className="mx-4 font-bold text-sm duration-300 ">Videos</Link>
            <Link to="/PortfolioBodas" className="mx-4 font-bold text-sm duration-300 ">Fotografia</Link>
            <Link to="/sobre-mi" className="mx-4 font-bold text-sm duration-300 ">Sobre Mi</Link>
            <Link to="/contacto" className="mx-4 font-bold text-sm duration-300 ">Contacto</Link>
          </div>
        </nav>
      </div>
    )

  
}

export default Navbar






import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [telefono, setTelefono] = useState('');

    const [data,setData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://drf-film-api.onrender.com/api/enviarCorreo/',
                {
                    nombre,
                    correo,
                    mensaje,
                    telefono,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setNombre('');
            setCorreo('');
            setMensaje('');
            setTelefono('');
        } catch (error) {
            alert('Coloque los datos correctamente por favor');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://drf-film-api.onrender.com/api/contacto/");
            setData(response.data[0]);
          } catch (error) {
            console.error("error")
          }
        };
    
        fetchData();
      }, []);
    

    return (
        <div className='container relative w-full h-full flex justify-center mx-auto items-center p-20 md:p-20 animate-fade-up animate-duration-1000'>
            <div className='contact-box grid md:grid-cols-2 justify-center items-center text-center bg-white shadow-xl p-4 py-10 rounded-xl max-w-850'>
                <div className='left bg-cover h-full md:h-auto ml-2 '>
                    <img src={`${data?.imagen}`} className='object-cover rounded-lg' alt="" />
                </div>
                <div className='right p-4 md:p-25'>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            value={nombre}
                            placeholder='Ingrese su nombre'
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            maxLength={100}
                            className="w-full border outline-none bg-[#e6e6e699] py-2 px-4  text-sm  lg:text-lg mb-6 transition-all duration-300 focus:border-[#1e55fa78] focus:bg-[#fff]"
                        />
                        <input
                            type="email"
                            value={correo}
                            maxLength={100}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                            placeholder='Ingrese su email'
                            className="w-full border outline-none bg-[#e6e6e699] py-2 px-4  text-sm  lg:text-lg mb-6 transition-all duration-300 focus:border-[#1e55fa78] focus:bg-[#fff]"
                        />
                        <input
                            type="text"
                            maxLength={12}
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder='Ingrese su telefono'
                            required
                            className="w-full border outline-none bg-[#e6e6e699] py-2 px-4  text-sm lg:text-lg  mb-6 transition-all duration-300 focus:border-[#1e55fa78] focus:bg-[#fff]"
                        />
                        <textarea
                            value={mensaje}
                            maxLength={350}
                            onChange={(e) => setMensaje(e.target.value)}
                            placeholder='Ingrese su mensaje'
                            required
                            className="w-full border min-h-[150px] outline-none bg-[#e6e6e699] py-2 px-4  text-sm  lg:text-lg mb-6 transition-all duration-300 focus:border-[#1e55fa78] focus:bg-[#fff]"
                        />
                        <button type="submit" className="w-full bg-indigo-500 py-4 font-semibold text-white px-4 outline-none border-none cursor-pointer rounded-md">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
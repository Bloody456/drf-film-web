import React from 'react'

function Footer() {
    return (
        <div className='mt-24'>
            <footer className='flex justify-center gap-x-2'>
                <img src="../static/images/Facebook_black.svg" alt="" />
                <img src="../static/images/Instagram_black.svg" alt="" />
                <img src="../static/images/LinkedIN_black.svg" alt="" />
                <img src="../static/images/Vimeo_black.svg" alt="" />
            </footer>

            <footer className='flex justify-center text-2xl font-bold font-sans my-4 text-slate-700'>
                <h1>#GoWeeding</h1>
            </footer>

            <footer className='flex justify-center text-sm my-4 text-center'>
                © 2023 Lener Cardenas Films - Video y Fotografia de Bodas | example@gmail.com Huancayo, Perú | Todos los derechos reservados.
            </footer>

            
        </div>
    )
}

export default Footer
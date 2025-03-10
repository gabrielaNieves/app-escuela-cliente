import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDownloading } from "react-icons/md";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Constancia from '../reportes/Constancia';

const ConstanciasMenu = () => {
    const [opciones, setOpciones]  = useState(false);
    const handleClick = () => {
        setOpciones(!opciones);
    }

    return (
        <div className="absolute inline-block text-left">
            <div>
                <button onClick={handleClick} type="button" className="inline-flex w-full justify-center px-4 py-4 hover:bg-blue-200 font-semibold" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <BsThreeDotsVertical />
                </button>
            </div>
            {opciones && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                    <PDFDownloadLink document={<Constancia />} fileName='Constancia_Estudio.pdf'>
                        {({ loading }) =>
                            loading ? <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200' role="menuitem" tabindex="-1" id="menu-item-1"><MdOutlineDownloading className='h-5 w-5 ' /> </button> : <button>Constancia de Estudio</button>}
                    </PDFDownloadLink>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                </div>
            </div>
            )}
        </div>

    )
}

export default ConstanciasMenu
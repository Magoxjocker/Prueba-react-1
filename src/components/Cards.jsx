import React from 'react'


const Cards = ({ personaje }) => {
    return (
        <div className='Cards'>
            <div>   
                <img src={personaje.image} alt="" />
            </div>
            <div className='TextCard'>
                <h2>Información</h2>
                <p>Nombre: {personaje.name}</p>
                <p>Estado: {personaje.status}</p>
                <p>Especie: {personaje.species}</p>
                <p>Genero: {personaje.gender}</p>
                <p>Origen: {personaje.origin.name}</p>
            </div>
        </div>
    )
}

export default Cards
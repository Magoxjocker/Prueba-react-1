import React from 'react'


const Cards = ({ personajes }) => {
    return (
        <div className='Cards'>
            <div>   
                <img src={personajes.image} alt="" />
            </div>
            <div className='TextCard'>
                <h2>Información</h2>
                <p>Nombre: {personajes.name}</p>
                <p>Estado: {personajes.status}</p>
                <p>Especie: {personajes.species}</p>
                <p>Genero: {personajes.gender}</p>
                <p>Origen: {personajes.origin.name}</p>
            </div>
        </div>
    )
}

export default Cards
import React, { useEffect, useState } from 'react'
import Cards from './Cards'



const urlApi = 'https://rickandmortyapi.com/api/character?page=1'

const MiApi = () => {
  const [dataMiApi, setDataMiApi] = useState([])
  const [datafilter, setDatafilter] = useState([])

  useEffect(() => {
    getRickandMorty()
  }, [])

  const getRickandMorty = async () => {
    const response = await fetch(urlApi)
    const data = await response.json()
    setDataMiApi(data.results)
    setDatafilter(data.results)
  }


  /*BUSCADOR: FUNCION QUE LEE EL TEXTO DEL IMPUT*/
  const buscar = async (text) => {
    let datafilter = dataMiApi.filter(personajes=>personajes.name.toLowerCase().includes(text.target.value.toLowerCase()))
    console.log(datafilter)
    setDatafilter(datafilter ? datafilter : dataMiApi)
  }

  return (
    <div >
      <input name='Busqueda' className='buscador' type="text" placeholder='Buscame aquí' onChange={buscar} />
      <div className='container-cards'>
        {datafilter.map(personaje => <Cards key={personaje.id} personaje={personaje} />)}
        {datafilter.length === 0 && <p>Sin Resultados</p>}
      </div>
    </div>

  )
}


export default MiApi
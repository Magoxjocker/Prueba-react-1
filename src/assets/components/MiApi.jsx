import React, { useEffect, useState } from 'react'
import Cards from './Cards'



const urlApi = 'https://rickandmortyapi.com/api/character'

const MiApi = () => {
  const [dataMiApi, setDataMiApi] = useState ([])

  useEffect(()=>{
    getRickandMorty()
  },[])
   
    const getRickandMorty = async()=>{
        const response = await fetch (urlApi)
        const data = await response.json()
        setDataMiApi(data.results)
    }


  return (
    <div>
      {dataMiApi.map(personajes =><Cards key={personajes.id} personajes={personajes}/> )}
    </div>
  )
  }


export default MiApi
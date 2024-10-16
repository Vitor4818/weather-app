"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';

export default function Home() {




  //varaiveis
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);
  const [forecast, setForecast] = useState ([])


//Faz requisição para pegar os dados da cidade
  const loadCity = async (cityCode: number)=> {
    setIsLoading(true) 
    try{
      const response = await fetch (`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`)
      const data = await response.json()
      setCityData(data)
      console.log(cityData)
    } catch (error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }


//Faz requisição para pegar os dados climaticos da cidade
  const loadForecast = async (cityCode: number) =>{
    const params = {
      code: cityCode,
      days: 6
    }
    setIsLoading(true)
    try{
      const response = await fetch (`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${params.code}/${params.days}`)
      const data = await response.json()
      setForecast(data.clima)
    } catch (error){
      console.log(error)
    } finally{
      setIsLoading(false)
    }

  }



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cityCode = urlParams.get("cityCode"); //pega o cityCode da URL

    if (cityCode) {
      loadCity(Number(cityCode)); // Carrega os dados da cidade
      loadForecast(Number(cityCode)); // Carrega a previsão do tempo
    }
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez ao montar o componente







  return (
    <main>

      <h1>Inicio</h1>
      <br />
      <h2>Localidade: {cityData?.cidade}/{cityData?.estado}</h2>  
      <br />
      <h3>Descrição: {cityData?.clima[0].condicao_desc}</h3>
      <br />

      <p>Previsão para os próximos seis dias:</p>
      <br />

      {forecast.map((item) => (
  <div key={item.data}>
    <span>data: {item.data} </span>
    <br />
    <span>Condição: {item.condicao} </span>
    <br />
    <span>Min: {item.min}</span>
    <br />
    <span>Max: {item.max}</span>
    <br />
    <br />
  </div>
))}

      
    </main>
  )
}

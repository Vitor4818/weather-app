"use client"

import { useState } from "react"

export default function Busca(){

    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cityName, setCityName] = useState<string>("")
    const [cityList, setCityList] = useState([])



    //Vai pegar o valor do input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setCityName (event.target.value)
    }

    //vai fazer uma requisição com o valor do input e retornar uma lista de objetos com possiveis respostas, vai guardar na cityName
    const loadCities = async  () => {
        setIsLoading(true);
        
        try{
            const response = await fetch (`https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`)
            const data = await response.json();
            setCityList (data)
            console.log(cityList)

        } catch (error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
        
        
    }
    
    //Quando clicar no botão vai carregar a função
    const handleClick = () => {
        loadCities();
    };

    const handleNavigate = (cityCode: number) => {
        const state = {
          cityCode: cityCode,
        };
    
        navigate("/", { state });
      };


    return(
        <><form>
            <input
                label = "Buscar cidade"
                id="search"
                name="search"
                type="text"
                onChange={handleChange} />
            <h1>{cityName}</h1>
            <button type="button" onClick={handleClick}>
                Buscar
            </button>
        </form>
        
        <ul>
            {cityList.map((item)=> (
                <li>{item.nome}</li>
            ))}
        </ul>

         </>
    )

}


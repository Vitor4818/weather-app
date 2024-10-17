"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../components/button/Button";
import { Input } from "../components/input/Input";



export default function Busca() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState([]); // Tipagem para cityList

  // Vai pegar o valor do input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  // Vai fazer uma requisição com o valor do input e retornar uma lista de objetos
  const loadCities = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );
      const data = await response.json();
      setCityList(data);
      console.log(data);
    } catch (error) {
      console.error(error); 
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleClick = () => {
    loadCities();
  };

  const router = useRouter();


  const handleNavigate = (cityCode: number) => {
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <>
      <form>
        <Input
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
          placeholder="Buscar cidade"
        />
        <h1>{cityName}</h1>
        <Button type="button" onClick={handleClick} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Buscar"}
        </Button>
      </form>

      <ul>
        {cityList.map((item) => (
          <li key={item.id} onClick={() => handleNavigate(item.id)}>
            {item.nome}
          </li>
        ))}
      </ul>
    </>
  );
}

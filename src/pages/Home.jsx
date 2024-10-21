import { useEffect, useState } from "react";
import List from "../list";

export default function Home(){
    const [lista, setLista] = useState([])

    useEffect(() => {
        const receberListaProdutos = async () => {
        try{
            const produtos = await fetch('https://fakestoreapi.com/products')
            const resposta = await produtos.json()
            setLista(resposta)
        }catch{
            alert('ocorreu coisa ruim');
        }
    }


    receberListaProdutos()
    }, [])


    return(
        <>
        <List lista={lista}/>
        </>
    )
}


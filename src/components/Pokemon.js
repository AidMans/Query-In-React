import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query'

const Pokemon = () => {

    const config = {
        refetchOnWindowFocus: false,
        // staleTime: 10000,
        retry: 2,
        retryDelay: 2000
    }

    const pokemonList = useQuery(
        "pokemonList",
        async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return axios.get("https://pokeapi.co/api/v2/pokemon")
                    .then(res => res.data.results)
                    // .catch(err => err)
        },
        // config
        {
            refetchOnWindowFocus: false,
            // staleTime: 10000,
            retry: 2,
            retryDelay: 2000
        }
    );

    // const renderLoading = () => {
    //     return pokemonList.isLoading ? <h1>Loading ...</h1> : null
    // }

    console.log(pokemonList);

    return (
        // renderLoading()
        pokemonList.status === "loading"
        ? <h1>Loading ...</h1>
        : pokemonList.status === "success"
        ? pokemonList.data.map(pokemon => (
            <h1
                style={{
                    margin: "0",
                    borderBottom:"1px solid red",
                    paddingBottom: "10px"
                }}>{pokemon.name}</h1>
        ))
        : <h1>Error</h1>
    )
}

export default Pokemon;
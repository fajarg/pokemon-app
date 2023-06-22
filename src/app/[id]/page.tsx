'use client'
import { MdCatchingPokemon } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Pokemon {
    sprites: {
        front_default: string;
    };
    name: string;
    abilities: [
        {
            ability: {
                name: string,
                url: string,
            },

        }
    ],
}

export default function DetailPokemon({ params }: { params: { id: string } }) {
    const [dataPokemon, setDataPokemon] = useState<Pokemon>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then((result) => {
            setDataPokemon(result.data)
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div className="shadow-lg bg-base-100 navbar">
                <div className="flex items-center gap-1 px-5 text-xl font-semibold normal-case">
                    <div>Pokemon List</div> <MdCatchingPokemon className="text-2xl" />
                </div>
            </div>
            {
                !dataPokemon && (
                    <div className="px-10 py-5">
                        <Link className="btn btn-outline btn-sm" href='/'>
                            Back
                        </Link >
                        <div className="flex items-center justify-center h-[70vh]">
                            <p className="font-semibold">Data pokemon tidak ditemukan</p>
                        </div>
                    </div>
                )
            }
            {
                dataPokemon && (
                    <div className="px-10 py-5">
                        <Link className="btn btn-outline btn-sm" href='/'>
                            Back
                        </Link >
                        <div className='flex items-center justify-center h-[70vh]'>
                            <div className="shadow-xl card lg:card-side bg-base-100 min-w-[500px]">
                                <figure className="p-5"><img src={dataPokemon?.sprites.front_default} className="w-[150px]" alt="Pokemon" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name</h2>
                                    <span className="text-sm">{dataPokemon?.name}</span>
                                    <h2 className="mt-3 card-title">Abilities</h2>
                                    {
                                        dataPokemon?.abilities.map((data, index) => {
                                            return (
                                                <span className="text-sm" key={index}>{data.ability.name}</span>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

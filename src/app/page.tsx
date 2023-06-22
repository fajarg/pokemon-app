'use client'
import { MdCatchingPokemon } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [dataPokemon, setDataPokemon] = useState<Array<Pokemon>>([]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [prevUrl, setPrevUrl] = useState<string>('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    await axios.get(url).then((result) => {
      setNextUrl(result.data.next);
      setPrevUrl(result.data.previous);
      setDataPokemon(result.data.results);
    }).catch((error) => {
      console.log(error);
    })
  }

  const changeNextUrl = () => {
    setUrl(nextUrl);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const changePrevUrl = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setUrl(prevUrl);
  }


  return (
    <>
      <div className="shadow-lg bg-base-100 navbar">
        <div className="flex items-center gap-1 px-5 text-xl font-semibold normal-case">
          <div>Pokemon List</div> <MdCatchingPokemon className="text-2xl" />
        </div>
      </div>
      <div className="p-10 overflow-x-auto">
        {/* search */}
        <div className="join">
          <div>
            <div>
              <input className="input input-bordered join-item" placeholder="Search..." />
            </div>
          </div>
          <div className="indicator">
            <Link href={`/dsd`} className="btn join-item">Search</Link>
          </div>
        </div>
        {/* search */}
        <table className="table mt-7">
          <thead className="text-[16px]">
            <tr>
              <th className="text-center">Pokemon Picture</th>
              <th className="text-center">Pokemon Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              dataPokemon?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <div className="avatar">
                        <div className="h-13 w-13 mask mask-squircle">
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.url.split("/")[6]}.png`} alt='pokemon' />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{data?.name}</td>
                    <td className="text-center"><Link href={`/${data?.url.split("/")[6]}`} className="btn btn-ghost btn-xs">show details</Link></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <div className="grid grid-cols-2 px-[450px] join">
          <button className="join-item btn btn-outline" disabled={prevUrl ? false : true} onClick={changePrevUrl}>Previous page</button>
          <button className="join-item btn btn-outline" onClick={changeNextUrl}>Next</button>
        </div>
      </div>
    </>
  )
}

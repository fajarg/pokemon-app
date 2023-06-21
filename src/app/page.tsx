import Image from 'next/image'
import { MdCatchingPokemon } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="shadow-lg bg-base-100 navbar">
        <div className="flex items-center gap-1 px-5 text-xl font-semibold normal-case">
          <div>Pokemon</div> <MdCatchingPokemon className="text-2xl" />
        </div>
      </div>
      <div className="p-10 overflow-x-auto">
        <table className="table mt-7">
          <thead className="text-sm">
            <tr>
              <th className="text-center">Photo</th>
              <th className="text-center">Pokemon Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <div className="w-12 h-12 mask mask-squircle">

                  </div>
                </div>
              </td>
              <td className="text-center">dsds</td>
              <td className="text-center"><button className="btn btn-ghost btn-xs">show details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

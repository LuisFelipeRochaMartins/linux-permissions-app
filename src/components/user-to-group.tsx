import type { ChangeEvent, FormEvent } from "react";
import { useState } from 'react'

export function UserToGroup() {
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [resUser, setResUser] = useState("") 

  function handleSubmitUser(e: FormEvent) {
    e.preventDefault()
    setResUser(`usermod -aG ${group}  ${user}`)
  }

  function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(e.target.value);
  }

  function handleGroupChange(e: ChangeEvent<HTMLInputElement>) {
    setGroup(e.target.value);
  }

  return (
    <form onSubmit={handleSubmitUser}>
      <div className="flex flex-col flex-wrap w-[600px] h-[450px] ring-2 ring-black  rounded-lg items-center gap-4 p-5">
        <div className="m-3">
          <h2 className="font-semibold text-3xl">
            Adicionar Usuário em Grupos
          </h2>
        </div>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label className="font-semibold text-lg" htmlFor="user">
            Nome do Usuário
          </label>
          <input
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"
            type="text"
            name="user"
            id="user"
            onChange={handleUserChange}
            placeholder="Insira o nome do Usuário que deseja adicionar"
          />
        </div>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label className="font-semibold text-lg" htmlFor="grupo">
            Nome do Grupo
          </label>
          <input
            list="grupo"
            id="list"
            name="list"
            onChange={handleGroupChange}
            placeholder="Insira o nome do Grupo que deseja adicionar"
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"
          />
          <datalist id="grupo">
            <option value="1">docker</option>
            <option value="2">adm</option>
            <option value="3">cdrom</option>
            <option value="4">sudo</option>
            <option value="5">plugdev</option>
            <option value="6">sambashare</option>
          </datalist>
        </div>
        <button type="submit" className="bg-black w-full h-10 rounded-lg font-bold text-lg mt-auto">
          Enviar
        </button>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label htmlFor="resultado_arquivo">Resultado</label>
          <input 
            type="text"
            name="resultado_arquivo"
            value={resUser}
            disabled
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"/>
        </div>
      </div>
    </form>
  )
}
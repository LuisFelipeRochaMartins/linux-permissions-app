import { useState } from "react"
import type { ChangeEvent, FormEvent } from 'react'

export function CreateUser() {
  const [user, setUser] = useState("")
  const [comando, setComando] = useState("")

  function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(e.target.value)
  }

  function handleSubmitUser(e: FormEvent) {
    e.preventDefault()

    setComando(`sudo useradd ${user}`)
  }

  return (
    <form onSubmit={handleSubmitUser}>
      <div className="flex flex-col flex-wrap w-[600px] h-[450px] ring-2 ring-black  rounded-lg items-center gap-4 p-5">
        <div className="m-3">
          <h2 className="font-semibold text-3xl">
            Criar Usuário
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
        <button type="submit" className="bg-black w-full h-10 rounded-lg font-bold text-lg mt-auto">
          Enviar
        </button>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between ">
          <label htmlFor="resultado_arquivo">Resultado</label>
          <input 
            type="text"
            name="resultado_arquivo"
            value={comando}
            disabled 
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"/>
        </div>
      </div>
    </form> 
  )
}
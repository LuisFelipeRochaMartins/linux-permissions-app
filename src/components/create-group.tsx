import { useState } from "react"
import type { ChangeEvent, FormEvent } from 'react'

export  function CreateGroup() {
  const [group, setGroup] = useState("")
  const [comando, setComando] = useState("")

  function handleGroupChange(e: ChangeEvent<HTMLInputElement>) {
    setGroup(e.target.value)
  }

  function handleSubmitGroup(e: FormEvent) {
    e.preventDefault()

    setComando(`sudo addgroup ${group}`)
  }

  return (
    <form onSubmit={handleSubmitGroup}>
      <div className="flex flex-col flex-wrap w-[600px] h-[450px] ring-2 ring-black  rounded-lg items-center gap-4 p-5">
        <div className="m-3">
          <h2 className="font-semibold text-3xl">
            Criar Grupo
          </h2>
        </div>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label className="font-semibold text-lg" htmlFor="group">
            Nome do Grupo
          </label>
          <input
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"
            type="text"
            name="group"
            id="group"
            onChange={handleGroupChange}
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
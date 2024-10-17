import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react" 

export function GroupPermissions() {
  const [arquivo, setArquivo] = useState("")
  const [resArquivo, setResArquivo] = useState("")

  const [userPermissions, setUserPermissions] = useState({ r: false, w: false, x: false })
  const [groupPermissions, setGroupPermissions] = useState({ r: false, w: false, x: false })
  const [otherPermissions, setOtherPermissions] = useState({ r: false, w: false, x: false })

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setArquivo(e.target.value)
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>, category: string) {
    const { value, checked } = e.target

    if (category === "user") {
      setUserPermissions((prev) => ({ ...prev, [value]: checked }))
    } else if (category === "group") { 
      setGroupPermissions((prev) => ({ ...prev, [value]: checked }))
    } else if (category === "other") {
      setOtherPermissions((prev) => ({ ...prev, [value]: checked }))
    }
  }

  function buildPermissions(permissions: { r: boolean, w: boolean, x: boolean }, category: string) {
    const addPermissions = []
    const removePermissions = []

    if (permissions.r) addPermissions.push("r")
    else removePermissions.push("r")

    if (permissions.w) addPermissions.push("w")
    else removePermissions.push("w")

    if (permissions.x) addPermissions.push("x")
    else removePermissions.push("x")

    const addString = addPermissions.length ? `${category}+${addPermissions.join("")}` : ""
    const removeString = removePermissions.length ? `${category}-${removePermissions.join("")}` : ""

    return [addString, removeString].filter(Boolean).join(",")
  }

  function handleSubmitFile(e: FormEvent) {
    e.preventDefault()

    const user = buildPermissions(userPermissions, "u")
    const group = buildPermissions(groupPermissions, "g")
    const other = buildPermissions(otherPermissions, "o")

    const permissions = [user, group, other].filter(Boolean).join(",")
    const command = `chmod ${permissions} ${arquivo}`

    setResArquivo(command)
    console.log(command)
  }

  return (
    <form onSubmit={handleSubmitFile}>
      <div className="flex flex-col flex-wrap w-[600px] h-[450px] ring-2 ring-black rounded-lg items-center gap-4 p-5">
        <div className="m-3">
          <h2 className="font-semibold text-3xl">Gerenciamento de diretórios</h2>
        </div>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label className="font-semibold text-lg" htmlFor="user">
            Nome do Arquivo
          </label>
          <input
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"
            type="text"
            name="user"
            onChange={handleFileChange}
            id="user"
            placeholder="Insira o nome completo do arquivo"
          />
        </div>

        <div className="flex flex-row gap-2 justify-between">
          <h3>User:</h3>
          <label htmlFor="user-read">Leitura</label>
          <input type="checkbox" value="r" onChange={(e) => handleCheckboxChange(e, "user")} />
          <label htmlFor="user-write">Escrita</label>
          <input type="checkbox" value="w" onChange={(e) => handleCheckboxChange(e, "user")} />
          <label htmlFor="user-execute">Executar</label>
          <input type="checkbox" value="x" onChange={(e) => handleCheckboxChange(e, "user")} />
        </div>

        <div className="flex flex-row gap-2 justify-between">
          <h3>Group:</h3>
          <label htmlFor="group-read">Leitura</label>
          <input type="checkbox" value="r" onChange={(e) => handleCheckboxChange(e, "group")} />
          <label htmlFor="group-write">Escrita</label>
          <input type="checkbox" value="w" onChange={(e) => handleCheckboxChange(e, "group")} />
          <label htmlFor="group-execute">Executar</label>
          <input type="checkbox" value="x" onChange={(e) => handleCheckboxChange(e, "group")} />
        </div>

        <div className="flex flex-row gap-2 justify-between">
          <h3>Other:</h3>
          <label htmlFor="other-read">Leitura</label>
          <input type="checkbox" value="r" onChange={(e) => handleCheckboxChange(e, "other")} />
          <label htmlFor="other-write">Escrita</label>
          <input type="checkbox" value="w" onChange={(e) => handleCheckboxChange(e, "other")} />
          <label htmlFor="other-execute">Executar</label>
          <input type="checkbox" value="x" onChange={(e) => handleCheckboxChange(e, "other")} />
        </div>

        <button type="submit" className="bg-black w-full h-10 rounded-lg font-bold text-lg mt-auto">
          Enviar
        </button>
        <div className="flex flex-row gap-3 ring-2 ring-black p-3 rounded-md items-center w-full justify-between">
          <label htmlFor="resultado_arquivo">Resultado</label>
          <input
            type="text"
            name="resultado_arquivo"
            value={resArquivo}
            disabled
            className="w-[400px] text-lg px-2 focus:outline-none text-black rounded-md font-semibold h-10"
          />
        </div>
      </div>
    </form>
  )
}

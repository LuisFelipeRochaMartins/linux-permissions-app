import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react"; 

export function FilePermissions() {
  const [arquivo, setArquivo] = useState("");
  const [resArquivo, setResArquivo] = useState("");
  const [leitura, setLeitura] = useState(false);
  const [escrita, setEscrita] = useState(false);
  const [executar, setExecutar] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setArquivo(e.target.value);
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    if (id === "leitura") setLeitura(checked);
    if (id === "escrita") setEscrita(checked);
    if (id === "execute") setExecutar(checked);
  }

  function handleSubmitFile(e: FormEvent) {
    e.preventDefault();
    const permissions = `${leitura ? "r" : ""}${escrita ? "w" : ""}${executar ? "x" : ""}`;
    const command = `chmod ${permissions} ${arquivo}`;
    setResArquivo(command);
    console.log(command);
  }

  return (
    <form onSubmit={handleSubmitFile}>
      <div className="flex flex-col flex-wrap w-[600px] h-[450px] ring-2 ring-black rounded-lg items-center gap-4 p-5">
        <div className="m-3">
          <h2 className="font-semibold text-3xl">
            Gerenciamento de diretórios
          </h2>
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
          <label htmlFor="leitura">Leitura:</label>
          <input type="checkbox" value="r" id="leitura" onChange={handleCheckboxChange} />
          <label htmlFor="escrita">Escrita:</label>
          <input type="checkbox" value="w" id="escrita" onChange={handleCheckboxChange} />
          <label htmlFor="execute">Executar:</label>
          <input type="checkbox" value="x" id="execute" onChange={handleCheckboxChange} />
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
  );
}

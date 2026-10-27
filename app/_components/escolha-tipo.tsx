"use client";

import { useState } from "react";

export function EscolhaTipo() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    matricula: "",
    cpf: "",
    tipo: "", // Guardará 'APOIADORA' ou 'AJUDADA'
  });

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviarCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem("");

    try {
      const resposta = await fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        setMensagem("✅ Cadastro realizado com sucesso! Aguarde a aprovação.");
        setDados({
          nome: "",
          email: "",
          telefone: "",
          matricula: "",
          cpf: "",
          tipo: "",
        });
      } else {
        setMensagem("❌ " + (resultado.erro || "Falha ao enviar cadastro."));
      }
    } catch (erro) {
      setMensagem("❌ Erro de conexão com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#B27AB4] px-6 py-8">
      <div className="flex w-full max-w-[600px] flex-col items-center">
        {/* Logo */}
        <div className="mb-6 rounded-full bg-white px-4 py-2 shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
          <span className="font-vastago text-[15px] font-bold">
            <span className="text-[#BE89BD]">Apoia</span>
            <span className="text-[#937FBE]">MulherIFB</span>
          </span>
        </div>

        {/* Card do Formulário Completo */}
        <div className="flex w-full max-w-[380px] flex-col rounded-[18px] bg-white px-7 py-6 shadow-[0_18px_30px_rgba(60,35,60,0.28)]">
          <h1 className="mb-4 text-center font-vastago text-[24px] font-bold leading-none text-[#303030]">
            <span className="text-[#BE89BD]">Eu</span> sou
          </h1>

          <form onSubmit={enviarCadastro} className="flex flex-col gap-3 font-urbanist text-[13px] text-[#303030]">
            {/* Seleção do Perfil */}
            <div className="flex flex-col gap-2 rounded-xl bg-[#FDF8FC] p-3 border border-[#F3E5F2]">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="tipo"
                  required
                  value="APOIADORA"
                  checked={dados.tipo === "APOIADORA"}
                  onChange={() => setDados({ ...dados, tipo: "APOIADORA" })}
                  className="h-[12px] w-[12px] accent-[#BE89BD]"
                />
                <span className="font-bold">Apoiadora</span>
              </label>

              <label className="flex cursor-pointer items-start gap-2">
                <input
                  type="radio"
                  name="tipo"
                  required
                  value="AJUDADA"
                  checked={dados.tipo === "AJUDADA"}
                  onChange={() => setDados({ ...dados, tipo: "AJUDADA" })}
                  className="mt-[2px] h-[12px] w-[12px] accent-[#BE89BD]"
                />
                <span className="font-bold leading-tight">
                  Mulher em situação vulnerável
                </span>
              </label>
            </div>

            {/* Campos de Dados Pessoais */}
            <input
              type="text"
              required
              placeholder="Nome completo"
              value={dados.nome}
              onChange={(e) => setDados({ ...dados, nome: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-[#FBF9FC] p-2.5 outline-none focus:border-[#BE89BD]"
            />

            <input
              type="email"
              required
              placeholder="E-mail"
              value={dados.email}
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-[#FBF9FC] p-2.5 outline-none focus:border-[#BE89BD]"
            />

            <input
              type="tel"
              placeholder="Telefone (WhatsApp)"
              value={dados.telefone}
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-[#FBF9FC] p-2.5 outline-none focus:border-[#BE89BD]"
            />

            {/* Bloco de Documento (Exigência do Backend: Matrícula OU CPF) */}
            <div className="flex flex-col gap-2 rounded-md border border-dashed border-[#BE89BD] bg-[#FAEFF9] p-3">
              <span className="text-[11px] font-bold text-[#BE89BD] text-center">
                INFORME PELO MENOS UM DOCUMENTO:
              </span>
              
              <input
                type="text"
                placeholder="Matrícula do IFB"
                value={dados.matricula}
                onChange={(e) => setDados({ ...dados, matricula: e.target.value })}
                className="w-full rounded-md border border-gray-200 bg-white p-2 text-[12px] outline-none focus:border-[#BE89BD]"
              />

              <div className="text-center text-[10px] font-bold text-gray-400">OU</div>

              <input
                type="text"
                placeholder="CPF"
                value={dados.cpf}
                onChange={(e) => setDados({ ...dados, cpf: e.target.value })}
                className="w-full rounded-md border border-gray-200 bg-white p-2 text-[12px] outline-none focus:border-[#BE89BD]"
              />
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              disabled={carregando}
              className="
                mx-auto
                mt-3
                flex
                h-[34px]
                min-w-[110px]
                items-center
                justify-center
                rounded-full
                bg-[#BE89BD]
                px-6
                font-vastago
                text-[12px]
                font-bold
                text-white
                shadow-[0_5px_12px_rgba(190,137,189,0.40)]
                transition
                hover:-translate-y-[1px]
                hover:bg-[#AA75A9]
                active:scale-95
                disabled:opacity-60
              "
            >
              {carregando ? "Enviando..." : "Enviar"}
            </button>

            {/* Mensagem de Feedback */}
            {mensagem && (
              <p
                className={`mt-2 text-center text-[12px] font-bold ${
                  mensagem.includes("✅") ? "text-green-600" : "text-red-500"
                }`}
              >
                {mensagem}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
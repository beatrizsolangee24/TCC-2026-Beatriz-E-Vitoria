
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContatoApoiadoraPage() {
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const router = useRouter();

  function enviarMensagem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!mensagem.trim()) return;

    // Salva a mensagem localmente para o protótipo.
    localStorage.setItem("mensagemContatoApoiadora", mensagem);
    setEnviado(true);
    setMensagem("");
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="flex h-[59px] items-center justify-between border-b border-[#3D3D3D] px-8 md:px-12">
        <div className="font-vastago text-[14px] font-bold text-[#303030]">
          Olá, <span className="text-[#BE89BD]">Ana Paula</span>
        </div>

        <button
          type="button"
          onClick={() => router.push("/apoiadora")}
          className="rounded-full bg-[#BE89BD] px-5 py-2 font-vastago text-[12px] font-bold text-white shadow-md hover:bg-[#AA75A9]"
        >
          Voltar
        </button>
      </header>

      <section className="mx-auto w-full max-w-[650px] px-6 py-16">
        <h1 className="font-vastago text-[28px] font-bold text-[#BE89BD]">
          Entre em contato
        </h1>

        <p className="mt-4 font-urbanist text-[16px] text-[#303030]">
          Tem alguma dúvida ou gostaria de falar conosco? Escreva sua
          mensagem no campo abaixo.
        </p>

        <form onSubmit={enviarMensagem} className="mt-7">
          <label
            htmlFor="mensagem"
            className="font-urbanist text-[14px] font-semibold text-[#303030]"
          >
            Sua mensagem
          </label>

          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
            required
            rows={6}
            className="mt-2 w-full resize-y rounded-[15px] border border-[#BE89BD] p-4 font-urbanist text-[14px] text-[#303030] outline-none focus:ring-2 focus:ring-[#BE89BD]/30"
          />

          <button
            type="submit"
            className="mt-5 h-[40px] rounded-full bg-[#BE89BD] px-8 font-vastago text-[13px] font-bold text-white shadow-md transition hover:bg-[#AA75A9]"
          >
            Enviar mensagem
          </button>

          {enviado && (
            <p className="mt-4 font-urbanist text-[14px] text-[#937FBE]">
              Mensagem registrada no protótipo com sucesso!
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

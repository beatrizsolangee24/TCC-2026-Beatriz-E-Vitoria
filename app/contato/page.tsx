
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContatoPage() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem() {
    if (!mensagem.trim()) {
      alert("Por favor, escreva sua mensagem antes de enviar.");
      return;
    }

    const destinatario = "beatrizsolangeedesign@gmail.com";
    const assunto = "Contato pelo ApoiaMulherIFB";

    const corpo =
      "Olá, equipe do ApoiaMulherIFB!\n\n" +
      "Entro em contato por meio da página de contato do projeto.\n\n" +
      "Minha mensagem:\n" +
      mensagem.trim() +
      "\n\nAtenciosamente,\nMaria Júlia";

    const mailto =
      "mailto:" +
      destinatario +
      "?subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpo);

    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header
        className="
          flex h-[59px] w-full items-center
          justify-between border-b border-[#3D3D3D]
          px-8 md:px-12
        "
      >
        {/* SAUDAÇÃO */}
        <div className="font-vastago text-[16px] font-bold text-[#303030]">
          Olá, <span className="text-[#BE89BD]">Maria Júlia</span>
        </div>

        {/* MENU */}
        <button
          type="button"
          onClick={() => router.push("/ajuda")}
          className="
            flex h-[34px] min-w-[65px] items-center
            justify-center rounded-full bg-[#BE89BD]
            px-5 font-vastago text-[13px] font-bold
            text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)]
            transition hover:bg-[#AA75A9]
          "
        >
          Menu
        </button>
      </header>

      {/* CONTEÚDO */}
      <section
        className="
          flex min-h-[calc(100vh-59px)]
          items-center justify-center px-6 py-10
        "
      >
        <div className="w-full max-w-[760px]">
          {/* TEXTO */}
          <p
            className="
              mb-5 font-urbanist text-[17px]
              font-medium leading-relaxed text-[#303030]
            "
          >
            Caso tenha alguma dúvida, nos envie uma mensagem no campo abaixo:
          </p>

          {/* CAMPO DE MENSAGEM */}
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem..."
            aria-label="Digite sua mensagem"
            rows={8}
            maxLength={3000}
            className="
              min-h-[220px] w-full resize-y
              rounded-[15px] border border-[#BE89BD]
              bg-white px-5 py-5 font-urbanist
              text-[16px] leading-relaxed text-[#303030]
              outline-none placeholder:text-[#777777]
              focus:ring-2 focus:ring-[#BE89BD]/30
            "
          />

          {/* ENVIAR */}
          <button
            type="button"
            onClick={enviarMensagem}
            className="
              mx-auto mt-6 flex h-[42px] min-w-[100px]
              items-center justify-center rounded-full
              bg-[#937FBE] px-7 font-vastago
              text-[13px] font-bold text-white
              shadow-[0_4px_8px_rgba(147,127,190,0.25)]
              transition hover:bg-[#806AB0] active:scale-95
            "
          >
            Enviar
          </button>
        </div>
      </section>
    </main>
  );
}

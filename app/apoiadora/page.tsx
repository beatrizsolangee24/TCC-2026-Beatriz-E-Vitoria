
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApoiadoraPage() {
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

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
        <div className="font-vastago text-[14px] font-bold text-[#303030]">
          Olá, <span className="text-[#BE89BD]">Ana Paula</span>
        </div>

        {/* BOTÃO MENU */}
        <button
          type="button"
          onClick={() => setMenuAberto(true)}
          className="
            flex h-[30px] min-w-[60px] items-center
            justify-center rounded-full bg-[#BE89BD]
            px-4 font-vastago text-[12px] font-bold
            text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)]
            transition hover:bg-[#AA75A9]
          "
        >
          Menu
        </button>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <section
        className="
          flex min-h-[calc(100vh-59px)]
          items-center justify-center px-6
        "
      >
        <h1
          className="
            text-center font-vastago text-[42px]
            font-bold leading-[1.02] text-[#303030]
            md:text-[58px]
          "
        >
          Você{" "}
          <span className="text-[#BE89BD]">
            nunca mais
          </span>
          <br />
          estará sozinha
        </h1>
      </section>

      {/* FUNDO AO ABRIR O MENU */}
      {menuAberto && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 bg-black/10"
          onClick={() => setMenuAberto(false)}
        />
      )}

      {/* MENU LATERAL */}
      <aside
        className={`
          fixed right-0 top-0 z-50 h-screen w-[160px]
          bg-[#FAFAFA] px-5 py-10
          shadow-[-8px_0_25px_rgba(0,0,0,0.12)]
          transition-transform duration-300
          ${menuAberto ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="mb-8 whitespace-nowrap font-vastago text-[12px] font-bold">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>

        {/* LINKS DO MENU */}
        <nav className="flex flex-col gap-5">
          {/* PERFIS */}
          <button
            type="button"
            onClick={() => router.push("/perfis")}
            className="
              flex items-center gap-2
              whitespace-nowrap font-urbanist
              text-[12px] font-medium text-[#BE89BD]
              transition hover:text-[#937FBE]
            "
          >
            <span className="text-[18px]">👥</span>
            Perfis
          </button>

          {/* CONTATO */}
          <button
            type="button"
            onClick={() => router.push("/contato-apoiadora")}
            className="
              flex items-center gap-2
              whitespace-nowrap font-urbanist
              text-[12px] font-medium text-[#BE89BD]
              transition hover:text-[#937FBE]
            "
          >
            <span className="text-[18px] font-bold">📞</span>
            Contato
          </button>

          {/* MEU PERFIL */}
          <button
            type="button"
            onClick={() => router.push("/perfil-apoiadora")}
            className="
              flex h-[25px] items-center justify-center
              gap-2 rounded-full bg-[#BE89BD]
              font-urbanist text-[12px] font-medium
              text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)]
              transition hover:bg-[#AA75A9]
            "
          >
            <span className="text-[18px]">👩🏽</span>
            Meu perfil
          </button>
        </nav>
      </aside>
    </main>
  );
}

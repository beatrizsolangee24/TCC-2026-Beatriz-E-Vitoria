"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AjudaPage() {
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();


  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header
        className="
          flex
          h-[59px]
          w-full
          items-center
          justify-between
          border-b
          border-[#3D3D3D]
          px-8
          md:px-12
        "
      >

        {/* SAUDAÇÃO */}
        <div className="font-vastago text-[14px] font-bold text-[#303030]">
          Olá,{" "}
          <span className="text-[#BE89BD]">
            Maria Júlia
          </span>
        </div>


        {/* LADO DIREITO */}
        <div className="flex items-center gap-4">

          {/* PERFIL */}
          <button
  type="button"
  onClick={() => window.location.href = "/perfil"}
  className="
    flex
    h-[28px]
    w-[28px]
    items-center
    justify-center
    rounded-full
    bg-[#BE89BD]
    text-white
    transition
    hover:opacity-80
  "
>
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      fill="currentColor"
    />
    <path
      d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4Z"
      fill="currentColor"
    />
  </svg>
</button>

          {/* MENU */}
          <button
              type="button"
              onClick={() => setMenuAberto(true)}
              className="
                flex
                h-[30px]
                min-w-[60px]
                items-center
                justify-center
                rounded-full
                bg-[#BE89BD]
                px-4
                font-vastago
                text-[12px]
                font-bold
                text-white
                shadow-[0_4px_8px_rgba(190,137,189,0.25)]
                transition
                hover:bg-[#AA75A9]
              "
            >
  Menu
</button>

        </div>
      </header>


      {/* CONTEÚDO PRINCIPAL */}
      <section
        className="
          flex
          min-h-[calc(100vh-59px)]
          items-center
          justify-center
          px-6
        "
      >

        <h1
          className="
            text-center
            font-vastago
            text-[42px]
            font-bold
            leading-[1.02]
            text-[#303030]
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


      {/* FUNDO ESCURO AO ABRIR O MENU */}
      {menuAberto && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/10
          "
          onClick={() => setMenuAberto(false)}
        />
      )}


      {/* MENU LATERAL */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          h-screen
          w-[160px]
          bg-white
          px-5
          py-10
          shadow-[-8px_0_25px_rgba(0,0,0,0.12)]
          transition-transform
          duration-300
          ${menuAberto ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* LOGO */}
        <div
          className="
            mb-8
            font-vastago
            text-[12px]
            font-bold
          "
        >
          <span className="text-[#BE89BD]">
            Apoia
          </span>
          <span className="text-[#937FBE]">
            MulherIFB
          </span>
        </div>


        {/* LINKS */}
        <nav className="flex flex-col gap-5">
<a
  href="/status"
  className="
    flex
    items-center
    gap-2
    font-urbanist
    text-[12px]
    font-medium
    text-[#BE89BD]
    transition
    hover:text-[#937FBE]
  "
>
  <span className="text-[20px]  font-bold">⏳</span>
  Meu status
</a>


         <a
  href="/contato"
  className="
    flex
    items-center
    gap-2
    font-urbanist
    text-[12px]
    font-medium
    text-[#BE89BD]
    transition
    hover:text-[#937FBE]
  "
>
  <span className="text-[18px]  font-bold">📞</span>
  Contato
</a>

<Link
  href="/perfil"
  className="
    flex
    h-[25px]
    items-center
    rounded-full
    bg-[#BE89BD]
    px-3
    font-urbanist
    text-[13px]
    text-white
    transition
    hover:bg-[#AA75A9]
  "
>
  👩🏽 Meu perfil
</Link>

        </nav>

      </aside>

    </main>
  );
}
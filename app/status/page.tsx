"use client";

import { useRouter } from "next/navigation";

export default function StatusPage() {
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

        {/* MENU */}
        <button
          type="button"
          onClick={() => router.push("/ajuda")}
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
      </header>


      {/* CONTEÚDO */}
      <section
        className="
          mx-auto
          flex
          min-h-[calc(100vh-59px)]
          w-full
          max-w-[900px]
          flex-col
          px-8
          pt-32
        "
      >

        {/* TÍTULO */}
       <h1 className="font-vastago text-[20px] font-bold text-[#303030]">
  Veja abaixo o status do seu progresso
</h1>


        {/* STATUS */}
        <div
          className="
            mt-6
            flex
            h-[30px]
            w-full
            items-center
            rounded-[4px]
            border
            border-[#BE89BD]
            bg-[#EADCEA]
            px-4
            font-urbanist
            text-[13px]
            text-[#303030]
          "
        >

          {/* ÍCONE */}
          <span
            className="
              mr-3
              text-[15px]
              text-[#BE89BD]
            "
          >
            ◷
          </span>

          Análise documental

        </div>

      </section>

    </main>
  );
}
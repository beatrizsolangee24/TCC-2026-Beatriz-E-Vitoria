"use client";

import { useRouter } from "next/navigation";

export default function ProjetoPage() {
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
        {/* LOGO */}
        <div className="font-vastago text-[18px] font-bold">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>

        {/* VOLTAR */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            flex
            h-[30px]
            items-center
            justify-center
            rounded-full
            bg-[#BE89BD]
            px-5
            font-vastago
            text-[12px]
            font-bold
            text-white
            shadow-[0_4px_8px_rgba(190,137,189,0.25)]
            transition
            hover:bg-[#AA75A9]
          "
        >
          Voltar
        </button>
      </header>


      {/* CONTEÚDO */}
      <section className="mx-auto w-full max-w-[1000px] px-8 py-20">

        {/* TÍTULO */}
        <h1
          className="
            font-vastago
            text-[42px]
            font-bold
            leading-[1.05]
            text-[#303030]
            md:text-[52px]
          "
        >
          Sobre o{" "}
          <span className="text-[#BE89BD]">
            Apoia MulherIFB
          </span>
        </h1>


        {/* TEXTO */}
        <div className="mt-10 max-w-[800px]">

          <p
            className="
              font-urbanist
              text-[16px]
              font-medium
              leading-[1.5]
              text-[#303030]
            "
          >
            O Apoia MulherIFB é um projeto criado para fortalecer
            a rede de apoio entre mulheres do Instituto Federal de
            Brasília.
          </p>

          <p
            className="
              mt-6
              font-urbanist
              text-[16px]
              font-medium
              leading-[1.5]
              text-[#303030]
            "
          >
            A plataforma busca conectar mulheres que precisam de
            apoio com pessoas dispostas a ajudar, criando um espaço
            de acolhimento, segurança e conexão.
          </p>

          <p
            className="
              mt-6
              font-urbanist
              text-[16px]
              font-medium
              leading-[1.5]
              text-[#303030]
            "
          >
            Por meio do projeto, é possível solicitar ou oferecer
            diferentes tipos de auxílio, como alimentação, materiais,
            roupas e outros recursos que possam contribuir para o
            bem-estar das mulheres.
          </p>

        </div>


        {/* COMO FUNCIONA */}
        <div className="mt-16">

          <h2
            className="
              font-vastago
              text-[30px]
              font-bold
              text-[#BE89BD]
            "
          >
            Como funciona?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div
              className="
                rounded-[18px]
                border
                border-[#BE89BD]
                bg-white
                p-6
                shadow-[0_8px_20px_rgba(48,48,48,0.10)]
              "
            >
              <h3 className="font-vastago text-[18px] text-[#303030]">
                01. Cadastro
              </h3>

              <p className="mt-3 font-urbanist text-[14px] leading-[1.4] text-[#303030]">
                A mulher realiza seu cadastro e informa como
                podemos ajudá-la.
              </p>
            </div>


            <div
              className="
                rounded-[18px]
                border
                border-[#BE89BD]
                bg-white
                p-6
                shadow-[0_8px_20px_rgba(48,48,48,0.10)]
              "
            >
              <h3 className="font-vastago text-[18px] text-[#303030]">
                02. Avaliação
              </h3>

              <p className="mt-3 font-urbanist text-[14px] leading-[1.4] text-[#303030]">
                Os dados enviados são analisados para compreender
                a situação e verificar como o projeto pode ajudar.
              </p>
            </div>


            <div
              className="
                rounded-[18px]
                border
                border-[#BE89BD]
                bg-white
                p-6
                shadow-[0_8px_20px_rgba(48,48,48,0.10)]
              "
            >
              <h3 className="font-vastago text-[18px] text-[#303030]">
                03. Apoio
              </h3>

              <p className="mt-3 font-urbanist text-[14px] leading-[1.4] text-[#303030]">
                Após a avaliação, a participante recebe um retorno
                sobre sua solicitação e os próximos passos.
              </p>
            </div>

          </div>

        </div>


        {/* BOTÃO */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            mt-12
            flex
            h-[40px]
            items-center
            justify-center
            rounded-full
            bg-[#BE89BD]
            px-8
            font-vastago
            text-[14px]
            font-bold
            text-white
            shadow-[0_4px_12px_rgba(190,137,189,0.35)]
            transition
            hover:-translate-y-[1px]
            hover:bg-[#AA75A9]
          "
        >
          Voltar para o início
        </button>

      </section>

    </main>
  );
}
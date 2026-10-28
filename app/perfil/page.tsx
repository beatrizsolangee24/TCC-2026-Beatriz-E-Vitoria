"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PerfilPage() {
  const router = useRouter();

  const [descricao, setDescricao] = useState(
    "Olá eu me chamo Maria Júlia Queiroz, tenho 19 anos e sou estudante do IF campus São Sebastião. Gostaria de pedir ajuda com material escolar para meus filhos e ajuda com alimentos."
  );

  const [editando, setEditando] = useState(false);

  // Carrega o texto salvo anteriormente
  useEffect(() => {
    const descricaoSalva = localStorage.getItem("descricaoPerfil");

    if (descricaoSalva) {
      setDescricao(descricaoSalva);
    }
  }, []);

  // Salva o texto
  function salvarDescricao() {
    localStorage.setItem("descricaoPerfil", descricao);
    setEditando(false);
  }

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
        <div className="font-vastago text-[18px] font-bold text-[#303030]">
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


      {/* CONTEÚDO DO PERFIL */}
      <section className="mx-auto w-full max-w-[900px] px-8 py-14">

        {/* DADOS PRINCIPAIS */}
        <div className="flex items-center gap-5">

          {/* ÍCONE DE PERFIL */}
          <div
            className="
              flex
              h-[62px]
              w-[62px]
              items-center
              justify-center
              rounded-full
              bg-[#BE89BD]
              text-white
            "
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
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
          </div>


          {/* INFORMAÇÕES */}
          <div className="font-urbanist text-[#303030]">

            <h1 className="font-vastago text-[15px] font-bold">
              Maria Júlia Queiroz
            </h1>

            <p className="mt-1 text-[12px]">
              Idade: 19 anos
            </p>

            <div
              className="
                mt-2
                w-fit
                rounded-full
                bg-[#BE89BD]
                px-2
                py-[3px]
                font-urbanist
                text-[12px]
                text-white
              "
            >
              Tipo de perfil: Participante
            </div>

          </div>

        </div>


        {/* DESCRIÇÃO */}
        <div className="mx-auto mt-12 max-w-[610px]">

          <p
            className="
              mb-3
              font-urbanist
              text-[13px]
              font-medium
              leading-[1.3]
              text-[#303030]
            "
          >
            Aqui está a seção sobre você e como precisa ser ajudada,
            você pode atualizá-lo quando quiser.
          </p>


          {/* CAIXA DE TEXTO */}
          <div className="relative">

            {editando ? (

              /* MODO EDIÇÃO */
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                autoFocus
                className="
                  min-h-[105px]
                  w-full
                  resize-none
                  rounded-[12px]
                  border
                  border-[#BE89BD]
                  bg-white
                  px-5
                  py-4
                  pr-10
                  font-urbanist
                  text-[13px]
                  leading-[1.35]
                  text-[#303030]
                  outline-none
                  focus:ring-2
                  focus:ring-[#BE89BD]/30
                "
              />

            ) : (

              /* MODO VISUALIZAÇÃO */
              <div
                className="
                  min-h-[105px]
                  w-full
                  rounded-[12px]
                  border
                  border-[#BE89BD]
                  bg-white
                  px-5
                  py-4
                  pr-10
                  font-urbanist
                  text-[13px]
                  leading-[1.35]
                  text-[#303030]
                "
              >
                {descricao}
              </div>

            )}


            {/* BOTÃO DE EDITAR */}
            <button
              type="button"
              onClick={() => setEditando(true)}
              className="
                absolute
                right-3
                top-3
                flex
                h-[27px]
                w-[27px]
                items-center
                justify-center
                rounded-full
                border
                border-[#BE89BD]
                text-[20px]
                text-[#BE89BD]
                transition
                hover:bg-[#BE89BD]
                hover:text-white
              "
            >
              ✎
            </button>

          </div>


          {/* BOTÃO SALVAR */}
          {editando && (
            <button
              type="button"
              onClick={salvarDescricao}
              className="
                mx-auto
                mt-5
                flex
                h-[32px]
                min-w-[90px]
                items-center
                justify-center
                rounded-full
                bg-[#BE89BD]
                px-5
                font-vastago
                text-[10px]
                font-bold
                text-white
                shadow-[0_5px_12px_rgba(190,137,189,0.35)]
                transition
                hover:bg-[#AA75A9]
              "
            >
              Salvar
            </button>
          )}

        </div>

      </section>

    </main>
  );
}
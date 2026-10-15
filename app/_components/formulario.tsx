"use client";

import { useState } from "react";

export function Formulario() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome || !tipo || !email || !telefone) {
      return;
    }

    setEnviado(true);
  }

  return (
    <section
      id="participar"
      className="w-full bg-[#F8F8F8] px-6 py-24"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1000px]
          flex-col
          overflow-hidden
          rounded-[22px]
          border
          border-[#BE89BD]
          bg-white
          px-8
          py-10
          shadow-[0_18px_40px_rgba(48,48,48,0.20)]
          md:flex-row
          md:px-12
          md:py-12
        "
      >

        {/* LADO ESQUERDO */}
        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            pr-0
            md:pr-12
          "
        >
          <h2
            className="
              font-vastago
              text-[36px]
              font-bold
              leading-[1.05]
              text-[#303030]
              lg:text-[42px]
            "
          >
            <span className="bg-[#BE89BD] px-2 text-white">
              Entre em
            </span>
            <br />
            <span className="bg-[#BE89BD] px-2 text-white">
              contato conosco
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[390px]
              font-urbanist
              text-[16px]
              font-medium
              leading-[1.35]
              text-[#303030]
            "
          >
            Deixe seus dados para entrarmos em contato.
            <br />
            Seja para receber ajuda ou apoiar outra mulher,
            faremos isso com cuidado e total privacidade.
          </p>
        </div>


        {/* FORMULÁRIO */}
        <form
          onSubmit={enviarFormulario}
          className="
            mt-10
            flex
            flex-1
            flex-col
            justify-center
            md:mt-0
            md:pl-8
          "
        >

          {/* NOME */}
          <div>
            <label
              htmlFor="nome"
              className="
                mb-1
                block
                font-urbanist
                text-[15px]
                font-medium
                text-[#303030]
              "
            >
              Nome
            </label>

            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="
                h-[36px]
                w-full
                rounded-[7px]
                border
                border-[#D8D8D8]
                bg-[#F3F3F3]
                px-3
                font-urbanist
                text-[12px]
                text-[#303030]
                outline-none
                focus:border-[#BE89BD]
                focus:ring-2
                focus:ring-[#BE89BD]/20
              "
            />
          </div>


          {/* EU QUERO SER */}
          <div className="mt-4">
            <label
              htmlFor="tipo"
              className="
                mb-1
                block
                font-urbanist
                text-[15px]
                font-medium
                text-[#303030]
              "
            >
              Eu quero ser
            </label>

            <select
              id="tipo"
              required
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="
                h-[36px]
                w-full
                rounded-[7px]
                border
                border-[#D8D8D8]
                bg-[#F3F3F3]
                px-3
                font-urbanist
                text-[12px]
                text-[#303030]
                outline-none
                focus:border-[#BE89BD]
                focus:ring-2
                focus:ring-[#BE89BD]/20
              "
            >
              <option value="">
                Selecione uma opção
              </option>

              <option value="apoiadora">
                Apoiadora
              </option>

              <option value="ajuda">
                Mulher que precisa de ajuda
              </option>
            </select>
          </div>


          {/* EMAIL */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="
                mb-1
                block
                font-urbanist
                text-[15px]
                font-medium
                text-[#303030]
              "
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="
                h-[36px]
                w-full
                rounded-[7px]
                border
                border-[#D8D8D8]
                bg-[#F3F3F3]
                px-3
                font-urbanist
                text-[12px]
                text-[#303030]
                outline-none
                focus:border-[#BE89BD]
                focus:ring-2
                focus:ring-[#BE89BD]/20
              "
            />
          </div>


          {/* TELEFONE */}
          <div className="mt-4">
            <label
              htmlFor="telefone"
              className="
                mb-1
                block
                font-urbanist
                text-[15px]
                font-medium
                text-[#303030]
              "
            >
              Telefone
            </label>

            <input
              id="telefone"
              type="tel"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite seu telefone"
              className="
                h-[36px]
                w-full
                rounded-[7px]
                border
                border-[#D8D8D8]
                bg-[#F3F3F3]
                px-3
                font-urbanist
                text-[12px]
                text-[#303030]
                outline-none
                focus:border-[#BE89BD]
                focus:ring-2
                focus:ring-[#BE89BD]/20
              "
            />
          </div>


          {/* BOTÃO */}
          <button
            type="submit"
            className="
              mx-auto
              mt-7
              flex
              h-[40px]
              w-fit
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
              active:scale-95
            "
          >
            Enviar
          </button>

        </form>

      </div>


      {/* POP-UP */}
      {enviado && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            px-6
          "
        >
          <div
            className="
              flex
              w-full
              max-w-[270px]
              flex-col
              items-center
              justify-center
              rounded-[28px]
              bg-[#BE89BD]
              px-7
              py-8
              text-center
              shadow-[0_20px_50px_rgba(0,0,0,0.25)]
            "
          >

            <p
              className="
                font-vastago
                text-[17px]
                font-bold
                leading-[1.15]
                text-white
              "
            >
              Entraremos em contato
              <br />
              em breve pelo seu email!
            </p>

            <span
              className="
                mt-4
                text-[25px]
                leading-none
                text-white
              "
            >
              ☺
            </span>

            <button
              type="button"
              onClick={() => setEnviado(false)}
              className="
                mt-5
                rounded-full
                bg-white/20
                px-5
                py-2
                font-vastago
                text-[15px]
                font-bold
                text-white
                transition
                hover:bg-white/30
              "
            >
              Fechar
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function EscolhaTipo() {
  const [tipo, setTipo] = useState("");
  const router = useRouter();

  function continuar() {
  if (!tipo) return;

  localStorage.setItem("tipoUsuario", tipo);
  router.push("/login");
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#B27AB4] px-6">
      
      <div className="flex w-full max-w-[600px] flex-col items-center">

        {/* Logo */}
        <div className="mb-7 rounded-full bg-white px-4 py-2 shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
          <span className="font-vastago text-[15px] font-bold">
            <span className="text-[#BE89BD]">Apoia</span>
            <span className="text-[#937FBE]">MulherIFB</span>
          </span>
        </div>

        {/* Card */}
        <div className="flex w-full max-w-[225px] flex-col rounded-[18px] bg-white px-9 py-7 shadow-[0_18px_30px_rgba(60,35,60,0.28)]">

          <h1 className="mb-5 text-center font-vastago text-[26px] font-bold leading-none text-[#303030]">
            <span className="text-[#BE89BD]">Eu</span> sou
          </h1>

          {/* Apoiadora */}
          <label className="flex cursor-pointer items-start gap-2 font-urbanist text-[14px] text-[#303030]">
            <input
              type="radio"
              name="tipo"
              value="apoiadora"
              checked={tipo === "apoiadora"}
              onChange={() => setTipo("apoiadora")}
              className="mt-[2px] h-[12px] w-[12px] accent-[#BE89BD]"
            />

            <span>Apoiadora</span>
          </label>

          {/* Mulher vulnerável */}
          <label className="mt-5 flex cursor-pointer items-start gap-2 font-urbanist text-[14px] leading-[1.2] text-[#303030]">
            <input
              type="radio"
              name="tipo"
              value="vulneravel"
              checked={tipo === "vulneravel"}
              onChange={() => setTipo("vulneravel")}
              className="mt-[2px] h-[12px] w-[12px] accent-[#BE89BD]"
            />

            <span>
              Mulher em situação
              <br />
              vulnerável
            </span>
          </label>

          {/* ENVIAR */}
          <button
            type="button"
            onClick={continuar}
            className="
              mx-auto
              mt-7
              flex
              h-[32px]
              min-w-[90px]
              items-center
              justify-center
              rounded-full
              bg-[#BE89BD]
              px-6
              font-vastago
              text-[11px]
              font-bold
              text-white
              shadow-[0_5px_12px_rgba(190,137,189,0.40)]
              transition
              hover:-translate-y-[1px]
              hover:bg-[#AA75A9]
              active:scale-95
            "
          >
            Enviar
          </button>

        </div>
      </div>
    </main>
  );
}
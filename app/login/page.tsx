
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function entrar() {
    setErroEmail("");
    setErroSenha("");

    let valido = true;

    if (!email.trim()) {
      setErroEmail("Informe seu e-mail.");
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErroEmail("Digite um e-mail válido.");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Informe sua senha.");
      valido = false;
    }

    if (!valido) return;

    const tipo = localStorage.getItem("tipoUsuario");

    if (tipo === "apoiadora") {
      router.push("/apoiadora");
    } else if (tipo === "vulneravel") {
      router.push("/ajuda");
    } else {
      router.push("/escolha");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#B27AB4] px-6">
      <div className="flex w-full max-w-[600px] flex-col items-center">
        {/* LOGO */}
        <div className="mb-7 rounded-full bg-white px-4 py-2 shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
          <span className="font-vastago text-[15px]">
            <span className="text-[#BE89BD]">Apoia</span>
            <span className="text-[#937FBE]">MulherIFB</span>
          </span>
        </div>

        {/* CARD */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            entrar();
          }}
          className="flex w-full max-w-[260px] flex-col rounded-[18px] bg-white px-6 py-10 shadow-[0_18px_30px_rgba(60,35,60,0.28)]"
        >
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-urbanist text-[14px] text-[#303030]"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErroEmail("");
              }}
              aria-invalid={!!erroEmail}
              className="h-[35px] w-full rounded-[5px] bg-[#E9E9E9] px-2 font-urbanist text-[14px] text-[#303030] outline-none focus:ring-2 focus:ring-[#BE89BD]"
            />

            {erroEmail && (
              <p className="mt-1 font-urbanist text-[12px] text-red-600">
                {erroEmail}
              </p>
            )}
          </div>

          {/* SENHA */}
          <div className="mt-4">
            <label
              htmlFor="senha"
              className="mb-1 block font-urbanist text-[14px] text-[#303030]"
            >
              Senha
            </label>

            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="current-password"
              required
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setErroSenha("");
              }}
              aria-invalid={!!erroSenha}
              className="h-[35px] w-full rounded-[5px] bg-[#E9E9E9] px-2 font-urbanist text-[14px] text-[#303030] outline-none focus:ring-2 focus:ring-[#BE89BD]"
            />

            {erroSenha && (
              <p className="mt-1 font-urbanist text-[12px] text-red-600">
                {erroSenha}
              </p>
            )}
          </div>

          {/* ENTRAR */}
          <button
            type="submit"
            className="mx-auto mt-6 rounded-full bg-[#BE89BD] px-6 py-2 font-vastago text-[11px] font-bold text-white shadow-[0_5px_12px_rgba(190,137,189,0.40)] transition hover:-translate-y-[1px] hover:bg-[#AA75A9]"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}

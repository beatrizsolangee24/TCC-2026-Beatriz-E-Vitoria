"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  // O estado agora guarda qual aba de perfil está selecionada
  const [tipo, setTipo] = useState("AJUDADA"); 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    // Validações de frontend
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErro("Por favor, digite um e-mail válido.");
      return;
    }
    if (!senha.trim()) {
      setErro("Por favor, informe sua senha.");
      return;
    }

    setCarregando(true);

    try {
      // 1. Faz o pedido à nova rota de API de login
      const resposta = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        // 2. Sucesso! Pega o tipo de perfil diretamente do banco de dados
        const perfilBanco = resultado.tipoReal;
        
        // Salva os dados básicos da sessão no navegador
        localStorage.setItem("tipoUsuario", perfilBanco);
        localStorage.setItem("usuarioId", resultado.usuario.id);

        // 3. Redireciona com base no tipo real da usuária
        // (Isso impede que uma Ajudada entre no painel Admin apenas clicando na aba errada)
        if (perfilBanco === "APOIADORA") {
          router.push("/apoiadora");
        } else if (perfilBanco === "AJUDADA") {
          router.push("/ajuda");
        } else if (perfilBanco === "ADMIN") {
          router.push("/admin");
        }
      } else {
        // Exibe "E-mail ou senha incorretos"
        setErro(resultado.erro);
      }
    } catch (error) {
      setErro("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#F8F9FA] px-4 py-8 overflow-hidden">
      
      {/* Background Decorativo no Topo */}
      <div className="absolute top-0 left-0 h-[35vh] w-full bg-gradient-to-b from-[#BE89BD]/20 to-transparent"></div>

      <div className="relative z-10 flex w-full max-w-[420px] flex-col items-center">
        
        {/* LOGO */}
        <div className="mb-6 flex items-center justify-center rounded-2xl bg-white px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100">
          <span className="font-vastago text-[18px] font-bold">
            <span className="text-[#BE89BD]">Apoia</span>
            <span className="text-[#937FBE]">MulherIFB</span>
          </span>
        </div>

        {/* CARD DE LOGIN */}
        <div className="w-full rounded-[24px] bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 sm:p-8">
          
          <div className="mb-6 text-center">
            <h1 className="font-vastago text-[24px] font-bold text-[#303030]">
              Acessar Conta
            </h1>
            <p className="mt-1 font-urbanist text-[14px] text-[#707070]">
              Selecione o seu perfil e faça login
            </p>
          </div>

          <form onSubmit={entrar} className="flex flex-col gap-5">
            
            {/* SELETOR DE PERFIS (Segmented Control) */}
            <div className="flex flex-col gap-1 rounded-xl bg-gray-100 p-1 sm:flex-row">
              <button
                type="button"
                onClick={() => { setTipo("AJUDADA"); setErro(""); }}
                className={`flex-1 rounded-lg py-2 font-urbanist text-[13px] font-bold transition-all ${
                  tipo === "AJUDADA" ? "bg-white text-[#BE89BD] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Preciso de Ajuda
              </button>
              <button
                type="button"
                onClick={() => { setTipo("APOIADORA"); setErro(""); }}
                className={`flex-1 rounded-lg py-2 font-urbanist text-[13px] font-bold transition-all ${
                  tipo === "APOIADORA" ? "bg-white text-[#BE89BD] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Apoiadora
              </button>
              <button
                type="button"
                onClick={() => { setTipo("ADMIN"); setErro(""); }}
                className={`flex-1 rounded-lg py-2 font-urbanist text-[13px] font-bold transition-all ${
                  tipo === "ADMIN" ? "bg-white text-[#303030] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Admin
              </button>
            </div>

            {/* EMAIL */}
            <div className="mt-2">
              <label htmlFor="email" className="mb-1.5 block font-urbanist text-[14px] font-medium text-[#303030]">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErro(""); }}
                placeholder="exemplo@ifb.edu.br"
                className="h-[44px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-urbanist text-[14px] text-[#303030] outline-none transition-all focus:bg-white focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20"
              />
            </div>

            {/* SENHA */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="senha" className="block font-urbanist text-[14px] font-medium text-[#303030]">
                  Senha
                </label>
                <a href="#" className="font-urbanist text-[13px] font-medium text-[#BE89BD] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <input
                id="senha"
                type="password"
                autoComplete="current-password"
                required
                value={senha}
                onChange={(e) => { setSenha(e.target.value); setErro(""); }}
                placeholder="••••••••"
                className="h-[44px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-urbanist text-[14px] text-[#303030] outline-none transition-all focus:bg-white focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20"
              />
            </div>

            {/* FEEDBACK DE ERRO */}
            {erro && (
              <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-center">
                <p className="font-urbanist text-[13px] font-bold text-red-600">
                  {erro}
                </p>
              </div>
            )}

            {/* BOTÃO ENTRAR */}
            <button
              type="submit"
              disabled={carregando}
              className="mt-4 flex h-[48px] w-full items-center justify-center rounded-full bg-[#BE89BD] font-vastago text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(190,137,189,0.35)] transition-all hover:-translate-y-[1px] hover:bg-[#AA75A9] active:scale-95 disabled:pointer-events-none disabled:opacity-70"
            >
              {carregando ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Autenticando...
                </span>
              ) : (
                "Entrar"
              )}
            </button>

            {/* LINK CADASTRO */}
            <p className="mt-2 text-center font-urbanist text-[14px] text-[#707070]">
              Não tem uma conta?{" "}
              <a href="/#participar" className="font-bold text-[#BE89BD] hover:underline">
                Cadastre-se aqui
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
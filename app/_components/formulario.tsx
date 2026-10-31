"use client";

import { useState } from "react";

export function Formulario() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [vinculo, setVinculo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [matricula, setMatricula] = useState("");
  const [cpf, setCpf] = useState("");
  
  // Novos estados para a Senha
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErroMsg("");

    if (senha.length < 6) {
      setErroMsg("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (senha !== confirmarSenha) {
      setErroMsg("As senhas não coincidem. Tente novamente.");
      return;
    }

    // 2. Validações de Segurança do Documento
    if (tipo === "AJUDADA" && !matricula.trim()) {
      setErroMsg("Para receber apoio, é obrigatório informar sua Matrícula do IFB.");
      return;
    }
    if (tipo === "APOIADORA") {
      if ((vinculo === "ALUNA" || vinculo === "SERVIDORA") && !matricula.trim()) {
        setErroMsg("Por favor, preencha sua Matrícula do IFB.");
        return;
      }
      if (vinculo === "EXTERNA" && !cpf.trim()) {
        setErroMsg("Por favor, preencha seu CPF.");
        return;
      }
    }

    setCarregando(true);

    try {
      const resposta = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          tipo,
          email,
          telefone,
          senha, // Enviamos a senha para o backend
          matricula: (vinculo === "ALUNA" || vinculo === "SERVIDORA") ? matricula.trim() : undefined,
          cpf: vinculo === "EXTERNA" ? cpf.trim() : undefined,
        }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        setEnviado(true);
        // Limpeza dos campos
        setNome("");
        setTipo("");
        setVinculo("");
        setEmail("");
        setTelefone("");
        setMatricula("");
        setCpf("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        setErroMsg(resultado.erro || "Ocorreu um erro ao enviar o formulário.");
      }
    } catch (erro) {
      setErroMsg("Erro de conexão com o servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section id="participar" className="w-full bg-[#F8F8F8] px-4 py-12 sm:px-6 md:py-24">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col overflow-hidden rounded-[20px] border border-[#BE89BD] bg-white px-5 py-8 shadow-[0_18px_40px_rgba(48,48,48,0.20)] sm:px-8 sm:py-10 md:flex-row md:px-12 md:py-12">
        
        {/* LADO ESQUERDO */}
        <div className="flex flex-1 flex-col justify-center pr-0 md:pr-8 lg:pr-12">
          <h2 className="font-vastago text-[28px] font-bold leading-[1.1] text-[#303030] sm:text-[34px] md:text-[36px] lg:text-[42px]">
            <span className="bg-[#BE89BD] px-2 text-white">Entre em</span>
            <br />
            <span className="bg-[#BE89BD] px-2 text-white">contato conosco</span>
          </h2>
          <p className="mt-4 max-w-[390px] font-urbanist text-[14px] font-medium leading-[1.4] text-[#303030] sm:mt-6 sm:text-[16px]">
            Deixe seus dados para entrarmos em contato.
            <br className="hidden sm:inline" />
            Seja para receber ajuda ou apoiar outra mulher, faremos isso com cuidado e total privacidade.
          </p>
        </div>

        {/* FORMULÁRIO */}
        <form onSubmit={enviarFormulario} className="mt-8 flex flex-1 flex-col justify-center border-t border-gray-100 pt-6 md:mt-0 md:border-t-0 md:pl-8 md:pt-0">
          
          {/* NOME */}
          <div>
            <label htmlFor="nome" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Nome</label>
            <input
              id="nome" type="text" required value={nome} onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
            />
          </div>

          {/* EU QUERO SER */}
          <div className="mt-4">
            <label htmlFor="tipo" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Eu quero ser</label>
            <select
              id="tipo" required value={tipo} 
              onChange={(e) => {
                const selecao = e.target.value;
                setTipo(selecao);
                if (selecao === "AJUDADA") {
                  setVinculo("ALUNA"); 
                  setCpf("");          
                } else {
                  setVinculo("");      
                  setMatricula("");
                  setCpf("");
                }
              }}
              className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
            >
              <option value="">Selecione uma opção</option>
              <option value="APOIADORA">Apoiadora</option>
              <option value="AJUDADA">Mulher que precisa de ajuda</option>
            </select>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {/* EMAIL */}
            <div className="flex-1">
              <label htmlFor="email" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">E-mail</label>
              <input
                id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: maria@ifb.edu.br"
                className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
              />
            </div>
            
            {/* TELEFONE */}
            <div className="flex-1">
              <label htmlFor="telefone" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Telefone</label>
              <input
                id="telefone" type="tel" required value={telefone} onChange={(e) => setTelefone(e.target.value)}
                placeholder="(61) 90000-0000"
                className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
              />
            </div>
          </div>

          {/* VÍNCULO (Só aparece se ela for APOIADORA) */}
          {tipo === "APOIADORA" && (
            <div className="mt-4 animate-in fade-in duration-300">
              <label htmlFor="vinculo" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Vínculo com o IFB</label>
              <select
                id="vinculo" required value={vinculo} 
                onChange={(e) => {
                  setVinculo(e.target.value);
                  setMatricula(""); 
                  setCpf("");
                }}
                className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
              >
                <option value="">Selecione...</option>
                <option value="ALUNA">Sou Aluna do IFB</option>
                <option value="SERVIDORA">Sou Servidora do IFB</option>
                <option value="EXTERNA">Sem vínculo (Comunidade Externa)</option>
              </select>
            </div>
          )}

          {/* DOCUMENTO DINÂMICO */}
          {vinculo && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {(vinculo === "ALUNA" || vinculo === "SERVIDORA") ? (
                <div>
                  <label htmlFor="matricula" className="mb-1 block font-urbanist text-[14px] font-bold text-[#BE89BD] sm:text-[15px]">
                    Matrícula IFB
                  </label>
                  <input
                    id="matricula" type="text" required value={matricula} onChange={(e) => setMatricula(e.target.value)}
                    placeholder="Ex: 20261234"
                    className="h-[40px] w-full rounded-[7px] border-2 border-[#BE89BD] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="cpf" className="mb-1 block font-urbanist text-[14px] font-bold text-[#BE89BD] sm:text-[15px]">
                    CPF
                  </label>
                  <input
                    id="cpf" type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF"
                    className="h-[40px] w-full rounded-[7px] border-2 border-[#BE89BD] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
                  />
                </div>
              )}
            </div>
          )}

          {/* SENHAS */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row border-t border-gray-100 pt-4">
            <div className="flex-1">
              <label htmlFor="senha" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Crie uma Senha</label>
              <input
                id="senha" type="password" required value={senha} onChange={(e) => setSenha(e.target.value)}
                placeholder="Mín. 6 caracteres"
                className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
              />
            </div>
            
            <div className="flex-1">
              <label htmlFor="confirmarSenha" className="mb-1 block font-urbanist text-[14px] font-medium text-[#303030] sm:text-[15px]">Confirmar Senha</label>
              <input
                id="confirmarSenha" type="password" required value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Repita a senha"
                className="h-[40px] w-full rounded-[7px] border border-[#D8D8D8] bg-[#F3F3F3] px-3 font-urbanist text-[13px] text-[#303030] outline-none transition focus:border-[#BE89BD] focus:ring-2 focus:ring-[#BE89BD]/20 sm:h-[36px] sm:text-[12px]"
              />
            </div>
          </div>

          {/* ERRO DE VALIDAÇÃO */}
          {erroMsg && (
            <p className="mt-4 text-center font-urbanist text-[13px] font-bold text-red-500">
              {erroMsg}
            </p>
          )}

          {/* BOTÃO ENVIAR */}
          <button
            type="submit" disabled={carregando}
            className="mx-auto mt-5 flex h-[44px] w-full items-center justify-center rounded-full bg-[#BE89BD] px-8 font-vastago text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(190,137,189,0.35)] transition hover:-translate-y-[1px] hover:bg-[#AA75A9] active:scale-95 disabled:opacity-60 sm:h-[40px] sm:w-fit"
          >
            {carregando ? "Enviando..." : "Concluir Cadastro"}
          </button>
        </form>
      </div>

      {/* POP-UP DE SUCESSO */}
      {enviado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="flex w-full max-w-[290px] flex-col items-center justify-center rounded-[28px] bg-[#BE89BD] px-6 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:max-w-[270px] sm:px-7">
            <p className="font-vastago text-[16px] font-bold leading-[1.2] text-white sm:text-[17px]">
              Cadastro concluído!
              <br />
              Já pode fazer login.
            </p>
            <span className="mt-4 text-[25px] leading-none text-white">☺</span>
            <button
              type="button" onClick={() => { setEnviado(false); window.location.href = "/escolha"; }}
              className="mt-5 rounded-full bg-white/20 px-6 py-2 font-vastago text-[14px] font-bold text-white transition hover:bg-white/30 sm:text-[15px]"
            >
              Ir para o Login
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
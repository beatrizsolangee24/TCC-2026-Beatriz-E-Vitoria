"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AjudadaPage() {
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

  // Controle de estado para a regra de negócio de documentos
  // (Na versão final, isto virá do banco de dados)
  const [statusProgresso, setStatusProgresso] = useState("PENDENTE");
  
  const [arquivos, setArquivos] = useState<{ [key: string]: File | null }>({
    identidade: null,
    matricula: null,
    residencia: null,
  });
  const [carregando, setCarregando] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tipo: string) => {
    if (e.target.files && e.target.files[0]) {
      setArquivos({ ...arquivos, [tipo]: e.target.files[0] });
      setErroMsg(""); 
    }
  };

  const enviarDocumentos = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErroMsg("");

    if (!arquivos.identidade || !arquivos.matricula || !arquivos.residencia) {
      setErroMsg("Por favor, anexe todos os 3 documentos obrigatórios para prosseguir.");
      setCarregando(false);
      return;
    }

    const formData = new FormData();
    formData.append("identidade", arquivos.identidade);
    formData.append("matricula", arquivos.matricula);
    formData.append("residencia", arquivos.residencia);

    try {
      // Simulação do tempo de envio para a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatusProgresso("EM_ANALISE");
    } catch (error) {
      setErroMsg("Erro ao enviar documentos. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER (Mantido o seu código original) */}
      <header className="flex h-[59px] w-full items-center justify-between border-b border-[#3D3D3D] px-8 md:px-12">
        <div className="font-vastago text-[14px] font-bold text-[#303030]">
          Olá, <span className="text-[#BE89BD]">Ana Paula</span>
        </div>
        <button
          type="button"
          onClick={() => setMenuAberto(true)}
          className="flex h-[30px] min-w-[60px] items-center justify-center rounded-full bg-[#BE89BD] px-4 font-vastago text-[12px] font-bold text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)] transition hover:bg-[#AA75A9]"
        >
          Menu
        </button>
      </header>

      {/* CONTEÚDO PRINCIPAL DINÂMICO */}
      <section className="flex min-h-[calc(100vh-59px)] flex-col items-center justify-center px-6 py-12">
        
        {statusProgresso === "PENDENTE" && (
          <div className="w-full max-w-[800px] animate-in fade-in duration-500">
            
            {/* Aviso de Status PENDENTE */}
            <div className="mb-8 flex items-center gap-3 rounded-md border border-[#D5C5D4] bg-[#F9F0F8] px-4 py-3">
              <svg className="h-5 w-5 text-[#BE89BD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-urbanist text-[14px] font-bold text-[#505050]">Ação Necessária: Envio de Documentos</span>
            </div>

            {/* Formulário de Documentos */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F9FA] p-6 shadow-sm sm:p-8">
              <h3 className="mb-2 font-vastago text-[18px] font-bold text-[#303030]">
                Validação de Perfil
              </h3>
              <p className="mb-6 font-urbanist text-[14px] text-gray-500">
                Para podermos conectá-la à nossa rede de apoio, precisamos que envie os documentos abaixo. Faremos isso com cuidado e total privacidade.
              </p>

              <form onSubmit={enviarDocumentos} className="flex flex-col gap-5">
                <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all focus-within:border-[#BE89BD] focus-within:ring-1 focus-within:ring-[#BE89BD]">
                  <label className="mb-2 font-urbanist text-[14px] font-bold text-[#303030]">1. Documento de Identificação com foto (RG ou CNH)</label>
                  <input type="file" accept=".pdf, image/jpeg, image/png" onChange={(e) => handleFileChange(e, "identidade")} className="block w-full text-[13px] text-gray-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#BE89BD]/10 file:px-4 file:py-2 file:font-urbanist file:font-bold file:text-[#BE89BD] hover:file:bg-[#BE89BD]/20 transition-all" />
                </div>

                <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all focus-within:border-[#BE89BD] focus-within:ring-1 focus-within:ring-[#BE89BD]">
                  <label className="mb-2 font-urbanist text-[14px] font-bold text-[#303030]">2. Comprovante de Matrícula (IFB)</label>
                  <input type="file" accept=".pdf, image/jpeg, image/png" onChange={(e) => handleFileChange(e, "matricula")} className="block w-full text-[13px] text-gray-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#BE89BD]/10 file:px-4 file:py-2 file:font-urbanist file:font-bold file:text-[#BE89BD] hover:file:bg-[#BE89BD]/20 transition-all" />
                </div>

                <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all focus-within:border-[#BE89BD] focus-within:ring-1 focus-within:ring-[#BE89BD]">
                  <label className="mb-2 font-urbanist text-[14px] font-bold text-[#303030]">3. Comprovante de Residência Atualizado</label>
                  <input type="file" accept=".pdf, image/jpeg, image/png" onChange={(e) => handleFileChange(e, "residencia")} className="block w-full text-[13px] text-gray-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#BE89BD]/10 file:px-4 file:py-2 file:font-urbanist file:font-bold file:text-[#BE89BD] hover:file:bg-[#BE89BD]/20 transition-all" />
                </div>

                {erroMsg && (
                  <div className="mt-2 rounded-lg p-3 text-center font-urbanist text-[13px] font-bold bg-red-50 text-red-600 border border-red-200">
                    {erroMsg}
                  </div>
                )}

                <button
                  type="submit" disabled={carregando}
                  className="mx-auto mt-4 flex h-[48px] w-full max-w-[250px] items-center justify-center rounded-full bg-[#BE89BD] font-vastago text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(190,137,189,0.35)] transition-all hover:-translate-y-[1px] hover:bg-[#AA75A9] active:scale-95 disabled:pointer-events-none disabled:opacity-50"
                >
                  {carregando ? "Enviando..." : "Enviar Documentos"}
                </button>
              </form>
            </div>
          </div>
        )}

        {statusProgresso === "EM_ANALISE" && (
          <div className="flex w-full max-w-[500px] animate-in zoom-in-95 duration-500 flex-col items-center justify-center rounded-2xl border border-blue-100 bg-[#F8F9FA] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 font-vastago text-[22px] font-bold text-[#303030]">
              Documentos em Análise
            </h3>
            <p className="font-urbanist text-[15px] leading-relaxed text-gray-500">
              Recebemos os seus documentos! A nossa coordenação está a analisá-los para garantir a sua segurança. Voltaremos a contactá-la em breve.
            </p>
          </div>
        )}

        {/* TELA LIBERADA: Quando o perfil for Aprovado */}
        {statusProgresso === "APROVADA" && (
          <h1 className="text-center font-vastago text-[42px] font-bold leading-[1.02] text-[#303030] md:text-[58px]">
            Você <span className="text-[#BE89BD]">nunca mais</span>
            <br />
            estará sozinha
          </h1>
        )}
      </section>

      {/* FUNDO AO ABRIR O MENU (Mantido original) */}
      {menuAberto && (
        <button type="button" aria-label="Fechar menu" className="fixed inset-0 z-40 bg-black/10" onClick={() => setMenuAberto(false)} />
      )}

      {/* MENU LATERAL (Mantido original) */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[160px] bg-[#FAFAFA] px-5 py-10 shadow-[-8px_0_25px_rgba(0,0,0,0.12)] transition-transform duration-300 ${menuAberto ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-8 whitespace-nowrap font-vastago text-[12px] font-bold">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>
        <nav className="flex flex-col gap-5">
          <button type="button" onClick={() => router.push("/perfis")} className="flex items-center gap-2 whitespace-nowrap font-urbanist text-[12px] font-medium text-[#BE89BD] transition hover:text-[#937FBE]">
            <span className="text-[18px]">👥</span> Perfis
          </button>
          <button type="button" onClick={() => router.push("/contato-apoiadora")} className="flex items-center gap-2 whitespace-nowrap font-urbanist text-[12px] font-medium text-[#BE89BD] transition hover:text-[#937FBE]">
            <span className="text-[18px] font-bold">📞</span> Contato
          </button>
          <button type="button" onClick={() => router.push("/perfil-apoiadora")} className="flex h-[25px] items-center justify-center gap-2 rounded-full bg-[#BE89BD] font-urbanist text-[12px] font-medium text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)] transition hover:bg-[#AA75A9]">
            <span className="text-[18px]">👩🏽</span> Meu perfil
          </button>
        </nav>
      </aside>
    </main>
  );
}
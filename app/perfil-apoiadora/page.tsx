
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PerfilApoiadoraPage() {
  const router = useRouter();

  const [descricao, setDescricao] = useState(
    "Olá! Sou Ana Paula e desejo contribuir com a rede de apoio do ApoiaMulherIFB, ajudando mulheres da nossa instituição."
  );

  const [editando, setEditando] = useState(false);
  const [mensagemSalva, setMensagemSalva] = useState(false);

  useEffect(() => {
    const descricaoSalva = localStorage.getItem(
      "descricaoPerfilApoiadora"
    );

    if (descricaoSalva !== null) {
      setDescricao(descricaoSalva);
    }
  }, []);

  function salvarDescricao() {
    localStorage.setItem("descricaoPerfilApoiadora", descricao);
    setEditando(false);
    setMensagemSalva(true);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* CABEÇALHO */}
      <header className="flex h-[59px] items-center justify-between border-b border-[#3D3D3D] px-8 md:px-12">
        <div className="font-vastago text-[14px] font-bold text-[#303030]">
          Olá, <span className="text-[#BE89BD]">Ana Paula</span>
        </div>

        <button
          type="button"
          onClick={() => router.push("/apoiadora")}
          className="rounded-full bg-[#BE89BD] px-5 py-2 font-vastago text-[12px] font-bold text-white shadow-md transition hover:bg-[#AA75A9]"
        >
          Voltar
        </button>
      </header>

      {/* PERFIL */}
      <section className="mx-auto flex w-full max-w-[700px] flex-col items-center px-6 py-12">
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#BE89BD] text-white">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
          </svg>
        </div>

        <h1 className="mt-5 font-vastago text-[28px] font-bold text-[#303030]">
          Ana Paula
        </h1>

        <span className="mt-2 rounded-full bg-[#BE89BD] px-4 py-1 font-urbanist text-[12px] font-semibold text-white">
          Apoiadora
        </span>

        {/* SOBRE MIM */}
        <div className="mt-8 w-full rounded-[20px] border border-[#E8D9E8] p-6 shadow-[0_5px_18px_rgba(190,137,189,0.15)]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-vastago text-[18px] font-bold text-[#BE89BD]">
              Sobre mim
            </h2>

            {!editando && (
              <button
                type="button"
                onClick={() => {
                  setEditando(true);
                  setMensagemSalva(false);
                }}
                aria-label="Editar informações sobre mim"
                title="Editar informações"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#BE89BD] text-[#BE89BD] transition hover:bg-[#F8EFF8]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m16 4 4 4" />
                  <path d="M4 20l4-.8L19 8a2.12 2.12 0 0 0-3-3L5 16l-1 4Z" />
                </svg>
              </button>
            )}
          </div>

          {editando ? (
            <>
              <label
                htmlFor="descricao"
                className="mt-4 block font-urbanist text-[14px] text-[#303030]"
              >
                Escreva um pouco sobre você:
              </label>

              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows={5}
                maxLength={1000}
                className="mt-2 w-full resize-y rounded-xl border border-[#BE89BD] p-3 font-urbanist text-[14px] leading-relaxed text-[#303030] outline-none focus:ring-2 focus:ring-[#BE89BD]/30"
                placeholder="Conte um pouco sobre você..."
              />

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={salvarDescricao}
                  className="rounded-full bg-[#BE89BD] px-5 py-2 font-vastago text-[12px] font-bold text-white transition hover:bg-[#AA75A9]"
                >
                  Salvar alterações
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const salva = localStorage.getItem(
                      "descricaoPerfilApoiadora"
                    );

                    if (salva !== null) {
                      setDescricao(salva);
                    }

                    setEditando(false);
                  }}
                  className="rounded-full border border-[#BE89BD] px-5 py-2 font-vastago text-[12px] font-bold text-[#BE89BD] transition hover:bg-[#F8EFF8]"
                >
                  Cancelar
                </button>
              </div>
            </>
          ) : (
            <p className="mt-3 whitespace-pre-wrap font-urbanist text-[15px] leading-relaxed text-[#303030]">
              {descricao || "Você ainda não adicionou uma descrição."}
            </p>
          )}

          {mensagemSalva && (
            <p className="mt-3 font-urbanist text-[13px] text-[#937FBE]">
              Informações salvas com sucesso!
            </p>
          )}

          {!editando && (
            <div className="mt-6 border-t border-[#E8D9E8] pt-5">
              <p className="font-urbanist text-[14px] text-[#303030]">
                <strong>Tipo de usuária:</strong> Apoiadora
              </p>

              <p className="mt-3 font-urbanist text-[14px] text-[#303030]">
                <strong>Instituição:</strong> IFB
              </p>
            </div>
          )}
        </div>

        {/* VOLTAR PARA O INÍCIO */}
        <button
          type="button"
          onClick={() => router.push("/apoiadora")}
          className="mt-7 h-[40px] rounded-full bg-[#BE89BD] px-8 font-vastago text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(190,137,189,0.35)] transition hover:-translate-y-[1px] hover:bg-[#AA75A9]"
        >
          Voltar para o início
        </button>
      </section>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const mulheres = [
  {
    id: 1,
    nome: "Maria Júlia Queiroz",
    codigo: "23546",
    descricao:
      "Olá! Me chamo Maria Júlia Queiroz, tenho 19 anos e sou estudante do IFB, no campus São Sebastião. Estou precisando de ajuda com materiais escolares para meus filhos e alimentos. Agradeço a quem puder me ajudar.",
  },

  {
    id: 2,
    nome: "Ana Clara",
    codigo: "23547",
    descricao:
      "Sou estudante do IFB e estou passando por dificuldades financeiras. Preciso de apoio com materiais escolares e alimentação.",
  },
  {
    id: 3,
    nome: "Juliana Santos",
    codigo: "23548",
    descricao:
      "Sou aluna do IFB e gostaria de receber ajuda com itens essenciais para mim e minha família.",
  },
];

export default function PerfisPage() {
  const router = useRouter();

  const [menuAberto, setMenuAberto] = useState(false);
  const [mulherSelecionada, setMulherSelecionada] = useState<
    (typeof mulheres)[number] | null
  >(null);
  const [mensagem, setMensagem] = useState("");
const [descricaoMaria, setDescricaoMaria] = useState(mulheres[0].descricao);

useEffect(() => {
  const descricaoSalva = localStorage.getItem("descricaoPerfil");

  if (descricaoSalva) {
    setDescricaoMaria(descricaoSalva);
  }
}, []);
  function apoiar(mulher: (typeof mulheres)[number]) {
    if (mulherSelecionada?.id === mulher.id) {
      setMulherSelecionada(null);
      setMensagem("");
      return;
    }

    setMulherSelecionada(mulher);
    setMensagem("");
  }

  function enviarEmail(mulher: (typeof mulheres)[number]) {
    const assunto =
      "Interesse em apoiar " + mulher.nome + " - Código " + mulher.codigo;

    const textoMensagem = mensagem.trim()
      ? mensagem.trim()
      : "Gostaria de conversar sobre as possibilidades de apoio.";

    const corpo =
      "Olá, equipe do ApoiaMulherIFB!\n\n" +
      "Gostaria de oferecer apoio para " +
      mulher.nome +
      ".\n" +
      "Código do perfil: " +
      mulher.codigo +
      ".\n\n" +
      "Minha mensagem:\n" +
      textoMensagem +
      "\n\nAtenciosamente,";

    const mailto =
      "mailto:beatrizsolangeedesign@gmail.com?subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpo);

    window.location.href = mailto;
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
          onClick={() => setMenuAberto(true)}
          className="flex h-[32px] items-center justify-center rounded-full bg-[#BE89BD] px-5 font-vastago text-[12px] font-bold text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)] transition hover:bg-[#AA75A9]"
        >
          Menu
        </button>
      </header>

      {/* LISTA DE PERFIS */}
      <section className="mx-auto w-full max-w-[850px] px-6 py-10 md:px-10">
        <h1 className="mb-8 font-vastago text-[25px] font-bold text-[#BE89BD] md:text-[30px]">
          Quero apoiar a:
        </h1>

        <div className="flex flex-col gap-7">
          {mulheres.map((mulher) => (
            <article
              key={mulher.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5"
            >
              {/* ÍCONE DO PERFIL */}
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center self-start rounded-full bg-[#BE89BD] text-white">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
                </svg>
              </div>

              {/* INFORMAÇÕES DO PERFIL */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-vastago text-[15px] font-bold text-[#303030]">
                    {mulher.nome}
                  </h2>

                  <span className="rounded-full bg-[#BE89BD] px-3 py-1 font-urbanist text-[10px] font-semibold text-white">
                    Código: {mulher.codigo}
                  </span>
                </div>

                <p className="mt-2 max-w-[600px] font-urbanist text-[15px] font-normal leading-[1.6] text-[#303030]">
                  {mulher.id === 1 ? descricaoMaria : mulher.descricao}
                </p>

                {/* BOTÃO APOIAR */}
                <div className="mt-4 flex justify-end sm:pr-2">
                  <button
                    type="button"
                    onClick={() => apoiar(mulher)}
                    className="flex h-[32px] min-w-[82px] items-center justify-center rounded-full bg-[#BE89BD] px-5 font-vastago text-[11px] font-bold text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)] transition hover:-translate-y-[1px] hover:bg-[#AA75A9] active:scale-95"
                  >
                    {mulherSelecionada?.id === mulher.id
                      ? "Fechar"
                      : "Apoiar"}
                  </button>
                </div>

                {/* CAMPO DE MENSAGEM */}
                {mulherSelecionada?.id === mulher.id && (
                  <div className="mt-4 rounded-2xl border border-[#BE89BD]/40 bg-white p-5 shadow-[0_4px_12px_rgba(190,137,189,0.12)]">
                    <h3 className="font-vastago text-[16px] text-[#BE89BD]">
                      Quero apoiar {mulher.nome}
                    </h3>

                    <p className="mt-2 font-urbanist text-[14px] leading-relaxed text-[#303030]">
                      Escreva uma mensagem para a equipe responsável pelo
                      ApoiaMulherIFB.
                    </p>

                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Olá! Gostaria de oferecer apoio..."
                      rows={4}
                      className="mt-4 w-full resize-y rounded-xl border border-[#BE89BD]/50 px-4 py-3 font-urbanist text-[15px] text-[#303030] outline-none transition placeholder:text-gray-400 focus:border-[#937FBE] focus:ring-2 focus:ring-[#BE89BD]/20"
                    />

                    <div className="mt-4 flex flex-wrap justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setMulherSelecionada(null);
                          setMensagem("");
                        }}
                        className="h-10 rounded-full border border-[#BE89BD] px-5 font-urbanist text-[14px] font-semibold text-[#BE89BD] transition hover:bg-[#BE89BD]/10"
                      >
                        Cancelar
                      </button>

                      <button
                        type="button"
                        onClick={() => enviarEmail(mulher)}
                        className="h-10 rounded-full bg-[#BE89BD] px-5 font-urbanist text-[14px] font-bold text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)] transition hover:bg-[#AA75A9]"
                      >
                        Enviar e-mail
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FUNDO AO ABRIR O MENU */}
      {menuAberto && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuAberto(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/10"
        />
      )}

      {/* MENU LATERAL */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[160px] bg-white px-5 py-10 shadow-[-8px_0_25px_rgba(0,0,0,0.12)] transition-transform duration-300 ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 whitespace-nowrap font-vastago text-[12px] font-bold">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>

        <nav className="flex flex-col gap-5">
          <button
            type="button"
            onClick={() => {
              setMenuAberto(false);
              router.push("/perfis");
            }}
            className="flex items-center gap-2 whitespace-nowrap font-urbanist text-[12px] font-medium text-[#BE89BD] transition hover:text-[#937FBE]"
          >
            <span className="text-[18px]">♙</span>
            Perfis
          </button>

          <button
            type="button"
            onClick={() => {
              setMenuAberto(false);
              router.push("/contato-apoiadora");
            }}
            className="flex items-center gap-2 whitespace-nowrap font-urbanist text-[12px] font-medium text-[#BE89BD] transition hover:text-[#937FBE]"
          >
            <span className="text-[18px]">✆</span>
            Contato
          </button>

          <button
            type="button"
            onClick={() => {
              setMenuAberto(false);
              router.push("/perfil-apoiadora");
            }}
            className="flex h-[25px] items-center justify-center gap-2 rounded-full bg-[#BE89BD] font-urbanist text-[12px] font-medium text-white shadow-[0_4px_8px_rgba(190,137,189,0.25)]"
          >
            <span className="text-[18px]">☻</span>
            Meu perfil
          </button>
        </nav>
      </aside>
    </main>
  );
}

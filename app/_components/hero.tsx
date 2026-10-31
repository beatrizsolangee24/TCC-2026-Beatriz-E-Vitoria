import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white">
      {/* CABEÇALHO (NAVBAR) */}
      <header className="h-[59px] w-full border-b border-[#3D3D3D] flex items-center justify-between px-4 md:px-[41px]">
        <div className="font-vastago font-bold text-[18px]">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>

        <nav className="flex items-center gap-3 md:gap-[16px]">
          <a
            href="#participar"
            className="hidden md:block font-vastago text-[14px] font-bold text-[#BE89BD] transition hover:opacity-80"
          >
            Apoiar
          </a>

          <a
            href="#participar"
            className="hidden sm:flex h-[38px] px-4 items-center justify-center rounded-full border-[1.5px] border-[#BE89BD] bg-white font-vastago text-[13px] md:text-[14px] font-bold text-[#BE89BD] whitespace-nowrap transition hover:bg-[#BE89BD] hover:text-white"
          >
            Quero ser ajudada
          </a>

          <a
            href="/login"
            className="flex h-[38px] px-[20px] items-center justify-center rounded-full bg-gradient-to-r from-[#BE89BD] to-[#937FBE] font-vastago text-[13px] md:text-[14px] font-bold text-white whitespace-nowrap shadow-[0_4px_8px_rgba(147,127,190,0.25)] transition hover:opacity-90"
          >
            Entrar
          </a>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL (Sem bordas pretas no mobile) */}
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px]">
        
        {/* 1. TEXTO NO TOPO (Apenas Mobile - Centralizado) */}
        <div className="flex md:hidden flex-col items-center text-center p-6 pb-2">
          <h1 className="font-vastago text-[36px] sm:text-[42px] font-bold leading-[1.05] text-[#303030]">
            <span className="text-[#BE89BD]">Mulher</span> você não
            <br />
            está sozinha
          </h1>
          <p className="mt-4 font-urbanist text-[15px] font-medium leading-[1.4] text-[#555555]">
            Conectamos mulheres que querem ajudar com aquelas que precisam através de doações, apoio e acolhimento real.
          </p>
        </div>

        {/* 2. IMAGEM (Borda lateral aplicada apenas a partir de md/computador) */}
        <div className="flex items-center justify-center md:justify-end p-6 md:border-r md:border-[#3D3D3D] md:pr-8 lg:pr-12">
          <div className="relative w-full max-w-[560px] aspect-video">
            <Image
              src="/mulheres.jpg"
              alt="Mulheres caminhando juntas"
              fill
              priority
              className="object-cover rounded-sm"
            />
          </div>
        </div>

        {/* 3. TEXTO E BOTÃO */}
        <div className="flex flex-col justify-center items-center md:items-start p-6 pt-2 md:pl-8 lg:pl-12">
          <div className="max-w-[480px] w-full flex flex-col items-center md:items-start">
            
            {/* Texto do desktop */}
            <div className="hidden md:block text-left w-full">
              <h1 className="font-vastago lg:text-[52px] md:text-[42px] font-bold leading-[1.05] text-[#303030]">
                <span className="text-[#BE89BD]">Mulher</span> você não
                <br />
                está sozinha
              </h1>
              <p className="mt-5 font-urbanist lg:text-[16px] md:text-[15px] font-medium leading-[1.4] text-[#555555]">
                Conectamos mulheres que querem ajudar com aquelas que precisam através de doações, apoio e acolhimento real.
              </p>
            </div>

            {/* Botão Quero participar */}
            <a
              href="#participar"
              className="mt-4 md:mt-7 w-full sm:w-fit px-8 h-[44px] sm:h-[40px] rounded-full bg-[#BE89BD] flex items-center justify-center text-white font-vastago font-bold text-[14px] shadow-[0_4px_12px_rgba(190,137,189,0.35)] transition hover:-translate-y-[1px] hover:bg-[#aa75a9]"
            >
              Quero participar
            </a>
          </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="w-full h-[24px] bg-[#BE89BD]" />
    </section>
  );
}
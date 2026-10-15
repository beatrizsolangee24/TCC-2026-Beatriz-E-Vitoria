export default function About() {
  return (
    <section
      id="sobre"
      className="w-full bg-white px-6 py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">

        {/* TEXTO */}
        <div className="flex-1">

          {/* TÍTULO */}
          <h2 className="font-vastago text-4xl font-bold text-[#BE89BD] md:text-5xl">
            <span className="text-[#353435]">Sobre</span> o Apoia Mulher
          </h2>

          {/* TEXTO */}
         <p className="mt-6 font-urbanist text-[16px] leading-[1.25] text-[#303030]">
            O Apoia Mulher é uma plataforma criada para fortalecer
            a rede de apoio entre mulheres, promovendo acolhimento,
            conexão e acesso a informações importantes.
          </p>

          <p className="mt-4 font-urbanist text-[16px] leading-[1.25] text-[#303030]">
            A proposta é criar um espaço seguro onde mulheres possam
            encontrar apoio, compartilhar experiências e conhecer
            recursos que contribuam para o seu desenvolvimento.
          </p>

          {/* BOTÃO */}
     <a
  href="/projeto"
  className="
    mt-7
    w-fit
    px-8
    h-[40px]
    rounded-full
    bg-[#BE89BD]
    flex
    items-center
    justify-center
    text-white
    font-vastago
    font-bold
    text-[14px]
    shadow-[0_4px_12px_rgba(190,137,189,0.35)]
    transition
    hover:-translate-y-[1px]
    hover:bg-[#AA75A9]
  "
>
  Conheça o projeto
</a>

        </div>

        {/* IMAGEM */}
        <div className="flex flex-1 justify-center">
          <img
            src="/sobre-projeto.png"
            alt="Mulheres ajudando"
            className="w-full max-w-md rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
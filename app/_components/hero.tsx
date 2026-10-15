import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white">

      <header className="h-[59px] w-full border-b border-[#3D3D3D] flex items-center justify-between px-[41px]">

        <div className="font-vastago font-bold text-[18px]">
          <span className="text-[#BE89BD]">Apoia</span>
          <span className="text-[#937FBE]">MulherIFB</span>
        </div>

        <nav className="flex items-center gap-[16px]">

          <a
  href="#participar"
  className="
    font-vastago
    text-[14px]
    font-bold
    text-[#BE89BD]
    transition
    hover:opacity-80
  "
>
  Apoiar
</a>

<a
  href="#participar"
  className="
    flex
    h-[38px]
    px-[18px]
    items-center
    justify-center
    rounded-full
    border-[1.5px]
    border-[#BE89BD]
    bg-white
    font-vastago
    text-[14px]
    font-bold
    text-[#BE89BD]
    transition
    hover:bg-[#BE89BD]
    hover:text-white
  "
>
  Quero ser ajudada
</a>

          <a
            href="/escolha"
            className="
              flex
              h-[38px]
              px-[20px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#BE89BD]
              to-[#937FBE]
              font-vastago
              text-[14px]
              font-bold
              text-white
              shadow-[0_4px_8px_rgba(147,127,190,0.25)]
              transition
              hover:opacity-90
            "
          >
            Entrar
          </a>

        </nav>
      </header>


      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">

        <div
          className="
            border-r
            border-[#3D3D3D]
            flex
            items-center
            justify-end
            p-6
            pr-8
            lg:pr-12
          "
        >
          <div className="relative w-full max-w-[560px] aspect-video">
            <Image
              src="/mulheres.png"
              alt="Mulheres caminhando juntas"
              fill
              priority
              className="object-cover rounded-sm"
            />
          </div>
        </div>


        <div
          className="
            flex
            flex-col
            justify-center
            items-start
            p-6
            pl-8
            lg:pl-12
          "
        >
          <div className="max-w-[480px]">

            <h1
              className="
                font-vastago
                text-[42px]
                lg:text-[52px]
                font-bold
                leading-[1.05]
                text-[#303030]
              "
            >
              <span className="text-[#BE89BD]">Mulher</span> você não
              <br />
              está sozinha
            </h1>

            <p
              className="
                mt-5
                font-urbanist
                text-[15px]
                lg:text-[16px]
                font-medium
                leading-[1.4]
                text-[#555555]
              "
            >
              Conectamos mulheres que querem ajudar com aquelas que precisam
              através de doações, apoio e acolhimento real.
            </p>

            <a
              href="#participar"
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
                hover:bg-[#aa75a9]
              "
            >
              Quero participar
            </a>

          </div>
        </div>

      </div>


      <div className="w-full h-[24px] bg-[#BE89BD]" />

    </section>
  );
}